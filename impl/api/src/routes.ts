import express from 'express'
import { createUser } from './controllers/register'
import { login } from './controllers/authenticate'
import { listUsers } from './controllers/list-users'

const router = express.Router()

router.post('/user', createUser)
router.post('/login', login)
router.get('/list-users', listUsers)

export default router