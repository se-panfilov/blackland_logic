// @flow
import {ZERG} from '../constants/Type'
import {ATTACKER} from '../constants/Role'
import {SMALL as SMALL_HEALTH} from '../constants/Health'
import {SMALL} from '../constants/Size'
import {UNKNOWN} from '../constants/Positon'
import {FAST} from '../constants/Speed'
import {fromJS} from 'immutable'

export default fromJS({
  type: ZERG,
  role: ATTACKER,
  health: SMALL_HEALTH,
  position: UNKNOWN,
  size: SMALL,
  speed: FAST
})