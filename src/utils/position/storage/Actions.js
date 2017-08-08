// @flow
import {Map} from 'immutable'
import {PLACE_AT_POSITION, SET_ORIENTATION} from '../constants/Actions'
import {ID, POSITION, DATA, ENTITY_TYPE, ORIENTATION} from '../../../creators/monster/constants/Storage'

export default {
  [PLACE_AT_POSITION] (state: Map, action: Map): Map {
    const data = action.get(DATA)
    const id = data.get(ID)
    const position = data.get(POSITION)
    const entityType = data.get(ENTITY_TYPE)

    return state.setIn([entityType, id, POSITION], position)
  },
  [SET_ORIENTATION] (state: Map, action: Map): Map {
    const data = action.get(DATA)
    const id = data.get(ID)
    const entityType = data.get(ENTITY_TYPE)
    const orientation = data.get(ORIENTATION)

    return state.setIn([entityType, id, ORIENTATION], orientation)
  }
}