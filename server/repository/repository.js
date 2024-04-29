const pool = require('../db')

async function getFriomDB(){
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