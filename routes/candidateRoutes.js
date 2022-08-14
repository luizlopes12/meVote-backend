const express = require('express')

const candidatesController = require('../controllers/candidatesController.js')

const router = express.Router()

router
    .get('/candidates/list', candidatesController.getCandidates)
    .get('/candidates/ranking', candidatesController.getRanking)
    .post('/candidates/add', candidatesController.setCandidates)

module.exports = router
