// Create web server
var express = require('express');
var app = express();

// Serve static files
app.use(express.static('public'));

// Route for comments
app.get('/comments', function(req, res) {
    var comments = [
        'Hello',
        'I am a comment',
        'I am a another comment'
    ];
    res.json(comments);
}); // Add a closing parenthesis here

