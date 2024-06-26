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
const path = './storage/storage.json';
const fs = require('fs');
const { v1: uuidv1 } = require('uuid');

async function createUserLocalDB(name, email, password) {
    console.log("repository+++");
    try {
      const data = {
        name,
        email,
        password
      };
      const jsonData = JSON.stringify(data);
  
      if (fs.existsSync(path)) {
        const fileContent = fs.readFileSync(path, 'utf8');
        try {
          const dataArray = JSON.parse(fileContent);
          dataArray.push(data);
          const updatedContent = JSON.stringify(dataArray, null, 2);
          fs.writeFileSync(path, updatedContent);
          /* return dataArray; */ //возвращает весь список
        } catch (error) {
          console.error("Ошибка файла", error);
          return {
            success: false,
            message: "Ошибка: файл не существует"
          };
        }
      } else {
        fs.writeFileSync(path, JSON.stringify([data], null, 2));
      }
  
      return {
        success: true,
        message: `User ${name} with ${email} successfully added`
      };
  
    } catch (error) {
      console.log("Данные не записаны:", error);
      return {
        success: false,
        message: "Ошибка"
      };
    }
  }

function getAllUsersLocalDB() {
    const storage = JSON.parse(readFileSync(path));
    console.log(storage);
    if (!storage.length) throw new Error("DB is empty");
    return storage;
  }
  function updateUserLocalDB(id, name, email, password) {
    console.log("repository+++");
    
    const storage = JSON.parse(readFileSync(path));
  
    const updatedStorage = storage.map(user => {
      if (user.email === id) {
        user.name = name;
        user.email = email;
        user.password = password;
      }
      return user;
    });
  
    writeFileSync(path, JSON.stringify(updatedStorage));
  
    return `Пользователь ${name} обновлен`;
  }
function deleteUserLocalDB(id) {
    const storage = JSON.parse(readFileSync(path));

    const filtered = storage.filter(el => el.id !== id);
    if (storage.length === filtered.length) throw new Error("no such user")

    writeFileSync(path, JSON.stringify(filtered));
  }


module.exports = {getAllUsersDB, createUserDB, getUserByEmailDB, 
    deleteUserLocalDB,
    updateUserLocalDB,
    getAllUsersLocalDB,
    createUserLocalDB
}