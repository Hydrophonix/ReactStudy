import { combineReducers } from 'redux'

import filtering from './filtering'
import contacts from './contacts'

export default combineReducers({ contacts, filtering })
