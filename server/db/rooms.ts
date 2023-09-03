import db from './connection.ts'

export async function getAllRooms() {
  const rooms = await db('rooms').select('*')
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
