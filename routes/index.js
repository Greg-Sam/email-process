const router = require('express').Router()

router.use('/api', require('./send.js'))
// router.use('/api', require('./authRoutes.js'))
// router.use('/api', require('./userRoutes.js'))
// router.use('/api', require('./scoringRoutes.js'))
// router.use('/api', require('./tournamentRoutes.js'))
// router.use('/api', require('./adminRoutes.js'))

module.exports = router