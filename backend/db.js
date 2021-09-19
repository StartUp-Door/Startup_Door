const Pool = require("pg").Pool

//Database configuration
const pool = new Pool ({
    user:"postgres",
    password:"wonder",
    port:5432,
    database:"testdb"
})


module.exports = pool;