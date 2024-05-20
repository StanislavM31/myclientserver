const {getAllUsersDB, createUserDB, getUserByEmailDB,
    deleteUserLocalDB,
    getAllUsersLocalDB,
    createUserLocalDB} = require("../repository/repository")



async function getAllUsers(){
    //const data = await getAllUsersDB();
    const data = await getAllUsersLocalDB();
    return data;
}
async function createUser(name, email, password){
    //const data = await createUserDB(name, email, password);
    console.log('service++');
    console.log(name, email, password);
    const data = createUserLocalDB(name, email, password);
    return data;
}
async function getUserByEmail(email){
    //const data = await getUserByEmailDB(email);
    const data = await getAllUsersLocalDB(email);
    return data;
}


async function authorization(){

}

module.exports = {getAllUsers, createUser, getUserByEmail }
