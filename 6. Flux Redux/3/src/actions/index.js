const addTransaction = (lable, category, amount) => ({
  type: 'ADD_TRANSACTION',
  lable,
  category,
  amount,
  date: Date.now()
})

const setFiltering = filtering => ({
  type: 'SET_FILTER',
  filtering
})

const setSorting = sorting => ({
  type: 'SET_SORT',
  sorting
})

export {
  addTransaction,
  setFiltering,
  setSorting
}
