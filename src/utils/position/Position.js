import {Map} from 'immutable'
import {Storage} from '../../storage/Storage'
import {PLACE_AT_POSITION, SET_ORIENTATION} from './constants/Actions'
import {DATA, ENTITY_TYPE, ID, ORIENTATION, POSITION, UNITS} from '../../creators/monster/constants/Storage'

function dispatchAction(type:string, data: Map){
  return Storage.dispatch({type: type, [DATA]: data})
}

export function placeAtPosition (id: string, entityType: string, position: Map) {
  const data = new Map({[ID]: id, [ENTITY_TYPE]: entityType, [POSITION]: position})
  return dispatchAction(PLACE_AT_POSITION, data)
}

export function placeMonsterAtPosition (id: string, position: Map) {
  return placeAtPosition(id, UNITS, position)
}

export function setOrientation (id: string, entityType: string, orientation: number) {
  const data = new Map({[ID]: id, [ENTITY_TYPE]: entityType, [ORIENTATION]: orientation})
  return dispatchAction(SET_ORIENTATION, data)
}

export function setMonsterOrientation (id: string, orientation: number) {
  return setOrientation(id, UNITS, orientation)
}