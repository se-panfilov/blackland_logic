// @flow
import {Storage} from '../../../storage/Storage'
import Config from './Config'
import {CREATE_MONSTER} from '../constants/Actions'

export default function () {
  return Storage.dispatch({type: CREATE_MONSTER, data: Config})
}