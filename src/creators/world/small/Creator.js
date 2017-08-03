// @flow
import {Storage} from '../../../storage/Storage'
import Config from './Config'
import {CREATE_WORLD} from '../constants/Actions'

export default function () {
  return Storage.dispatch({type: CREATE_WORLD, data: Config})
}