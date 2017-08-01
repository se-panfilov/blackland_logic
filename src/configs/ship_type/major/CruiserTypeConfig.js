// @flow
import MajorShipType from '../../../constants/ship/major/MajorShipType.json'
import MajorShipSize from '../../../constants/ship/major/MajorShipSize.json'
import Immutable from 'immutable'

export default Immutable.fromJS({
  name: MajorShipType.CRUISER,
  size: MajorShipSize.NORMAL,
  type: MajorShipType.CRUISER
})
