// @flow
import {Map} from 'immutable'
import {UNITS, POSITION} from '../constants/Storage'
import {Storage} from '../../../storage/Storage'
import {placeMonsterAtPosition} from '../../../utils/position/Position'

export default {
  isDeployed (id: string) {
    const state = Storage.getState()
    const position = state.getIn(['mainReducer', UNITS, id, POSITION])
    return !!position
  },
  deploy (id: string, position: Map) {
    // const state = Storage.getState()
    placeMonsterAtPosition(id, position)
    // const position = state.setIn(['ZergReducers', UNITS, id, POSITION], position)
  },
  lookAt (id: string) {

  },
  goTo (id: string) {

  }
}