// @flow
import EngineKind from '../../../constants/engine/EngineKind.json'
import EngineType from '../../../constants/engine/EngineType.json'
import EngineSpeed from '../../../constants/engine/EngineSpeed.json'
import EngineName from '../../../constants/engine/EngineName.json'
import SubSystem from '../../../constants/SubSystem.json'
import Immutable from 'immutable'

export default Immutable.fromJS({
  name: EngineName.SOME_RANDOM_ENGINE_NAME, // TODO shit name
  subsystemType: SubSystem.ENGINE,
  kind: EngineKind.IMPULSE,
  type: EngineType.MAIN,
  speed: EngineSpeed.NORMAL

//requirements (space, energy, manpower, intel)
//usage: (man, intel, energy)
//ammoSpeed
//canBePlacedTo: [major, minor]
//
})