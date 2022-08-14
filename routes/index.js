const express = require('express')

const votes = require('./voteRoutes.js')
const candidate = require('./candidateRoutes.js')

const routes = (app) =>{
    app.use(
        votes,
        candidate
    )
}
module.exports = routes