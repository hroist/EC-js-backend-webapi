require('dotenv').config()
const port = process.env.API_PORT || 9999
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongodb = require('./mongodb-server')

// middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// routes
const productsController = require('./controllers/productsController')
app.use('/api/products', productsController)

const usersController = require('./controllers/usersController')
app.use('/api/users', usersController)

const authenticationController = require('./controllers/authenticationController')
app.use('/api/auth', authenticationController)

// initialize 
mongodb()
app.listen(port, () => console.log(`WebApi is running on http://localhost:${port}`))

