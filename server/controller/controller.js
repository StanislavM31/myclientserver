const express = require("express")
const routeUser = express.Router();
const api = express.Router();
const {getAllUsers, createUser} = require("../service/service.js");

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
        const {name, email, password} = req.body;
        const data = await createUser(name, email, password);
        res.send(data)
    } catch (error) {
        res.send(error.message);
    }
})
routeUser.get('/', async (req, res)=>{
    try {

    } catch (error) {

    }
})

routeUser.post('/', async (req, res)=>{
    try {

    } catch (error) {

    }
})
routeUser.put('', async (req, res)=>{
    try {

    } catch (error) {
        res.send(error.message);
    }
})
routeUser.delete('', async (req, res)=>{
    try {

    } catch (error) {

    }
})

module.exports = {routeUser}