import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

import { setTodoExpiredAsync } from '../actions'

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const setTodosToLocalStorage = store => dispatch => action => {
  const result = dispatch(action)

  localStorage.setItem('7.1:Todos', JSON.stringify(store.getState()))

  return result
}

const startCountToExpireTodo = store => dispatch => action => {
  const { expireTime, id } = action.payload

  expireTime > 0 && store.dispatch(setTodoExpiredAsync(id, expireTime * 1000))

  return dispatch(action)
}

export default createStore(
  rootReducer,
  JSON.parse(localStorage.getItem('7.1:Todos')),
  composeEnchancers(applyMiddleware(thunk, setTodosToLocalStorage, startCountToExpireTodo))
)
