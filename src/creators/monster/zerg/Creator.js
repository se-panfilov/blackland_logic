// @flow
import {fromJS} from 'immutable'
import {Storage} from '../../../storage/Storage'
import {CREATE_MONSTER} from '../constants/Actions'
import {generateRandomId, generateRandomName} from '../../../utils/Entities'

export default {
  create (): string {
    const id = generateRandomId()
    let data = fromJS({
      id: id,
      name: generateRandomName()
    }).set('id', id)

    Storage.dispatch({type: CREATE_MONSTER, data: data})

    return id
  }
}