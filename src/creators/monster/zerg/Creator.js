// @flow
import Immutable from 'immutable'
import {Storage} from '../../../storage/Storage'
import Config from './Config'
import {CREATE_MONSTER} from '../../../storage/constants/ActionsConstants'

export default function () {
  return Storage.dispatch({type: CREATE_MONSTER, data: Config})
}