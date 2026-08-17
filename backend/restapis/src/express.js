const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

const posts = require('../routes/posts');

// routes
app.use('/api/posts', posts);

app.listen(8000, () => {
    console.log("server is running on port 8000");
});