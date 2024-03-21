const express = require("express");
const cors = require("cors");
const dbconnection = require("./Config/dbconnection");
const app = express();
const userRoutes = require("./Routes/userRoutes")
const bodyParser = require('body-parser');
dbconnection.dbConnect();
const PORT = 8000;
app.use(express.json())
app.use(cors())
app.use('/', userRoutes)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
});




