function todo(state, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    }

    case 'TOGGLE_TODO': {
      return state.id !== action.id
        ? state
        : {
            ...state,
            completed: !state.completed
          }
    }

    case 'DELETE_TODO': {
      return state.id !== action.id
    }

    case 'DONE_ALL': {
      return {
        ...state,
        completed: true
      }
    }

    default: {
      return state
    }

  }

}

export default function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO': {
      return [
        todo(null, action),
        ...state
      ]
    }

    case 'TOGGLE_TODO': {
      return state.map(item => todo(item, action))
    }

    case 'DELETE_TODO': {
      return state.filter(item => todo(item, action))
    }

    case 'DONE_ALL': {
      return state.map(item => todo(item, action))
    }

    default: {
      return state
    }
  }
}
