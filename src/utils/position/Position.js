import {Map} from 'immutable'
import {Storage} from '../../storage/Storage'
import {PLACE_AT_POSITION} from './constants/Actions'
import {MONSTERS} from '../../creators/monster/constants/Storage'

export function placeAtPosition (id: string, entityType: string, position: Map) {
  const data = new Map({id, entityType, position})
  return Storage.dispatch({type: PLACE_AT_POSITION, data: data})
}

export function placeMonsterAtPosition (id: string, position: Map) {
  return placeAtPosition(id, MONSTERS, position)
}