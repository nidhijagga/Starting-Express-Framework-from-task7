// const mysql = require("mysql2");
// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node_complete",
//   password: "ANni2616@sql%",
// });

// module.exports = pool.promise();

const Sequelize = require("sequelize");
const sequelize = new Sequelize("node_complete", "root", "ANni2616@sql%", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
