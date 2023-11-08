import express from 'express'
import cors from "cors"
import { initDB } from './database/init'

import routes from './routes'
import swaggerUi from 'swagger-ui-express'
import swaggerConfig from './swagger.json'

const app = express()

app.use(express.json())

initDB()

app.use("/flightapp", routes)

app.use(cors())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));


const PORT = 3000

app.listen(PORT, () => {
  console.log("Server running on port " + PORT)
})