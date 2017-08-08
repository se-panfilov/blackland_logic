// @flow
import {fromJS, Map} from 'immutable'
import {Storage} from '../../../storage/Storage'
import {CREATE_ZERG, INIT_ZERGS} from '../constants/Actions'
import {ZERG} from '../constants/Type'
import {generateRandomId, generateRandomName} from '../../../utils/Entities'
import {DATA, HEALTH, ID, MAX_HEALTH, NAME, UNITS_PARAMS, POSITION, ORIENTATION, TYPE} from '../constants/Storage'

export default {
  init (): void {
    Storage.dispatch({type: INIT_ZERGS})
  },
  create (customParams: Map): string {
    const id = generateRandomId()
    const state = Storage.getState()
    // TODO (S.Panfilov) 'mainReducer' - just a string
    const reducersName = 'mainReducer'
    const maxHealth = state.getIn([reducersName, UNITS_PARAMS, ZERG, MAX_HEALTH])

    let data = fromJS({
      [ID]: id,
      [NAME]: generateRandomName(),
      [TYPE]: ZERG,
      [POSITION]: undefined,
      [ORIENTATION]: undefined,
      [HEALTH]: maxHealth
    })

    if (customParams) {
      data = data.mergeDeep(customParams)
    }

    Storage.dispatch({type: CREATE_ZERG, [DATA]: data})

    return id
  }
}