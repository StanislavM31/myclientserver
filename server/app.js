const express = require ('express');
const bodyParser = require('body-parser');
const {routeUser} = require("./controller/controller")
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(cors({origin: "http://localhost:3000", credentials: true}));
app.use('/user', routeUser);

app.use((err, req, res, next) => {
    res.send(err.message);
})
app.listen(3001, () => {
  console.log(`Server running at http://localhost:3001/`);
});
module.exports = app;


