import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import TodoApp from './components/TodoApp.jsx'

import store from './store'

import 'normalize.css'
import './assets/main.css'

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)
