export default function filtering(state = 'SHOW_ALL', { type, payload }) {
  switch (type) {
    case 'SET_FILTER': {
      return payload
    }

    default: {
      return state
    }
  }
}
