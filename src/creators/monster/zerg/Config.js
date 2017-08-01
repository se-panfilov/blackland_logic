// @flow
import {ZERG} from '../constants/Name'
import {ATTACKER} from '../constants/Role'
import {SMALL} from '../constants/Size'
import {FAST} from '../constants/Speed'
import Immutable from 'immutable'

export default Immutable.fromJS({
  name: ZERG,
  role: ATTACKER,
  size: SMALL,
  speed: FAST
})