import express from 'express'
import routes from './routes'
import { initDB } from './database/init'

const app = express()

app.use(express.json())
app.use(routes)

initDB()

const PORT = 3000

app.listen(PORT, () => {
  console.log("Server running")
})