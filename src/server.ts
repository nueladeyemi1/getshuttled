import mongoose from 'mongoose'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(cors())

const port = process.env.PORT || 3000

app.listen(() => {
  console.log(`listening on ${port}`)
})
