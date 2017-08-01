// @flow
// import Immutable from 'immutable'
import StorageInitializer from './StorageInitializer'
// import World from './creators/world/small/Creator'
// import Man from './creators/man/player/Creator'
import Zerg from './creators/monster/zerg/Creator'
// import Weapon from './creators/weapon/gun/Creator'

export default {
  init () {
    const Storage = StorageInitializer()
    // World()
    // Man()
    Zerg()
    // Weapon()
    console.log(Storage.getState())

    // TODO (S.Panfilov) call action PUT_OBJECT_AT_POSITION (redux)
  }
}