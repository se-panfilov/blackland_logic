import uuidv4 from 'uuid/v4'
import {List} from 'immutable'

export function generateRandomId (): string {
  return uuidv4()
}

const names = List([
  'Jack',
  'John',
  'Kate',
  'Ron',
  'Jessy',
  'Kim',
  'Misha',
  'Dan',
  'Jordan',
  'Demetrius',
  'Katy',
  'Lina',
  'Connor',
  'Jack',
  'Desmond',
  'Alfred',
  'Sasha',
  'Alex',
  'Teodor',
  'Angelina',
  'Diana',
  'Suzi',
  'Curtis',
  'Andrew',
  'Sam',
  'Felix',
  'Ben',
  'Peter',
  'Rafael',
  'Page',
  'Ronda',
  'Henry',
  'Thomas',
  'Urlik',
  'Vlad',
  'Xavier',
  'Zed',
  'Dinara',
  'Richard'
])

export function generateRandomName (): string {
  return getRandomItemFromList(names)
}

export function getRandomItemFromList (map: List): any {
  const number = Math.floor(Math.random() * map.size)
  return map.get(number)
}
export function getRandomItemFromMap (map: Map): any {
  const number = Math.floor(Math.random() * map.size)
  const keys = map.keySeq().toArray()
  return map.get(keys[number])
}