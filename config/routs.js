const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');


router.get('/', postController.index);
router.post('/posts', postController.create);
router.put('/posts/:id', postController.update);
router.delete('/posts/:id', postController.delete);
router.post('/posts/:id/comment', postController.comment);

module.exports = router;