import express from 'express'
import routes from './routes'
import { initDB } from './database/init'
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

initDB()

const PORT = 3000

app.listen(PORT, () => {
  console.log("Server running")
})