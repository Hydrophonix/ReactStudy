export default function sorting(state = 'DATE', action) {
  switch (action.type) {
    case 'SET_SORT': {
      return action.sorting
    }

    default: {
      return state
    }
  }
}
