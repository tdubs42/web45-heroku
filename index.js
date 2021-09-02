require('dotenv').config()
const server = require('./api/server')
const PORT = process.env.PORT || 5000
const {logSuccess} = require('./consoleStyle')

server.listen(PORT, () => logSuccess(`turtle power on port ${PORT}`))
