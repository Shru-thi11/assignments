const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const postRoutes = require('./config/routs');

const app = express();


mongoose.connect('mongodb+srv://shruthi1193_db_user:Tl0MEJHdAH@cluster0.0o0njhk.mongodb.net/?appName=Cluster0')
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Connection error:', err));


app.set('view engine', 'ejs');
app.use(express.static('public')); 
app.use(express.urlencoded({ extended: true })); 
app.use(methodOverride('_method')); 


app.use('/', postRoutes);


const PORT = 5500;
app.listen(PORT, () => {
    console.log(`Server is running `);
});