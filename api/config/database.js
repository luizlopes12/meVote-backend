const Sequelize = require("sequelize");
//Conexão com o banco de dados mysql
const connection = new Sequelize("fatecdatabase", "fatecdatabase", "f@t3c@db__1", {
  host: "fatecdatabase.mysql.dbaas.com.br",
  dialect: "mysql",
  port: 3306,
});

connection
  .authenticate()
  .then(() => console.log("Banco de dados conectado"))
  .catch((err) => console.log("falha ao se conectar: " + err));

module.exports = {
  Sequelize,
  connection,
};