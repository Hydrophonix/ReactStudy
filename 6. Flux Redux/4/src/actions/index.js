const addContact = (name, email) => ({
  type: 'ADD_CONTACT',
  payload: {
    id: Date.now(),
    name,
    email,
    favorite: false
  }
})

const toggleFavorite = id => ({
  type: 'TOGGLE_FAVORITE',
  payload: id
})

const setFiltering = filtering => ({
  type: 'SET_FILTER',
  payload: filtering
})

export { addContact, toggleFavorite, setFiltering }
