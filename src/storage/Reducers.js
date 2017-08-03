// @flow

import {combineReducers} from 'redux-immutablejs'
import ZergReducers from '../creators/monster/zerg/Reducers'
import PositionReducers from '../utils/position/storage/Reducers'

export default combineReducers({
  ZergReducers,
  PositionReducers
})