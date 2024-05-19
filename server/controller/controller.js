const express = require("express")
const routeUser = express.Router();
const api = express.Router();
const {getAllUsers, createUser, getUserByEmail} = require("../service/service.js");

routeUser.get('/', async (req, res)=>{
    try {
        const data = await getAllUsers();
        res.send(data)
    } catch (error) {
        res.send(error.message);
    }
})
routeUser.post('/', async (req,res)=>{
    try {
        console.log("+++")
        const {name, email, password} = req.body;
        const data = await createUser(name, email, password);
        res.send(data)
        console.log(data)
    } catch (error) {
        res.send(error.message);
    }
})
routeUser.get('/', async (req, res)=>{
    try {
        const{email} = req.body;
        const data = await getUserByEmail(email);
        res.send(data)
    } catch (error) {
        res.send(error);
    }
})


module.exports = {routeUser}