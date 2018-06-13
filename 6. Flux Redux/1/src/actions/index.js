const addCounter = () => ({
  type: 'ADD_COUNTER',
  id: Date.now(),
  count: 0
})

const increment = id => ({
  type: 'INCREMENT',
  id
})

const decrement = id => ({
  type: 'DECREMENT',
  id
})

export { addCounter, increment, decrement }
