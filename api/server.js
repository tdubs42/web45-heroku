const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const {logger} = require('./middleware/middleware')
const router = require('./router')
const path = require('path')

const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())
server.use('/api', logger, router)

server.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client/client/build', 'index.html')))

module.exports = server
