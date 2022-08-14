const Sequelize = require("sequelize");
//Conexão com o banco de dados mysql
const connection = new Sequelize("nodeBD", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

connection
  .authenticate()
  .then(() => console.log("Banco de dados conectado"))
  .catch((err) => console.log("falha ao se conectar: " + err));

module.exports = {
  Sequelize,
  connection,
};