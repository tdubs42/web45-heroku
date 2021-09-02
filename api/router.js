const router = require('express').Router()

router.get('/', (req, res) => res.status(200).json({api: 'up and running'}))

module.exports = router
