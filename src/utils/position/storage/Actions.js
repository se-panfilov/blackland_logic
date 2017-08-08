// @flow
import {Map} from 'immutable'
import {PLACE_AT_POSITION} from '../constants/Actions'
import {ID, POSITION, DATA, ENTITY_TYPE} from '../../../creators/monster/constants/Storage'

export default {
  [PLACE_AT_POSITION] (state: Map, action: Map): Map {
    const data = action.get(DATA)
    const id = data.get(ID)
    const position = data.get(POSITION)
    const entityType = data.get(ENTITY_TYPE)

    return state.setIn([entityType, id, POSITION], position)
  }
}