import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import CounterApp from './components/CounterApp.jsx'

import store from './store'

import 'normalize.css'
import './assets/main.css'

render(
  <Provider store={store}>
    <CounterApp />
  </Provider>,
  document.getElementById('root')
)
