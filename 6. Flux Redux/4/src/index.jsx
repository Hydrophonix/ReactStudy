import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import PhonebookApp from './components/PhonebookApp.jsx'

import store from './store'

render(
  <Provider store={store}>
    <PhonebookApp />
  </Provider>,
  document.getElementById('root')
)
