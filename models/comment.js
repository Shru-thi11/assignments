const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    body: { type: String, required: true, minlength: [25, "Comment should be minimum 25 character!"] },
    postId: { type: mongoose.Types.ObjectId, ref: "Post", required: true },
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true } 
}, { timestamps: true });

module.exports = mongoose.model("Comment", commentSchema)