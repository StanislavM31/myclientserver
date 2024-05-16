const {getAllUsersDB, createUserDB, getUserByEmailDB} = require("../repository/repository")



async function getAllUsers(){
    const data = await getAllUsersDB();
    return data;
}
async function createUser(name, email, password){
    const data = await createUserDB(name, email, password);
    return data;
}
async function getUserByEmail(email){
    const data = await getUserByEmailDB(email);
    return data;
}


async function authorization(){

}

module.exports = {getAllUsers, createUser, getUserByEmail}
