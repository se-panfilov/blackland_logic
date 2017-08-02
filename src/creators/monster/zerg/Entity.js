// @flow
import {Map} from 'immutable'
import Config from './Config'

export default function (data: Map): Map {
  return Config.mergeDeep(data)
}