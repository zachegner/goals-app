const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')

connectDB()

const app = express()

app.set('port', (process.env.PORT || 5000))

app.use(express.json())
app.use(express.urlencoded({ extened: false }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(
            path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
        )
    )
} else {
    app.get('/', (req, res) => res.send('Please set to production'))
}

app.use(errorHandler)

// Start node server
app.listen(app.get('port'), function() {
    console.log( 'Node server is running on port ' + app.get( 'port'));
    });

