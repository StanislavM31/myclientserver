const {Pool} = require('pg');

const pool = new Pool({
    host:'localhost',
    port:5432,
    user:"postgres",
    database:"temp_db",
    password:"****"
})

module.export= pool