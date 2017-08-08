// @flow
import {Map} from 'immutable'
import {CREATE_ZERG, INIT_ZERGS} from '../constants/Actions'
import {UNITS, PARAMS, ID, DATA} from '../constants/Storage'
import Config from './Config'

export default {
  [INIT_ZERGS] (state: Map): Map {
    return state.set(PARAMS, Config)
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