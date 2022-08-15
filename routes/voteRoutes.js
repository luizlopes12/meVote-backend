const express = require('express')

const votesController = require('../controllers/votesController.js')

const router = express.Router()

router
    .get('/votes/verify/:cpf', votesController.getVote)
    .post('/votes/add', votesController.setVote)

module.exports = router
