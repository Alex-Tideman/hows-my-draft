import { readable, writable } from 'svelte/store';

export const yScroll = writable(0);

yScroll.subscribe(value => {
	console.log(value);
});


// const getPlayer = (n) => {
// 	return { name: `Aaron Rodgers ${n}`, team: "Green Bay Packers", position: "QB" }
// }
  
// const cards = [...Array(200).keys()].map(n => getPlayer(n + 1));

const teams = [
	{ name: "Boom or Bimbust", id: 1 },
	{ name: "Steve's Jeans", id: 2 },
	{ name: "Real Steve", id: 3 },
	{ name: "Fuck you Holl Team", id: 4 },
	{ name: "The Dirty Wash Boyz", id: 5 },
	{ name: "Papa Bearskin Rug", id: 6 },
	{ name: "GriffsSt8Dad", id: 7 },
	{ name: "Kittle Corn", id: 8 },
	{ name: "TheItallianStallions", id: 9 },
	{ name: "flat TURF rnd GURTH", id: 10 }
]

const players = [
	{ name: "Jonathan Taylor", team: "Indianapolis", position: "RB", cost: 26, team_id: 1, keeper: true },
	{ name: "Darrell Henderson Jr.", team: "LA Rams", position: "RB", cost: 6, team_id: 2, keeper: true },
	{ name: "Nick Chubb", team: "Cleveland Browns", position: "QB", cost: 16, team_id: 3, keeper: true },
	{ name: "", team: "", position: "", team_id: 4, cost: 0, keeper: true },
	{ name: "DK Metcalf", team: "Seattle Seahawks", position: "WR", team_id: 5, cost: 13, keeper: true },
	{ name: "Justin Herbert", team: "LA Chargers", position: "QB", team_id: 6, cost: 5, keeper: true },
	{ name: "Darren Waller", team: "Las Vegas Raiders", position: "TE", team_id: 7, cost: 6, keeper: true },
	{ name: "CeeDee Lamb", team: "Dallas Cowboys", position: "WR", team_id: 8, cost: 9, keeper: true },
	{ name: "Lamar Jackson", team: "Baltimore Ravens", position: "QB", team_id: 9, cost: 11, keeper: true },
	{ name: "T.J. Hockenson", team: "Detroit Lions", position: "QB", team_id: 10, cost: 6, keeper: true },
];

// 1000 players
const allPlayers = [
	...players, ...players,...players,...players,...players, ...players, ...players,...players,...players,...players, // 100 players
	...players, ...players,...players,...players,...players, ...players, ...players,...players,...players,...players, // 100 players
	...players, ...players,...players,...players,...players, ...players, ...players,...players,...players,...players, // 100 players
	...players, ...players,...players,...players,...players, ...players, ...players,...players,...players,...players, // 100 players
	...players, ...players,...players,...players,...players, ...players, ...players,...players,...players,...players, // 100 players
	...players, ...players,...players,...players,...players, ...players, ...players,...players,...players,...players, // 100 players
	...players, ...players,...players,...players,...players, ...players, ...players,...players,...players,...players, // 100 players
	...players, ...players,...players,...players,...players, ...players, ...players,...players,...players,...players, // 100 players
	...players, ...players,...players,...players,...players, ...players, ...players,...players,...players,...players, // 100 players
	...players, ...players,...players,...players,...players, ...players, ...players,...players,...players,...players  // 100 players
]

export const itemStore = (initialValue) => {
  const { subscribe, set, update } = writable(initialValue)

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
		}
  }
}


export const items = itemStore(players);
