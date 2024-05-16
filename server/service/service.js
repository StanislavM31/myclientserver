const {getAllUsersDB, getUserByEmailDB} = require("../repository/repository")



async function getAllUsers(){
    const data = await getAllUsersDB();
    return data;
}
async function createUserDB(name, email, password){
    const data = await createUserDB(name, email, password);
    return data;
}


async function authorization(){

}

module.exports = {getAllUsers, createUserDB}