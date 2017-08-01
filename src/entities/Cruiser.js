// @flow
import CruiserTypeConfig from '../configs/ship_type/major/CruiserTypeConfig.js'
import MainEngineConfig from '../configs/subsystems/engine/MainEngineConfig.js'
import LauncherConfig from '../configs/subsystems/weapon/LauncherConfig.js'
import RailGunConfig from '../configs/subsystems/weapon/RailGunConfig.js'
import UltaGunConfig from '../configs/subsystems/weapon/UltaGunConfig.js'
import Immutable from 'immutable'

// TODO (S.Panfilov) field should be "string | Array"
function set (obj: Immutable.Map, fileld: mixed, config: Immutable.Map) {
  let method = 'set'
  if (Array.isArray(fileld)) {
    method = 'setIn'
  }

  return obj[method](fileld, new Immutable.Map(config))
}

function setShip (obj: Immutable.Map, config: Immutable.Map) {
  if (!obj) throw new Error('No obj passed')
  if (!config) throw new Error('No config passed')

  return set(obj, 'ship', config)
}

function setEngine (obj: Immutable.Map, config: Immutable.Map) {
  if (!obj) throw new Error('No obj passed')
  if (!config) throw new Error('No config passed')

  return set(obj, 'engine', config)
}

function setWeapon (obj: Immutable.Map, config: Immutable.Map) {
  if (!obj) throw new Error('No obj passed')
  if (!config) throw new Error('No config passed')
  if (!config.get('name')) throw new Error('No name exist in config')
  return set(obj, ['weapons', config.name], config)
}

export default function Cruiser (data?: Immutable.Map) {
  let result
  result = new Immutable.Map()
  result = setShip(result, CruiserTypeConfig)
  result = setEngine(result, MainEngineConfig)
  result = setWeapon(result, LauncherConfig)
  result = setWeapon(result, RailGunConfig)
  result = setWeapon(result, UltaGunConfig)

  // TODO (S.Panfilov)  allow here to ovveride SOME properties curWorkPoint
  // result = result.setIn(['ship', 'name'], 'ASDASDASD')
  // console.log(result)

  return result
}