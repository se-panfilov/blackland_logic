// @flow

import Immutable from 'immutable'
import {CREATE_CRUISER} from '../../constants/ActionsConstants'
import {CRUISER} from '../../constants/StorageItemsConstants'
import CruiserEntity from '../../../entities/Cruiser'

export default {
  [CREATE_CRUISER] (state: Immutable.Map, action: Immutable.Map): Immutable.Map {
    const data = new CruiserEntity(action.get('data'))
    return state.set(CRUISER, data)
  }
}