import { SET_FILTER } from '../actions/types';

export default function filter(state = 'SHOW_ALL', { type, payload }) {
  switch (type) {
    case SET_FILTER: {
      return payload.filter
    }

    default: {
      return state
    }
  }
}
