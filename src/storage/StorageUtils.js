// @flow
import Immutable from 'immutable'

// const MESSAGE = {
//  UNKNOWN_ACTION_TYPE: 'UNKNOWN_ACTION_TYPE'
// }

export function processAction (actionsList: Object, state: Immutable.Map = new Immutable.Map(), action: Immutable.Map): Immutable.Map {
  // if (!actionsList || !action.type || !actionsList[action.type]) throw new Error(MESSAGE.UNKNOWN_ACTION_TYPE)
  if (!actionsList) return state
  if (!action) return state
  const type = action.get('type')
  if (!type) return state
  if (!actionsList[type]) return state
  return actionsList[type](state, action)
}