const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
        minlength: [25, "Post should be minimum 25 character"]
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
    }
}, { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema); 