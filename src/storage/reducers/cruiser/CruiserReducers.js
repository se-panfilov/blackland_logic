// @flow

import Immutable from 'immutable'
import {processAction} from '../../StorageUtils'
import CruiserActions from './CruiserActions'

export default function (state: Immutable.Map = new Immutable.Map(), action: Object): Immutable.Map {
  if (!action || !action.type) return state
  action = Immutable.fromJS(action)
  return processAction(CruiserActions, state, action)
}