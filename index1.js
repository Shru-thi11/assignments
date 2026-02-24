const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const postRoutes = require('./config/routs');

const app = express();


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


mongoose.connect('mongodb+srv://shruthi1193_db_user:Tl0MEJHdAH@cluster0.0o0njhk.mongodb.net/?appName=Cluster0')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));


app.use('/', postRoutes);

app.listen(5500, () => console.log('Server running on http://localhost:5500'));