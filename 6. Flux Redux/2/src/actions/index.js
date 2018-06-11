const addTodo = text => ({
  type: 'ADD_TODO',
  text,
  id: Date.now()
})

const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})

const setFilter = filter => ({
  type: 'SET_FILTER',
  filter
})

const doneAllTodos = () => ({
  type: 'DONE_ALL'
})

export { addTodo, toggleTodo, setFilter, deleteTodo, doneAllTodos }
