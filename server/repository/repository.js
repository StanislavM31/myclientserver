const pool = require('./../db')


async function getAllUsersDB(){
    const client = await pool.connect();
    const sql = `SELECT * FROM users`;
    const result = (await client.query(sql)).rows
    return result;
}
async function createUserDB(name, email, password){
    const client = await pool.connect();
    const sql = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3, $4) RETURNING*`;
    const result = (await client.query(sql, [name, email, password])).rows;
    return result;
}
async function getUserByEmailDB(email){
    const client = await pool.connect();
    const sql = `SELECT * FROM users WHERE email=$1`;
    const result = (await client.query(sql, [email])).rows
    return result;
}
/* local server json file */
const path = '../storage/storage.json';
const fs = require('fs');
const { v1: uuidv1 } = require('uuid');

async function registerUser(name, email, password) {
    const storage = JSON.parse(readFileSync(path));
  
    const found = storage.find(el => el.email === user.email) ?? null;
    if (found) throw new HttpException(400, ExceptionType.USER_AUTH_ALREADY_EXISTS);
 
    storage.push({ id: uuid.v1(), ...user, pwd: hashed });
    writeFileSync(path, JSON.stringify(storage));
  }


module.exports = {getAllUsersDB, createUserDB}