const router = require('express').Router()

const createReservedAccount = require('../controllers/payvesselController')

router.post('/create-account', createReservedAccount)

module.exports = router
