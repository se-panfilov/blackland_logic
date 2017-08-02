import uuidv5 from 'uuid/v5'

export function generateRandomId() {
  const random = Math.floor((1 + Math.random()) * 0x10000).toString()
  const random2 = Math.random().toString().slice(-5)
  const time = ((new Date()).getTime().toString().slice(-4)).toString()
  return +(random + random2 + time)
}