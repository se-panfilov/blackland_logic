// @flow

import Immutable from 'immutable'
import {processAction} from '../../../storage/StorageUtils'
import Actions from './Actions'

export default function (state: Immutable.Map = new Immutable.Map(), action: Object): Immutable.Map {
  if (!action || !action.type) return state
  action = Immutable.fromJS(action)
  return processAction(Actions, state, action)
}