import express from 'express'
import routes from './routes'
import { initDB } from './database/init'
import cors from "cors"
import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'A sample API for learning Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.ts'],
};


const swaggerDocs = swaggerJsDoc(swaggerOptions);


const app = express()

app.use('/flightapp', routes)
app.use(express.json())
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

initDB()

const PORT = 3000

app.listen(PORT, () => {
  console.log("Server running")
})