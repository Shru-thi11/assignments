const Post = require('../model/posting');

exports.getAllPosts = async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.render('homepage', { posts, error: null });
};

exports.createPost = async (req, res) => {
    try {
        await Post.create({ content: req.body.content });
        res.redirect('/');
    } catch (err) {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.render('homepage', { posts, error: err.message });
    }
};

exports.deletePost = async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/');
};

exports.updatePost = async (req, res) => {
    await Post.findByIdAndUpdate(req.params.id, { content: req.body.content });
    res.redirect('/');
};