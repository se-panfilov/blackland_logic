// @flow
import {fromJS} from 'immutable'
import {Storage} from '../../../storage/Storage'
import {CREATE_MONSTER} from '../constants/Actions'
import {generateRandomId, generateRandomName} from '../../../utils/Entities'

export default function (): string {
  const id = generateRandomId()
  let data = new fromJS({
    id: id,
    name: generateRandomName()
  }).set('id', id)

  Storage.dispatch({type: CREATE_MONSTER, data: data})

  return id
}