// @flow
import {ZERG} from '../constants/Type'
import {ATTACKER} from '../constants/Role'
import {SMALL as SMALL_HEALTH} from '../constants/Health'
import {SMALL} from '../constants/Size'
import {FAST} from '../constants/Speed'
import {fromJS} from 'immutable'
import {TYPE, ROLE, MAX_HEALTH, SIZE, SPEED} from '../constants/Storage'

export default fromJS({
  [TYPE]: ZERG,
  [ROLE]: ATTACKER,
  [MAX_HEALTH]: SMALL_HEALTH,
  [SIZE]: SMALL,
  [SPEED]: FAST
})