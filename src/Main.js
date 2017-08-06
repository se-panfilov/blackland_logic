// @flow
import {Map} from 'immutable'
import StorageInitializer from './StorageInitializer'
// import World from './creators/world/small/Creator'
// import Man from './creators/man/player/Creator'
import ZergCreator from './creators/monster/zerg/Creator'
import ZergController from './creators/monster/zerg/Controller'
import {placeMonsterAtPosition} from './utils/position/Position'
// import Weapon from './creators/weapon/gun/Creator'

export default {
  init () {
    const Storage: Object = StorageInitializer()
    // World()
    // Man()
    ZergCreator.init()
    const zergId: string = ZergCreator.create()
    placeMonsterAtPosition(zergId, new Map({x: 100, y: 100}))
    // ZergController.lookAt(zergId)
    // ZergController.moveTo(zergId)

    // Weapon()
    // console.log(zergId)
    // console.log(Storage.getState().getIn(['ZergReducers', 'MONSTERS', zergId]))
    console.log(Storage.getState())

    // TODO (S.Panfilov) call action PUT_OBJECT_AT_POSITION (redux)
  }
}