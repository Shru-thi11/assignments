const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        maxlength: [15, 'Name cannot exceed 15 characters'],
        trim: true
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        maxlength: [40, 'Message cannot exceed 40 characters'],
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Feed', feedSchema);