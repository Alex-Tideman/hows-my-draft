import { readable, writable } from 'svelte/store';

export const yScroll = writable(0);

yScroll.subscribe(value => {
	console.log(value);
});


const players = [
	{ name: "Aaron Rodgers 1", team: "Green Bay Packers", position: "QB" },
	{ name: "Aaron Rodgers 2", team: "Green Bay Packers", position: "QB" },
	{ name: "Aaron Rodgers 3", team: "Green Bay Packers", position: "QB" },
	{ name: "Aaron Rodgers 4", team: "Green Bay Packers", position: "QB" },
	{ name: "Aaron Rodgers 5", team: "Green Bay Packers", position: "QB" },
	{ name: "Aaron Rodgers 6", team: "Green Bay Packers", position: "QB" },
	{ name: "Aaron Rodgers 7", team: "Green Bay Packers", position: "QB" },
	{ name: "Aaron Rodgers 8", team: "Green Bay Packers", position: "QB" },
	{ name: "Aaron Rodgers 9", team: "Green Bay Packers", position: "QB" },
	{ name: "Aaron Rodgers 10", team: "Green Bay Packers", position: "QB" },
];

export const itemStore = (initialValue) => {
  const { subscribe, set, update } = writable(initialValue)

  return {
    subscribe,
    set: (value) => {
      return set(value)
    },
    update,
		getCurrentSet: (index) => {
			return initialValue.slice(index, index + 4)
		}
  }
}


export const items = itemStore(players);
