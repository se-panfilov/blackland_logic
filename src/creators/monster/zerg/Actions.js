// @flow
import {Map} from 'immutable'
import {CREATE_ZERG, INIT_ZERGS} from '../constants/Actions'
import {UNITS, UNITS_PARAMS, ID, DATA, TYPE} from '../constants/Storage'
import Config from './Config'

export default {
  [INIT_ZERGS] (state: Map): Map {
    return state.setIn([UNITS_PARAMS, Config.get(TYPE)], Config)
  },
  [CREATE_ZERG] (state: Map, action: Map): Map {
    const data = action.get(DATA)
    const id = data.get(ID)

    let zergs = state.get(UNITS)
    if (!zergs) {
      zergs = new Map()
    }

    zergs = zergs.set(id, data)

    return state.set(UNITS, zergs)
  }
}