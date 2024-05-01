import mongoose from 'mongoose'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(cors())

const port = process.env.PORT || 3000
const PASSWORD = process.env.DB_PASSWORD
// const DatabaseURL = process.env.DB_URL?.replace('<password>', PASSWORD)

app.listen(() => {
  console.log(`listening on ${port}`)
})
