// @flow
import Immutable from 'immutable'
import {Storage} from '../storage/Storage'
import {CREATE_MAP} from '../storage/constants/ActionsConstants'

export default function Map (width: number, height: number) {
  // TODO (S.Panfilov) shall have upper and lower limits and the other checks
  return Storage.dispatch({type: CREATE_MAP, data: new Immutable.Map({width, height})})
}