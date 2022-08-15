const express = require('express')
const db = require('./config/database.js')
const cors = require('cors')
const routes = require('./routes/index.js')
const port = process.env.PORT || 5000
const app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
app.use(express.json())
app.use(cors())
routes(app)
app.listen(port, () =>{
    console.log(`Servidor rodando, porta ${port}`)
})
 
// db.connection.sync({force:true})
