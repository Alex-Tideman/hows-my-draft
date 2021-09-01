import { readable, writable } from 'svelte/store';

export const yScroll = writable(0);

yScroll.subscribe(value => {
	console.log(value);
});


// const getPlayer = (n) => {
// 	return { name: `Aaron Rodgers ${n}`, team: "Green Bay Packers", position: "QB" }
// }
  
// const cards = [...Array(200).keys()].map(n => getPlayer(n + 1));

const members = [
	{ name: "Boom or Bimbust", id: 1 },
	{ name: "Steve's Jeans", id: 2 },
	{ name: "Real Steve", id: 3 },
	{ name: "David's Team", id: 4 },
	{ name: "The Dirty Wash Boyz", id: 5 },
	{ name: "Papa Bearskin Rug", id: 6 },
	{ name: "GriffsSt8Dad", id: 7 },
	{ name: "Kittle Corn", id: 8 },
	{ name: "TheItallianStallions", id: 9 },
	{ name: "flat TURF rnd GURTH", id: 10 }
]

const players = [
	{ name: "Jonathan Taylor", team: "Indianapolis", position: "RB", cost: 26, owner_id: 1, keeper: true, img: "https://s.yimg.com/it/api/res/1.2/7x3feJGBPDfGXr5VRs3sSg--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08252021/32711.1.png" },
	{ name: "Darrell Henderson Jr.", team: "LA Rams", position: "RB", cost: 6, owner_id: 2, keeper: true, img: "https://s.yimg.com/it/api/res/1.2/3MAX8W8e472Zu5RlPPqclw--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08232021/31902.png" },
	{ name: "Nick Chubb", team: "Cleveland Browns", position: "QB", cost: 16, owner_id: 3, keeper: true, img: "https://s.yimg.com/it/api/res/1.2/1awOUD54SRsBSmOHyeGbBw--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/10012020/31005.png" },
	{ name: "", team: "", position: "", owner_id: 4, cost: 0, keeper: true },
	{ name: "DK Metcalf", team: "Seattle Seahawks", position: "WR", owner_id: 5, cost: 13, keeper: true, img: "https://s.yimg.com/it/api/res/1.2/MJQgtq2ICFasINQi78WgKw--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08262021/31896.png" },
	{ name: "Justin Herbert", team: "LA Chargers", position: "QB", owner_id: 6, cost: 5, keeper: true, img: "https://s.yimg.com/it/api/res/1.2/Qf9KrucaQ1KK3fFnmkZNEQ--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08232021/32676.png" },
	{ name: "Darren Waller", team: "Las Vegas Raiders", position: "TE", owner_id: 7, cost: 6, keeper: true, img: "https://s.yimg.com/it/api/res/1.2/_LvPIU4zAl8jQAETjFLmSg--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08212021/28592.png"},
	{ name: "CeeDee Lamb", team: "Dallas Cowboys", position: "WR", owner_id: 8, cost: 9, keeper: true, img: "https://s.yimg.com/it/api/res/1.2/c0uxOY5c7c9iDP0UfTT7qg--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08232021/32687.png" },
	{ name: "Lamar Jackson", team: "Baltimore Ravens", position: "QB", owner_id: 9, cost: 11, keeper: true, img: "https://s.yimg.com/it/api/res/1.2/0uIIvqc3ia_ysnVhCaamYQ--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08192021/31002.png" },
	{ name: "T.J. Hockenson", team: "Detroit Lions", position: "QB", owner_id: 10, cost: 6, keeper: true, img: "https://s.yimg.com/it/api/res/1.2/MVsrba40zauEI5wcRMJIFQ--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08202021/31840.png" },
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

const itemStore = (initialValue) => {
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
export const owners = readable(members, set => {
	set(members);
});