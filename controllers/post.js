const Post = require('../model/posting');

exports.index = async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.render('homepage', { posts, error: req.query.error || null });
};

exports.create = async (req, res) => {
    try {
        await Post.create(req.body);
        res.redirect('/');
    } catch (err) {
        res.redirect('/?error=Post must be 25+ characters');
    }
};

exports.update = async (req, res) => {
    await Post.findByIdAndUpdate(req.params.id, { content: req.body.content });
    res.redirect('/');
};

exports.delete = async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/');
};

exports.comment = async (req, res) => {
    await Post.findByIdAndUpdate(req.params.id, {
        $push: { comments: { content: req.body.commentContent } }
    });
    res.redirect('/');
};