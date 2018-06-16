import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import MoneyApp from './components/MoneyApp.jsx'

import store from './store'

import './assets/base.css'

render(
  <Provider store={store}>
    <MoneyApp />
  </Provider>,
  document.getElementById('root')
)
