const express = require("express");
const app = express();

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

require("./config/Database");

const routes = require("./config/routes");
const apiRoutes= require("./config/APIroutes")

app.use("/public", express.static("public"));

app.set("view engine", "ejs");

app.use(routes);
app.use("/api", apiRoutes);

app.listen(5500, () => { console.log('server working on 5500') });