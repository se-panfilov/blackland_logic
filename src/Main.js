// @flow
import {Map} from 'immutable'
import StorageInitializer from './StorageInitializer'
// import World from './creators/world/small/Creator'
import ZergCreator from './creators/monster/zerg/Creator'
import ZergController from './creators/monster/zerg/Controller'
import {getRandomItemFromMap} from './utils/Entities'
import {ID, UNITS} from './creators/monster/constants/Storage'

function getRandomInt (min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

export default {
  init () {
    const Storage: Object = StorageInitializer()
    // World()
    ZergCreator.init()
    // const zergId: string = ZergCreator.create()
    for (let i = 0; i < getRandomInt(1, 1); i++) {
      const zergId: string = ZergCreator.create()
      const position: Map = new Map({x: getRandomInt(0, 100), y: getRandomInt(0, 100)})
      const orientation: number = getRandomInt(0, 359)
      ZergController.deploy(zergId, position, orientation)
    }

    const state = Storage.getState()
    const units = state.getIn(['mainReducer', UNITS])
    for (let i = 0; i < getRandomInt(1, 10); i++) {
      const rendomZerg = getRandomItemFromMap(units)
      const id = rendomZerg.get(ID)
      const position: Map = new Map({x: getRandomInt(0, 100), y: getRandomInt(0, 100)})
      ZergController.setPosition(id, position)

      // console.dir(Storage.getState().toJS(), {showHidden: true, depth: null, colors: true})
    }
    // console.info(`isDeployed: ${ZergController.isDeployed(zergId)}`)

    // console.info(`isDeployed: ${ZergController.isDeployed(zergId)}`)

    // ZergController.lookAt(zergId)
    // ZergController.moveTo(zergId)

    // console.log(zergId)
    // console.log(Storage.getState().getIn(['ZergReducers', 'MONSTERS', zergId]))
    console.dir(Storage.getState().toJS(), {showHidden: true, depth: null, colors: true})

    // TODO (S.Panfilov) call action PUT_OBJECT_AT_POSITION (redux)
  }
}