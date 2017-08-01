// @flow
import {GUN} from '../constants/Name'
import {HIGHT} from '../constants/Accuracy'
import {SMALL} from '../constants/AmmoSize'
import {NORMAL} from '../constants/CoolDown'
import {KINETIC} from '../constants/Type'
import {NORMAL as NORMAL_RANGE} from '../constants/Range'
import {SLOW} from '../constants/Speed'
import Immutable from 'immutable'

export default Immutable.fromJS({
  name: GUN,
  accuracy: HIGHT,
  ammoSize: SMALL,
  coolDown: NORMAL,
  type: KINETIC,
  range: NORMAL_RANGE,
  speed: SLOW
})