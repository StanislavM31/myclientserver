const express = require("express")
const routeUser = express.Router();
const {getAllUsers, createUser, getUserByEmail,updateUser, deleteUser} = require("../service/service.js");

routeUser.get('/', async (req, res)=>{
    console.log("+++")
    try {
        const data = await getAllUsers();
        res.send(data)
    } catch (error) {
        res.send(error.message);
    }
})
routeUser.post('/', async (req,res)=>{
    try {
        console.log("controller+++")
        const {name, email, password} = req.body;
        const data = await createUser(name, email, password);
        res.send(data)
        console.log(data)
    } catch (error) {
        res.send(error.message);
    }
})
routeUser.put('/', async (req,res)=>{
    try {
        console.log("controller+++")
        const {name, email, password} = req.body;
        const data = await updateUser(name, email, password);
        res.send(data)
        console.log(data)
    } catch (error) {
        res.send(error.message);
    }
})
routeUser.get('/', async (req, res)=>{
    console.log("+++")
    try {
        const{email} = req.body;
        const data = await getUserByEmail(email);
        res.send(data)
    } catch (error) {
        res.send(error);
    }
})
routeUser.delete('/', async (req, res)=>{
    console.log("+++")
    try {
        const{id} = req.body;
        const data = await deleteUser(id);
        res.send(data)
    } catch (error) {
        res.send(error);
    }
})


module.exports = {routeUser}