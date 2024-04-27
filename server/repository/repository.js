const pool = require('../db')

async function getUserByIdDB(id){
    const client = await pool.connect();
    const sql = `SELECT author, title, price
    from book
    WHERE price<=(
       SELECT (AVG(price))
        FROM book)
    ORDER by price DESC`;
    const result = await client.query(sql,[]);
    return result;
}

async function getAllUsersDB(){
    const client = await pool.connect();
    const sql = `SELECT * FROM users`;
    const result = (await client.query(sql)).rows
    return result;
}

module.exports = {getAllUsersDB, getUserByIdDB}