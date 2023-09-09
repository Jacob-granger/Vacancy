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

// GET /api/v1/rooms/:search
router.get('/:search', async (req, res) => {
  try {
    const searchValue = req.params.search
    const searchResults = await db.getRoomsByAddress(searchValue)
    res.json(searchResults)
  } catch (error) {
    res.sendStatus(500)
    console.error(error)
  }
})

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
