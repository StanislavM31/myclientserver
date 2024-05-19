const express = require ('express');
const bodyParser = require('body-parser');
const {routeUser} = require("./controller/controller")
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use('/user', routeUser);

app.use((err, req, res, next) => {
    res.send(err.message);
})
app.use(cors())
app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`);
});
module.exports = app;


