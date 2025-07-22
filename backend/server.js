import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import userRoutes from './src/routes/userRoutes.js'
import tokenRoutes from './src/routes/tokenRoutes.js'
import opportunityRoutes from './src/routes/opportunityRoutes.js'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/', userRoutes)
app.use('/', tokenRoutes)
app.use('/', opportunityRoutes)

app.listen(3001, () => {
  console.log(`App de exemplo esta rodando na porta 3001`)
})