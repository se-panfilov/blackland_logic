// @flow
import {Map} from 'immutable'
import {CREATE_MONSTER} from '../constants/Actions'
import {MONSTERS} from '../constants/Storage'
import Entity from './Entity'

export default {
  [CREATE_MONSTER] (state: Map, action: Map): Map {
    const data = action.get('data')
    const entity = new Entity(data)
    const id = entity.get('id')

    let monsters = state.get(MONSTERS)
    if (!monsters) {
      monsters = new Map()
    }

    monsters = monsters.set(id, entity)

    return state.set(MONSTERS, monsters)
  }
}