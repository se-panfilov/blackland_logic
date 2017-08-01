// @flow

import Immutable from 'immutable'
import Reducers from './Reducers.js'
// import DevTools from 'utils/devtools'
// import {applyMiddleware, compose, createStore} from 'redux'
import {createStore} from 'redux'

// TODO (S.Panfilov) fix storage type
export let Storage: any = null

export function initStorage (initialData: Object = {}) {
  initialData = Immutable.fromJS(initialData)

  // const enhancer = compose(
  //  applyMiddleware(
  //      // thunkMiddleware
  //     )//,
  //  // DevTools.instrument()
  // )

  // return createStore(Reducers, initialData, enhancer)
  return createStore(Reducers, initialData)
}

export function setStorage (storage: Object) {
  Storage = storage
}