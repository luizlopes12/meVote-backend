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


// Candidate.bulkCreate([
//     { label: '1' },
//     { label: '2' },
//     { label: '3' },
//     { label: '4' },
//     { label: '5' },
//     { label: '6' },
//     { label: '7' },
//     { label: '8' },
//     { label: '9' },
// ])

