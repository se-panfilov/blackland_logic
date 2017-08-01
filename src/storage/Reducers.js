// @flow

import {combineReducers} from 'redux-immutablejs'
import MapReducers from './reducers/map/MapReducers'
import CruiserReducers from './reducers/cruiser/CruiserReducers'

export default combineReducers({
  MapReducers,
  CruiserReducers
})