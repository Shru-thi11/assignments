const express = require('express');
const rout = express.Router();
const controller = require('../controllers/APIcontrollers');

// Post API
rout.get('/get-posts', controller.getAllPosts);
rout.post('/create-post', controller.createPost);
rout.put('/edit-post/:id', controller.updatePost);
rout.delete('/delete-post/:id', controller.deletePost);

// Comment API
rout.get('/get-post-comments/:id_post', controller.getComments);
rout.post('/post-post-comment/:id_post', controller.createComment);

module.exports = rout;