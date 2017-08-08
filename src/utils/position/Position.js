import {Map} from 'immutable'
import {Storage} from '../../storage/Storage'
import {PLACE_AT_POSITION} from './constants/Actions'
import {ID, POSITION, DATA, UNITS, ENTITY_TYPE} from '../../creators/monster/constants/Storage'

export function placeAtPosition (id: string, entityType: string, position: Map) {
  const data = new Map({[ID]: id, [ENTITY_TYPE]: entityType, [POSITION]: position})
  // TODO (S.Panfilov) replace 'DATA' with constant
  return Storage.dispatch({type: PLACE_AT_POSITION, [DATA]: data})
}

export function placeMonsterAtPosition (id: string, position: Map) {
  return placeAtPosition(id, UNITS, position)
}