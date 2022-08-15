const db = require('../config/database.js')
const Candidate = require('/Canditate.js')

const Vote = db.connection.define('votes', {
    CPF: {
        type: db.Sequelize.STRING,
        required: true
    }
})

Vote.belongsTo(Candidate, {
    constraint: true,
    foreignKey: 'candidateId'
})



module.exports = Vote
