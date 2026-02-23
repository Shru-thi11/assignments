const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'Content is required'],
        minlength: [25, 'Post must be at least 25 characters long']
    }
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);