import request from 'superagent'

const apiUrl = '/api/v1/rooms'

// Get /api/v1/rooms
export async function fetchRooms() {
  const response = await request.get(apiUrl)
  return response.body
}

// Get /api/v1/rooms/requirements/:id
export async function fetchRequirements(id) {
  const newId = String(id)
  const response = await request.get(`${apiUrl}/requirements/${newId}`)
  return response.body
}

// Get /api/v1/rooms/crew/:id
export async function fetchCrew(id) {
  const newId = String(id)
  const response = await request.get(`${apiUrl}/crew/${newId}`)
  return response.body
}
