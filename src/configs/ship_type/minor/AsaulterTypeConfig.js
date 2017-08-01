// @flow
import MinorShipType from '../../../constants/ship/minor/MinorShipType.json'
import MinorShipSize from '../../../constants/ship/minor/MinorShipSize.json'
import MinorShipMobility from '../../../constants/ship/minor/MinorShipMobility.json'
import MinorShipFuelLodout from '../../../constants/ship/minor/MinorShipFuelLodout.json'
import MinorShipAmmoLodout from '../../../constants/ship/minor/MinorShipAmmoLodout.json'

export default {
  name: MinorShipType.BOMBER,
  size: MinorShipSize.NORMAL,
  type: MinorShipType.BOMBER,
  mobility: MinorShipMobility.LOW,
  fuel: MinorShipFuelLodout.HIGH,
  lodout: MinorShipAmmoLodout.HIGH
}