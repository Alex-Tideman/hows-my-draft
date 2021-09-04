import { readable, writable } from 'svelte/store';
import lodash from 'lodash';
const { groupBy } = lodash;
import { 
	keepers, round1, round2, round3, round4,
	round5, round6, round7, round8, round9,
	round10, round11, round12, round13, round14,
} from './draftResults';

export const yScroll = writable(0);

const members = [
	{ name: "Boom or Bimbust", id: 1 },
	{ name: "Steve's Jeans", id: 2 },
	{ name: "Real Steve", id: 3 },
	{ name: "David's Team", id: 4 },
	{ name: "The Dirty Wash Boyz", id: 5 },
	{ name: "Papa Bearskin Rug", id: 6 },
	{ name: "Shawzy", id: 7 },
	{ name: "Kittle Corn 🌽", id: 8 },
	{ name: "TheItalianStallions", id: 9 },
	{ name: "flat TURF rnd GURTH", id: 10 }
]

// 1000 players
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
		getPositionSet: (position: string, id: number) => {
			return initialValue.filter(i => i.position === position && i.owner_id === id);
		},
		getPositionSets: (positions: string[], id: number) => {
			return initialValue.filter(i => positions.includes(i.position) && i.owner_id === id);
		},
		getRoundData: (id: number) => {
			const ownerData = id === 0 ? initialValue : initialValue.filter(i => i.owner_id === id)
			const rounds = groupBy(ownerData, 'round');
			const roundData = Object.keys(rounds).map(key => {
				return { label: parseInt(key), value: rounds[key].reduce((sum, i) => sum += i.cost, 0)}
			})
			return roundData;
		},
		getPositionData: (id: number) => {
			const ownerData = id === 0 ? initialValue : initialValue.filter(i => i.owner_id === id)
			const positions = groupBy(ownerData, 'position');
			const positionData = Object.keys(positions).map(key => {
				return { label: key, value: positions[key].reduce((sum, i) => sum += i.cost, 0)}
			})
			return positionData;
		},
		getRoundPercentageData: (id: number) => {
			const ownerData = id === 0 ? initialValue : initialValue.filter(i => i.owner_id === id)
			const rounds = groupBy(ownerData, 'round');
			const roundData = Object.keys(rounds).map(key => {
				return { label: parseInt(key), value: rounds[key].reduce((sum, i) => sum += i.points, 0)}
			})
			return roundData;
		},
		getPositionPercentageData: (id: number) => {
			const ownerData = id === 0 ? initialValue : initialValue.filter(i => i.owner_id === id)
			const positions = groupBy(ownerData, 'position');
			const positionData = Object.keys(positions).map(key => {
				return { label: key, value: positions[key].reduce((sum, i) => sum += i.points, 0)}
			})
			return positionData;
		},
  }
}

const draft = [
	...keepers, ...round1, ...round2, ...round3, ...round4,
	...round5, ...round6, ...round7, ...round8, ...round9,
	...round10, ...round11, ...round12, ...round13, ...round14
]
export const items = itemStore(draft);
export const owners = readable(members, set => {
	set(members);
});