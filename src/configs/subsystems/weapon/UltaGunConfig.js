// @flow
import WeaponKind from '../../../constants/weapon/WeaponKind.json'
import WeaponType from '../../../constants/weapon/WeaponType.json'
import WeaponFireSpeed from '../../../constants/weapon/WeaponFireSpeed.json'
import WeaponFireCoolDown from '../../../constants/weapon/WeaponFireCoolDown.json'
import WeaponFireRange from '../../../constants/weapon/WeaponFireRange.json'
import WeaponFireAccuracy from '../../../constants/weapon/WeaponFireAccuracy.json'
import AmmoUsage from '../../../constants/AmmoUsage.json'
import SubSystem from '../../../constants/SubSystem.json'
import Immutable from 'immutable'

export default Immutable.fromJS({
  name: 'UltaGun',
  subsystemType: SubSystem.WEAPON,
  kind: WeaponKind.BEAM,
  type: WeaponType.COURSE_GUN,
  fire: {
    speed: WeaponFireSpeed.EXTRA_FAST,
    coolDown: WeaponFireCoolDown.EXTRA_SLOW, // example -function correct(WeaponCoolDown.EXTRA_SLOW, 1245)
    range: WeaponFireRange.EXTRA_LONG,
    accuracy: WeaponFireAccuracy.EXTRA_HIGHT
  },
  ammo: {
    usagePerShot: AmmoUsage.SINGLE
  }

  //requirements (space, energy, manpower, intel)
  //usage: (man, intel, energy)
  //ammoSpeed
  //canBePlacedTo: [major, minor]
  //
})