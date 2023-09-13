import express from 'express'
import * as db from '../db/rooms'

const router = express.Router()

// GET /api/v1/rooms
router.get('/', async (req, res) => {
  try {
    const rooms = await db.getAllRooms()
    res.json(rooms)
  } catch (error) {
    res.sendStatus(500)
    console.error(error)
  }
})

// GET /api/v1/room/filter
router.post('/filter', async (req, res) => {
  try {
    const filterParams = req.body
    const results = await db.getRoomsByFilter(filterParams)
    res.json(results)
  } catch (error) {
    res.sendStatus(500)
    console.error(error)
  }
})

// GET /api/v1/rooms/requirements/:id
router.get('/requirements/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const requirements = await db.getRequirements(id)
    res.json(requirements)
  } catch (error) {
    res.sendStatus(500)
    console.error(error)
  }
})

// GET /api/v1/rooms/crew/:id
router.get('/crew/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const crew = await db.getCrew(id)
    res.json(crew)
  } catch (error) {
    res.sendStatus(500)
    console.error(error)
  }
})

export default router
