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

function createUserLocalDB(name, email, password) {
    const storage = JSON.parse(readFileSync(path));
  
    const found = storage.find(el => el.email === user.email) ?? null;
    if (found) throw new Error("attempt failed");
 
    storage.push({ id: uuid.v1(), name: name, email: email, pwd: password });
    writeFileSync(path, JSON.stringify(storage));
  }

function getAllUsersLocalDB() {
    const storage = JSON.parse(readFileSync(path));
    console.log(storage);
    if (!storage.length) throw new Error("DB is empty");
    return storage;
  }
function deleteUserLocalDB(id) {
    const storage = JSON.parse(readFileSync(path));

    const filtered = storage.filter(el => el.id !== id);
    if (storage.length === filtered.length) throw new Error("no such user")

    writeFileSync(path, JSON.stringify(filtered));
  }


module.exports = {getAllUsersDB, createUserDB, getUserByEmailDB, 
    deleteUserLocalDB,
    getAllUsersLocalDB,
    createUserLocalDB
}