const express = require("express");
const route = express.Router();
const Controller = require("../controllers/control");

//Posts
route.get("/", Controller.homePage);
route.post("/add-post", Controller.addPost);

//Comments
route.post("/posts/:id/comment", Controller.addComment);



module.exports = route;