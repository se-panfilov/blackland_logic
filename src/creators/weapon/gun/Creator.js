// @flow
import {Storage} from '../../../storage/Storage'
import Config from './Config'
import {CREATE_WEAPON} from '../../../constants/weapon/Actions'

export default function () {
  return Storage.dispatch({type: CREATE_WEAPON, data: Config})
}