// @flow
import {Map} from 'immutable'
import StorageInitializer from './StorageInitializer'
// import World from './creators/world/small/Creator'
import ZergCreator from './creators/monster/zerg/Creator'
import ZergController from './creators/monster/zerg/Controller'

export default {
  init () {
    const Storage: Object = StorageInitializer()
    // World()
    ZergCreator.init()
    const zergId: string = ZergCreator.create()
    let isDeployed: boolean = ZergController.isDeployed(zergId)
    console.info(`isDeployed: ${isDeployed.toString()}`)
    const position: Map = Map({x: 100, y: 100})
    const orientation: number = 10
    ZergController.deploy(zergId, position, orientation)
    isDeployed = ZergController.isDeployed(zergId)
    console.info(`isDeployed: ${isDeployed.toString()}`)

    // ZergController.lookAt(zergId)
    // ZergController.moveTo(zergId)

    // console.log(zergId)
    // console.log(Storage.getState().getIn(['ZergReducers', 'MONSTERS', zergId]))
    console.dir(Storage.getState().toJS(), {showHidden: true, depth: null, colors: true})

    // TODO (S.Panfilov) call action PUT_OBJECT_AT_POSITION (redux)
  }
}