const express = require('express');
const app = express();
const postController = require('./controllers/postcontrollers');

app.set('view engine', 'ejs');

// Routes
app.get('/', postController.getFeed);

app.listen(5500, () => {
    console.log('MVC Server running on http://localhost:5500');
});
