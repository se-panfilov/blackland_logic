// @flow

import {combineReducers} from 'redux-immutablejs'
import ZergReducers from '../creators/monster/zerg/Reducers'
import PositionReducers from '../utils/position/storage/Reducers'
import reduceReducers from 'reduce-reducers'

const mainReducer = reduceReducers(
  ZergReducers,
  PositionReducers
)

export default combineReducers({
  mainReducer
})