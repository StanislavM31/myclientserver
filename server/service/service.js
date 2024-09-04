const {getAllUsersDB, createUserDB, getUserByEmailDB,
    deleteUserLocalDB,
    getAllUsersLocalDB,
    updateUserLocalDB,
    createUserLocalDB,
} = require("../repository/repository")



async function getAllUsers(){
    //const data = await getAllUsersDB();
    const data = await getAllUsersLocalDB();
    return data;
}
async function createUser(name, email, password){
    //const data = await createUserDB(name, email, password);
    console.log('service+++');
    const data = await createUserLocalDB(name, email, password);
    return data;
}
async function updateUser(name, email, password){
    //const data = await createUserDB(name, email, password);
    console.log('service+++');
    const data = await createUserLocalDB(name, email, password);
    return data;
}
async function deleteUser(id){
    //const data = await createUserDB(name, email, password);
    console.log('service+++');
    const data = await deleteUserLocalDB(id);
    return data;
}
async function getUserByEmail(email){
    //const data = await getUserByEmailDB(email);
    const data = await getAllUsersLocalDB(email);
    return data;
}


async function authorization(){

}

module.exports = {getAllUsers, createUser, updateUser, getUserByEmail, deleteUser }
