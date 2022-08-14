const express = require('express')
const db = require('./config/database')
const cors = require('cors')
const routes = require('./Routes')
const port = 3001
const app = express()

app.use(express.json())
app.use(cors())
routes(app)
app.listen(port, () =>{
    console.log(`Servidor rodando, porta ${port}`)
})

// db.connection.sync({force:true})
