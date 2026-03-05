const Post = require("../models/post");
const Comment = require("../models/comment");

const homePage = async (req,res) => {
        const posts = await Post.find().populate("userId").sort({createdAt: -1});
        const comments = await Comment.find().populate("userId").sort({createdAt: 1})
        res.render("homepage", { posts, comments, user: req.user || null });
};

const addPost = async (req,res) => {
        if(!req.user) return res.redirect("/login");
        
        await Post.create({
            body: req.body.body,
            userId: req.user.id
        });
        res.redirect("/posts");
};

const addComment = async (req,res) => {
        if (!req.user) return res.redirect("/login");

        const {comment} = req.body;
        if (comment && comment.trim() !== "") {
            await Comment.create({
                body: comment,
                postId: req.params.id,
                userId: req.user.id
            });
        }
        res.redirect("/posts");
    };

module.exports = { homePage, addPost, addComment }