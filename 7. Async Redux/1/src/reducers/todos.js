import * as types from '../actions/types'

export default function todos(state = [], action) {
  switch (action.type) {
    case types.ADD_TODO: {
      return [
        todo(null, action),
        ...state
      ]
    }

    case types.TOGGLE_TODO: {
      return state.map(item => todo(item, action))
    }

    case types.CHANGE_TODO_TEXT: {
      return state.map(item => todo(item, action))
    }

    case types.DELETE_TODO: {
      return state.filter(item => todo(item, action))
    }

    case types.DONE_ALL_TODOS: {
      return state.map(item => todo(item, action))
    }

    case types.SET_TODO_EXPIRED: {
      return state.map(item => todo(item, action))
    }

    default: {
      return state
    }
  }
}

function todo(state, { type, payload }) {
  switch (type) {
    case types.ADD_TODO: {
      return {
        id: payload.id,
        text: payload.text,
        completed: payload.completed,
        expireTime: payload.expireTime,
        expired: payload.expired,
        hashtags: payload.hashtags
      }
    }

    case types.TOGGLE_TODO: {
      return state.id !== payload.id
        ? state
        : {
            ...state,
            completed: !state.completed
          }
    }

    case types.CHANGE_TODO_TEXT: {
      return state.id !== payload.id
        ? state
        : {
            ...state,
            text: payload.text
          }
    }

    case types.DELETE_TODO: {
      return state.id !== payload.id
    }

    case types.DONE_ALL_TODOS: {
      return {
        ...state,
        completed: true
      }
    }

    case types.SET_TODO_EXPIRED: {
      return state.id !== payload.id
        ? state
        : {
            ...state,
            expired: true
          }
    }

    default: {
      return state
    }

  }

}
