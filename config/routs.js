
const express = require("express");
const route = express.Router();

const controller = require("../controllers/postcontrollers");
const userController = require("../controllers/usercontrollers");
const userAuth = require ("../views/auth");

route.get("/posts", userAuth.checkUser, controller.homePage);


route.get("/register", userController.renderRegister);
route.post("/register", userController.register);


route.get("/login", userController.renderLogin);
route.post("/login", userController.login);

route.get("/logout", userController.logout);


route.post("/add-post", userAuth.isLoggedIn, controller.addPost);
route.post("/posts/:id/comment", userAuth.isLoggedIn, controller.addComment);


module.exports = route;
