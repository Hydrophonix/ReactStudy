import { combineReducers } from 'redux'

import transactions from './transactions'
import filtering from './filtering'
import sorting from './sorting'

export default combineReducers({ transactions, filtering, sorting })
