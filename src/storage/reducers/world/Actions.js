// @flow

import Immutable from 'immutable'
import {CREATE_WORLD} from '../../../constants/world/Actions'
import MapEntity from '../../../entities/Map'

export default {
  [CREATE_WORLD] (state: Immutable.Map, action: Immutable.Map): Immutable.Map {
    const width = action.getIn(['data', 'width'])
    const height = action.getIn(['data', 'height'])
    const data = new MapEntity(width, height)
    return state.set(MAP, data)
  }
}