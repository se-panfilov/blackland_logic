// @flow
import {fromJS, Map} from 'immutable'
import {Storage} from '../../../storage/Storage'
import {CREATE_ZERG, INIT_ZERGS} from '../constants/Actions'
import {generateRandomId, generateRandomName} from '../../../utils/Entities'
import {HEALTH, MAX_HEALTH, ID, NAME, DATA, PARAMS, POSITION} from '../constants/Storage'

export default {
  init (): void {
    Storage.dispatch({type: INIT_ZERGS})
  },
  create (customParams: Map): string {
    const id = generateRandomId()
    const state = Storage.getState()
    const reducersName = 'mainReducer'
    const maxHealth = state.getIn([reducersName, PARAMS, MAX_HEALTH])

    let data = fromJS({
      [ID]: id,
      [NAME]: generateRandomName(),
      [POSITION]: undefined,
      [HEALTH]: maxHealth
    })

    // TODO (S.Panfilov) Add data ovveride from customParams

    Storage.dispatch({type: CREATE_ZERG, [DATA]: data})

    return id
  }
}