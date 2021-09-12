import { readable, writable } from 'svelte/store';
import lodash from 'lodash';
import { members, draft } from './draftResults';
import { week1 } from './week1Results';

const { groupBy, sortBy } = lodash;

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
		getOwnerSet: (id: number) => {
			if (id) {
				return initialValue.filter(i => i.owner_id === id);
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

export const items = itemStore(draft);
export const owners = readable(members, set => {
	set(members);
});
export const results = readable(week1, set => {
	set(week1);
});