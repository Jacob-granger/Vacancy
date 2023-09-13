import request from 'superagent'
import { Room, RoomSearch } from '../../models/rooms'

const apiUrl = '/api/v1/rooms'

// Get /api/v1/rooms
export async function fetchRooms() {
  const response = await request.get(apiUrl)
  return response.body
}

// Get /api/v1/rooms/filter
export async function fetchRoomsByFilter(params: RoomSearch): Promise<Room[]> {
  const response = await request.post(`${apiUrl}/filter`).send(params)
  return response.body
}

// Get /api/v1/rooms/requirements/:id
export async function fetchRequirements(id: number) {
  const newId = String(id)
  const response = await request.get(`${apiUrl}/requirements/${newId}`)
  return response.body
}

// Get /api/v1/rooms/crew/:id
export async function fetchCrew(id: number) {
  const newId = String(id)
  const response = await request.get(`${apiUrl}/crew/${newId}`)
  return response.body
}
