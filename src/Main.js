// @flow
import Immutable from 'immutable'
import StorageInitializer from './StorageInitializer'
import Map from './creators/Map'
import Cruiser from './creators/Cruiser'

export default {
  init () {
    const Storage = StorageInitializer()
    const width = 100
    const height = 200
    Map(width, height)
    Cruiser()

    const cruiserData = Immutable.fromJS({name: 'Targelion'})
    Cruiser(cruiserData)
    console.log(Storage.getState())

    // const map = new Map(width, height)

    // const cruiser = new Cruiser()
    // TODO (S.Panfilov) call action PUT_OBJECT_AT_POSITION (redux)
  }
}