// @flow

import Immutable from 'immutable'
import {CREATE_MONSTER} from '../../../constants/monster/Actions'
import Entity from './Entity'

export default {
  [CREATE_MONSTER] (state: Immutable.Map, action: Immutable.Map): Immutable.Map {
    const data = new Entity()
    return state.set(MAP, data)
  }
}