const  express= require("express");
const { signup  } = require("../Controller/userController");

const route = express.Router();
route.post('/signup', signup);

module.exports = route;