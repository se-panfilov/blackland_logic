// @flow
import Immutable from 'immutable'

export default function Map (width: number, height: number) {
  // TODO (S.Panfilov) shall have upper and lower limits and the other checks
  return new Immutable.Map({
    width: width,
    height: height
  })
}