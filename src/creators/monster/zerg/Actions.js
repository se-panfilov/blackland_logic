// @flow

import Immutable from 'immutable'
import {CREATE_MONSTER} from '../constants/Actions'
import {MONSTERS} from '../constants/Storage'
import Entity from './Entity'

export default {
  [CREATE_MONSTER] (state: Immutable.Map, action: Immutable.Map): Immutable.Map {
    const entity = new Entity()
    const id =  entity.get('id')

    let monsters = state.get(MONSTERS)
    if (!monsters) {
      monsters = new Immutable.Map()
    }

    monsters = monsters.set(id, entity)

    return state.set(MONSTERS, monsters)
  }
}