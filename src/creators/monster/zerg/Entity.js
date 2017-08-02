// @flow
import Config from './Config'
import {generateRandomId, generateRandomName} from '../../../utils/Entities'

export default function () {
  let entity = Config.set('id', generateRandomId())
  entity = entity.set('name', generateRandomName())
  return entity
}