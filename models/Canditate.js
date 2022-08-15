const db = require('../config/database.js')

const Candidate = db.connection.define('candidates', {
    label: {
        type: db.Sequelize.STRING,
        required: true
    },
    votes: {
        type: db.Sequelize.INTEGER,
        defaultValue: 0,
    }
})

module.exports = Candidate


