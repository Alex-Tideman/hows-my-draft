import { readable, writable } from 'svelte/store';
import lodash from 'lodash';
import { members, draft } from './draftResults';

export interface Matchup {
	manager: string;
	opp_points: string;
	opp_proj_points: string;
	opponent: string;
	points: string;
	proj_points: string;
	week: string;
}

export interface Performance {
	'2-PT': string;
	'Blk Kick': string;
	'FG 0-19': string;
	'FG 20-29': string;
	'FG 30-39': string;
	'FG 40-49': string;
	'FG 50+': string;
	'Fum Lost': string;
	'Fum Rec': string;
	'Fum Ret TD': string;
	Int: string;
	'PAT Made': string;
	'Pass TD': string;
	'Pass Yds': string;
	'Pts Allow': string;
	'Pts Allow 0': string;
	'Pts Allow 1-6': string;
	'Pts Allow 7-13': string;
	'Pts Allow 14-20': string;
	'Pts Allow 21-27': string;
	'Pts Allow 28-34': string;
	'Pts Allow 35+': string;
	Rec: string;
	'Rec TD': string;
	'Rec Yds': string;
	'Ret TD': string;
	'Rush Att': string;
	'Rush TD': string;
	'Rush Yds': string;
	'Sack': string;
	'Safe': string;
	'TD': string;
	'Targets': string;
	'XPR': string;
	manager: string;
	name: string;
	points: string;
	position: string;
	roster_position: string;
	week: string;
}
const { groupBy, orderBy, sortBy, omit } = lodash;

export const yScroll = writable(0);

const itemStore = (initialValue) => {
  const { subscribe, set, update } = writable(initialValue);

  return {
    subscribe,
    set: (value) => {
      return set(value)
    },
    update,
		getCurrentSet: (index) => {
			if (index === 0) {
				return initialValue.slice(index, index + 4)
			}
			return initialValue.slice(index - 1, index + 4)
		},
		getFullSet: () => {
			return initialValue;
		},
		getOwnerSet: (id: number, showRemaining: boolean) => {
			if (id) {
				const players = initialValue.filter(i => i.owner_id === id);
				if (showRemaining) {
					const remaining = 200 - players.reduce((sum, p) => sum += p.cost, 0);
					const final = [...players, { name: "Remaining", team: "", position: "", cost: remaining }]
					return final;
				}
				return players;
			}
			return initialValue;
		},
		getPositionSet: (position: string, id: number) => {
			if (id) {
				return initialValue.filter(i => i.position === position && i.owner_id === id);
			}
			return initialValue.filter(i => i.position === position);
		},
		getPositionSets: (positions: string[], id: number) => {
			if (id) {
				return initialValue.filter(i => positions.includes(i.position) && i.owner_id === id);
			}
			return initialValue.filter(i => positions.includes(i.position));
		},
		getRoundData: (id: number) => {
			const ownerData = id === 0 ? initialValue : initialValue.filter(i => i.owner_id === id)
			const rounds = groupBy(ownerData, 'round');
			const roundData = Object.keys(rounds).map(key => {
				let value = rounds[key].reduce((sum, i) => sum += i.cost, 0);
				return { label: parseInt(key), value }
			})
			return roundData;
		},
		getPositionData: (id: number) => {
			const ownerData = id === 0 ? initialValue : initialValue.filter(i => i.owner_id === id)
			const positions = groupBy(ownerData, 'position');
			const positionData = Object.keys(positions).map(key => {
				let value = positions[key].reduce((sum, i) => sum += i.cost, 0);
				return { label: key, value }
			})
			return positionData;
		},
		getTeamData: (id: number) => {
			const ownerData = id === 0 ? initialValue : initialValue.filter(i => i.owner_id === id)
			const teams = groupBy(ownerData.filter(d => Boolean(d.team)), 'team');
			const teamData = Object.keys(teams).map(key => {
				let value = teams[key].reduce((sum, i) => sum += i.cost, 0);
				return { label: key, value }
			})
			return sortBy(teamData, 'label');
		},
  }
}

const generatePlayerState = (initialValue, list) => {
	const groupPerformanceByPosition = groupBy(initialValue.performances.filter(p => p.name), 'position');

	const playerStats = {};
	Object.keys(groupPerformanceByPosition).forEach(position => {
		playerStats[position] = { players: {} }
		const positionPeformanceByName = groupBy(groupPerformanceByPosition[position], 'name');
		Object.keys(positionPeformanceByName).forEach(name => {
			const drafted = list.find(l => l.name === name);
			const weeks = positionPeformanceByName[name];
			const totalPoints = weeks.reduce((sum, week) => sum += parseFloat(week.points), 0)
			const avgPoints = weeks.length > 0 ? totalPoints / weeks.length : 0;
			const playerStat: PlayerStat = { 
				name: drafted ? drafted.name : weeks[0].name,
				position: drafted ? drafted.position : weeks[0].position,
				cost: drafted ? parseInt(drafted.cost) : 0,
				totalPoints,
				avgPoints,
				weeks: positionPeformanceByName[name],
				player: true,
			}
			playerStats[position].players[name] = playerStat;
		})
		const draftedPlayers = Object.values(playerStats[position].players).filter((p: PlayerStat) => p.cost)
		const avgCost = draftedPlayers.reduce((sum: number, p: PlayerStat) => sum += p.cost, 0) as number / draftedPlayers.length
		const avgPoints = draftedPlayers.reduce((sum: number, p: PlayerStat) => sum += p.avgPoints, 0) as number / draftedPlayers.length
		playerStats[position].avgCost = avgCost;
		playerStats[position].avgPoints = avgPoints;
		Object.values(playerStats[position].players).forEach((player: PlayerStat) => {
			// High pointsDiff => Scoring a lot. Outperforming avg for position
			const pointsDiff = player.avgPoints - playerStats[position].avgPoints;
			// High costMultiplier => Cheap compared to position avg cost
			const costMultiplier = player.cost ? playerStats[position].avgCost / player.cost : 0;
			// High playerRatio => Overperforming and cheap compared to position avg cost
			const playerRatio = pointsDiff >= 0 ? pointsDiff * costMultiplier : pointsDiff / costMultiplier;
			const week = player.weeks[0];
			player.playerRatio = playerRatio;
			player.pointsDiff = pointsDiff;
			player.costMultiplier = costMultiplier;
			if (week) {
				const playerProperties = omit(week, ['manager', 'name', 'position', 'roster_position', 'week']);
				const playerTotals = {}
				Object.keys(playerProperties).forEach(key => {
					playerTotals[key] = player?.weeks?.reduce((sum, w) => sum += (isNaN(w[key]) ? 0 : parseFloat(w[key])), 0) ?? 0;
				})
				console.log("PLayer; ", player)
				player.totals = playerTotals;
			}
		})
	})
	return playerStats;
}

const generateStatList = (list, playerStats) => {
	return list.map(x => {
		const playerStat = playerStats[x.position].players[x.name];
		if (!playerStat) {
			return {
				...x,
				totalPoints: 0,
				avgPoints: 0,
				weeks: [],
				playerRatio: 0,
				pointsDiff: 0 - playerStats[x.position].avgPoints,
				costMultiplier: x.cost ? playerStats[x.position].avgCost / x.cost : 0,
				player: true,
			}
		}
		return {
			...x, 
			...playerStat,
		}
	})
}

interface PlayerStat {
	name: string;
	position: string;
	cost: number;
	totalPoints: number;
	avgPoints: number;
	weeks: any[];
	playerRatio?: number;
	pointsDiff?: number;
	costMultiplier?: number;
	player?: boolean;
	totals: any[];
}

const getTopAndBottom = (list) => {
	const orderedList = orderBy(list, 'playerRatio', 'desc');
	const top5 = orderedList.slice(0, 5)
	const bottom5 = orderedList.slice(orderedList.length - 5, orderedList.length)
	return { top5, bottom5 };
}

export const statStore = (initialValue, list) => {
	const draftList = list;
	const playerStats = generatePlayerState(initialValue, list);
  const { subscribe, set, update } = writable(initialValue);

  return {
    subscribe,
    set: (value) => {
      return set(value)
    },
    update,
		getLeagueStats: (memberList) => {
			const leagueStatList = memberList.map(({ member, list }) => {
				const memberStatList = generateStatList(list, playerStats)
				const playerRatio = memberStatList.reduce((sum, player) => sum += player.playerRatio, 0)
				return { name: member.team, team: member.name, img: member.img, playerRatio }
			});
			return getTopAndBottom(leagueStatList)
		},
		getPositionLeaderStats: (position) => {
			const fullList = generateStatList(draftList, playerStats);
			const positionList = fullList.filter(l => l.position === position);
			return getTopAndBottom(positionList)
		},
		getOwnerStats: (ownerList) => {
			const statList = generateStatList(ownerList, playerStats);
			const orderedList = orderBy(statList, 'playerRatio', 'desc');
			return orderedList;
		},
  }
}

export const items = itemStore(draft);
export const owners = readable(members, set => {
	set(members);
});
