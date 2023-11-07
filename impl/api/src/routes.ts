import express from 'express'
import { createUser } from './controllers/register'
import { login } from './controllers/authenticate'
import { listFlights } from './controllers/list-flights'
import { listFlightSeats } from './controllers/list-flight-seats'
import { bookSeat } from './controllers/book-seat'

const router = express.Router()

router.post('/user', createUser)
router.post('/login', login)

router.get('/flights', listFlights)
router.get('/flight/:flightId', listFlightSeats)
router.put('/seat/:seatId', bookSeat)

export default router