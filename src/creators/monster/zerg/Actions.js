// @flow

import Immutable from 'immutable'
import {CREATE_MONSTER} from '../constants/Actions'
import {MONSTERS} from '../constants/Storage'
import Entity from './Entity'

export default {
  [CREATE_MONSTER] (state: Immutable.Map, action: Immutable.Map): Immutable.Map {
    const data = new Entity()
    // TODO (S.Panfilov) not "set", but "add" in array or map of monsters
    return state.set(MONSTERS, data)
  }
}