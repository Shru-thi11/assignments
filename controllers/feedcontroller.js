const Feed = require('../models/Feed');

// GET /feed - Landing Page
exports.getAllFeeds = async (req, res) => {
    const feeds = await Feed.find().sort({ date: -1 });
    res.render('addpost', { feeds });
};

// POST /feed - Create Post
exports.createFeed = async (req, res) => {
    try {
        await Feed.create(req.body);
        res.redirect('/feed');
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// GET /feed/:id - Show One Page
exports.getOneFeed = async (req, res) => {
    const feed = await Feed.findById(req.params.id);
    res.render('show', { feed });
};

// GET /feed/edit/:id - Edit Page
exports.getEditPage = async (req, res) => {
    const feed = await Feed.findById(req.params.id);
    res.render('edit', { feed });
};

// POST /feed/update/:id - Update Logic
exports.updateFeed = async (req, res) => {
    try {
        await Feed.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
        res.redirect(`/feed/${req.params.id}`); // Navigates back to Show One
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// POST /feed/delete/:id - Delete Logic
exports.deleteFeed = async (req, res) => {
    await Feed.findByIdAndDelete(req.params.id);
    res.redirect('/feed'); // Navigates back to Landing
};