
const Post = require('../model/postmodel');

exports.getFeed = (req, res) => {
    const allPosts = Post.getAllPosts();
    res.render('app', { posts: allPosts });
};