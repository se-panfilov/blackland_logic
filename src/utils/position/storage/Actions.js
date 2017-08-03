// @flow
import {Map} from 'immutable'
import {PLACE_AT_POSITION} from '../constants/Actions'

export default {
  [PLACE_AT_POSITION] (state: Map, action: Map): Map {
    const data = action.get('data')
    const id = data.get('id')
    const position = data.get('position')
    const entityType = data.get('entityType')

    return state.setIn([entityType, id, 'position'], position)
  }
}