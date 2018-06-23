export default function(state = [], { type, payload }) {
  switch (type) {
    case 'ADD_CONTACT':
      return [
        ...state,
        {
          id: payload.id,
          name: payload.name,
          email: payload.email,
          favorite: payload.favorite
        }
      ]

    case 'TOGGLE_FAVORITE':
      return state.map(item =>
        item.id !== payload
          ? item
          : {
              ...item,
              favorite: !item.favorite
            }
      )

    default:
      return state
  }
}
