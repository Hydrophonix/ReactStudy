export default function transactions(state = [], action) {
  switch (action.type) {
    case 'ADD_TRANSACTION': {
      return [
        {
          lable: action.lable,
          amount: action.amount,
          category: action.category,
          date: action.date
        },
        ...state
      ]
    }

    default: {
      return state
    }
  }
}
