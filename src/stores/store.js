import { readable, writable } from 'svelte/store';

export const yScroll = writable(0);

yScroll.subscribe(value => {
	console.log(value);
});


// const getPlayer = (n) => {
// 	return { name: `Aaron Rodgers ${n}`, team: "Green Bay Packers", position: "QB" }
// }
  
// const cards = [...Array(200).keys()].map(n => getPlayer(n + 1));

const players = [
	{ name: "Aaron Rodgers St. Sthoasdfasdfs", team: "Green Bay Packers", position: "QB" },
	{ name: "Aaron Rodgers", team: "Green Bay Packers", position: "QB" },
	{ name: "Aaron Rodgers", team: "Green Bay Packers", position: "QB" },
	{ name: "Aaron Rodgers", team: "Green Bay Packers", position: "QB" },
	{ name: "Aaron Rodgers", team: "Green Bay Packers", position: "QB" },
	{ name: "Aaron Rodgers", team: "Green Bay Packers", position: "QB" },
	{ name: "Aaron Rodgers", team: "Green Bay Packers", position: "QB" },
	{ name: "Aaron Rodgers", team: "Green Bay Packers", position: "QB" },
	{ name: "Aaron Rodgers", team: "Green Bay Packers", position: "QB" },
	{ name: "Aaron Rodgers", team: "Green Bay Packers", position: "QB" },
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
