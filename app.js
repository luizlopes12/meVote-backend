const express = require('express')
const db = require('./config/database.js')
const cors = require('cors')
const routes = require('./routes/index.js')
const Candidate = require('./models/Canditate.js')
const port = process.env.PORT || 3000 
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
app.get('/', (req, res) =>{
    res.send('Inicio da API meVote.')
})
app.listen(port, () =>{
    console.log(`Servidor rodando, porta ${port}`)
})
 
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getDate();
var year = dateObj.getUTCFullYear();

var newdate = year + "/" + month + "/" + day;
if(newdate == '2022/8/21'){
    db.connection.sync({force:true}).then(()=>{
        for(let i = 1; i <= 7; i++){
            Candidate.create({
                label: i
            })
        }
    })
}
