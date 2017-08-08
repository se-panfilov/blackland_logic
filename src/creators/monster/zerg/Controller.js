// @flow
import {Map} from 'immutable'
import {ORIENTATION, POSITION, UNITS} from '../constants/Storage'
import {Storage} from '../../../storage/Storage'
import {placeMonsterAtPosition, setMonsterOrientation} from '../../../utils/position/Position'

export default {
  isDeployed (id: string) {
    const state = Storage.getState()
    // TODO (S.Panfilov) 'mainReducer' - just a string
    const position = state.getIn(['mainReducer', UNITS, id, POSITION])
    const orientation = state.getIn(['mainReducer', UNITS, id, ORIENTATION])
    return !!position && (!!orientation || typeof orientation === Number)
  },
  deploy (id: string, position: Map, orientation: number) {
    placeMonsterAtPosition(id, position)
    setMonsterOrientation(id, orientation)
  },
  setOrientation (id: string, orientation: number) {
    setMonsterOrientation(id, orientation)
  },
  setPosition (id: string, position: Map) {
    placeMonsterAtPosition(id, position)
  }
}