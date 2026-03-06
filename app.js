const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const feedRoutes = require('./routs/feedrouts');

const app = express();

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

// Database Connection (MongoDB Compass)
mongoose.connect('mongodb+srv://shruthi1193_db_user:Tl0MEJHdAH@cluster0.0o0njhk.mongodb.net/?appName=Cluster0')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Connection error', err));

// Use Routes
app.use('/', feedRoutes);

app.listen(5500, () => console.log('Server running on 5500'));