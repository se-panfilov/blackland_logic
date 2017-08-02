// @flow

import {Map, fromJS} from 'immutable'
import {processAction} from '../../../storage/StorageUtils'
import Actions from './Actions'

export default function (state: Map = new Map(), action: Object): Map {
  if (!action || !action.type) return state
  action = fromJS(action)
  return processAction(Actions, state, action)
}