const express = require("express");
const {Service} = require("../service/user.service.js");
const isValidUserData = require("../helper/validation");

let route = express.Router();

const service = new Service();

route.get("/", (req, res) => {
  let data = service.getAllUsers();
  res.send(data);
});//rout

route.get("/:id", (req, res) => {
  const { id } = req.params;
  let data = service.getUserById(id);
  res.send(data);
});

route.post(`/`, isValidUserData, (req, res) => {
  const { name, surname, email, pwd } = req.body;

  const data = service.createUser(name, surname, email, pwd);
  res.send(data);
});

route.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = service.updateUserById(id, name, surname, email, pwd);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

route.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = service.deleteUser(id);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = route;
