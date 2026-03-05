const express = require("express");
const app = express();
const port = 5500;
var cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.urlencoded({ extended:true }));

require("./config/mongoose");

const routes = require("./config/routs");

app.use("/public", express.static("public"));

app.set("view engine", "ejs");

app.use(routes);




app.listen(port, () => { console.log(`The server is running on port ${port}!`)});