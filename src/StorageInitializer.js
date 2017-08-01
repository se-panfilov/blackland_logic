// @flow
import {initStorage, setStorage} from './storage/Storage.js'

export default function init () {
  const store = initStorage()
  setStorage(store)
  return store
}