const express = require('express');
const router = express.Router();
const feedController = require('../controllers/feedController');

router.get('/feed', feedController.getAllFeeds);
router.post('/feed', feedController.createFeed);
router.get('/feed/:id', feedController.getOneFeed);
router.get('/feed/edit/:id', feedController.getEditPage);
router.post('/feed/update/:id', feedController.updateFeed);
router.post('/feed/delete/:id', feedController.deleteFeed);

module.exports = router;