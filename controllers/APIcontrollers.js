const Post = require("../model/poste")
const Comment = require("../model/schema")

const getAllPosts = async (req, res) => {

    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        res.status(200).json({ error: err.message });
    }
}


const createPost = async (req, res) => {
    try {
        const newPost = await Post.create(req.body);
        console.log("Post created");
        res.status(201).json(newPost);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message });
    }
}


const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Post deleted" });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

    }
    catch (err) { res.status(500).json({ error: err.message }) }
}




const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (!post) {
            return res.status(404).json({ message: "Post not found" })
        }



        res.status(200).json({ message: "PostUpdated" })


    }
    catch (err) { res.status(500).json({ error: err.message }) }
}





const createComment = async (req, res) => {
    try {
        const comment = await Comment.create({
            text: req.body.text,
            post: req.params.postId
        });

        const post = await Post.findById(req.params.postId);

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        post.comments.push(comment._id);
        await post.save();

        res.status(201).json(comment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


const getComments = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId).populate("comments");

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.status(200).json(post.comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = {
    getAllPosts,
    createPost,
    deletePost,
    updatePost,
    createComment,
    getComments,
}