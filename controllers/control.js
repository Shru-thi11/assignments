const postModel = require("../model/poste");
const commentModel = require("../model/schema");

const homePage = async (req, res) => {
    try {
        const posts = await postModel.find()
            .populate("userId")
            .sort({ createdAt: 1 });
        const comments = await commentModel.find()
            .populate("userId")
            .sort({ createdAt: 1 })

            res.render("homePage", { posts, comments, error: req.query.error || null });
    } catch (err) {
        console.log(err);
    }
};

const addPost = async (req, res) => {
    try {
        await postModel.create(req.body);
        console.log("A new was added!")
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(400).send("Something is wrong");
        }
};

const addComment = async( req, res) => {
    try {
        const { comment } = req.body;
        if (comment && comment.trim() !== "") {
            await commentModel.create({
                body: comment,
                postId: req.params.id
            });
        }
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(400).send("Something went wrong with a comment...")
    }
};

module.exports = {
    homePage,
    addPost,
    addComment,
};