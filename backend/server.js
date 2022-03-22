const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDB = require ('./config/db')
const port = process.env.PORT || 5000
const { errorHandler } = require('./middleware/errorMiddleware')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extened: false}))

const goalRoutes = require('./routes/goalRoutes')
const userRoutes = require('./routes/userRoutes')
app.use('/api/goals', goalRoutes)
app.use('/api/users', userRoutes)

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))