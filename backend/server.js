import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import userRoutes from './src/routes/userRoutes.js'

const app = express()
app.use(express.json())
app.use(cors())

app.use(userRoutes)

app.listen(3001, () => {
  console.log(`App de exemplo esta rodando na porta 3001`)
})