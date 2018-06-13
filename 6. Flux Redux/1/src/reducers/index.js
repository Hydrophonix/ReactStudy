export default function counterReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_COUNTER':
      return [
        ...state,
        {
          id: action.id,
          count: action.count
        }
      ]

    case 'INCREMENT':
      return state.map(item =>
        item.id !== action.id
          ? item
          : {
            ...item,
            count: item.count + 1
          }
      )

      case 'DECREMENT':
        return state.map(item =>
          item.id !== action.id
            ? item
            : {
              ...item,
              count: item.count - 1
            }
        )

    default:
      return state
  }
}
