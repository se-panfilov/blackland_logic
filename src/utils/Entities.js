import uuidv4 from 'uuid/v4'

export function generateRandomId () {
  return uuidv4()
}

const names = [
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
  'Jack'
]

export function generateRandomName () {
  return names[Math.floor(Math.random() * names.length)]
}