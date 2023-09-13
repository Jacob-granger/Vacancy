import { RoomSearch } from '../../models/rooms.ts'
import db from './connection.ts'

export async function getAllRooms() {
  const rooms = await db('rooms').select('*')
  return rooms
}
export function getRoomsByFilter(filterParams: RoomSearch) {
  const rooms = db('rooms').select('*')

  if (filterParams.address) {
    rooms.where('address', 'like', `%${filterParams.address}%`)
  }
  if (filterParams.min) {
    rooms.where('rent', '>=', filterParams.min)
  }
  if (filterParams.max) {
    rooms.where('rent', '<=', filterParams.max)
  }
  return rooms
}

export async function getRequirements(id: number) {
  const requirements = await db('requirements').where('room_id', id).select('*')
  return requirements
}

export async function getCrew(id: number) {
  const crew = await db('crew').where('room_id', id).select('*')
  return crew
}
