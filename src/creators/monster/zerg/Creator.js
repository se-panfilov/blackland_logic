// @flow
import {Storage} from '../../../storage/Storage'
import Config from './Config'
import {CREATE_MONSTER} from '../../../constants/monster/Actions'

export default function () {
  return Storage.dispatch({type: CREATE_MONSTER, data: Config})
}