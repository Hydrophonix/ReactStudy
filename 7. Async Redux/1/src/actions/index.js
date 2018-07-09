import * as types from './types';

export const addTodo = (text, hashtags = [], expireTime = 0) => ({
  type: types.ADD_TODO,
  payload: {
    id: Date.now(),
    text,
    completed: false,
    expireTime,
    expired: false,
    hashtags
  }
})

export const toggleTodo = id => ({
  type: types.TOGGLE_TODO,
  payload: { id }
})

export const changeTodoText = (id, text) => ({
  type: types.CHANGE_TODO_TEXT,
  payload: {
    id,
    text
  }
})

export const deleteTodo = id => ({
  type: types.DELETE_TODO,
  payload: { id }
})

export const setFilter = filter => ({
  type: types.SET_FILTER,
  payload: { filter }
})

export const doneAllTodos = () => ({
  type: types.DONE_ALL_TODOS
})

export const setTodoExpired = id => ({
  type: types.SET_TODO_EXPIRED,
  payload: { id }
})


export const setTodoExpiredAsync = (id, expireTime) => dispatch =>
  setTimeout(() => dispatch(setTodoExpired(id)), expireTime);
