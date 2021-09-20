import { readable, writable } from 'svelte/store';
import lodash from 'lodash';
import { members, draft } from './draftResults';
import { week1 } from './week1Results';

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
const { groupBy, orderBy, sortBy } = lodash;

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


const getTotalPoints = (weeks) => {
	if (!weeks || !weeks.length) {
		return 0;
	}
	return weeks
		.filter(w => w.roster_position !== 'BN')
		.reduce((sum, week) => sum += parseFloat(week.points), 0)
}

const getGamesPlayed = (weeks) => {
	if (!weeks || !weeks.length) {
		return 0;
	}
	return weeks
		.filter(w => w.roster_position !== 'BN')
		.length
}

export const statStore = (initialValue: { matchups: Matchup[], performances: Performance[] }) => {
  const { subscribe, set, update } = writable(initialValue);

  return {
    subscribe,
    set: (value) => {
      return set(value)
    },
    update,
		getOwnerStats: (list) => {
			const groupedPeformance = groupBy(initialValue.performances, 'name');
			const statList = list.map(x => {
				const weeks = groupedPeformance[x.name] ?? [];
				const gamesPlayed = getGamesPlayed(weeks);
				const totalPoints = getTotalPoints(weeks);
				const pointsPerDollar = gamesPlayed > 0 ? (totalPoints / parseInt(x.cost)).toFixed(2) : 0	
				return { 
					...x, 
					gamesPlayed,
					totalPoints,
					cost: pointsPerDollar,
					weeks,
				}
			})
			const orderedList = orderBy(statList, 'cost', 'desc');
			return orderedList;
		}
  }
}

export const items = itemStore(draft);
export const owners = readable(members, set => {
	set(members);
});
export const results = readable(week1, set => {
	set(week1);
});