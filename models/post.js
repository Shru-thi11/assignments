const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    body: { type: String, required: true, minlength: [25, "Post should be minimum 25 character!"] },
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema)