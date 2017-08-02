// @flow
import {ZERG} from '../constants/Type'
import {ATTACKER} from '../constants/Role'
import {SMALL} from '../constants/Size'
import {FAST} from '../constants/Speed'
import {fromJS} from 'immutable'

export default fromJS({
  type: ZERG,
  role: ATTACKER,
  size: SMALL,
  speed: FAST
})