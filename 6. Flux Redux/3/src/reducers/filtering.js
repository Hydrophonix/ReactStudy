export default function filtering(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_FILTER': {
      return action.filtering
    }

    default: {
      return state
    }
  }
}
