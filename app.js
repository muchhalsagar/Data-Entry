const express = require("express");
const app = express();
const userRoutes = require('./routes/user');
const cors = require('cors');
const mongoose = require('mongoose');
const dbConnection = require('./config/dbConnection');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

// Parse incoming requests with JSON payloads
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dbConnection();
// PORT
const PORT = process.env.PORT || 8000;

// Serve static files from the 'public' folder
app.use('/uploads', express.static('uploads'));
app.use('/static', express.static(path.join(__dirname, 'static')));

// Use routes
app.use('/user', userRoutes);

app.get("/", function(request, response) {
    response.send("Hello World!");
});

app.listen(PORT, function() {
    console.log("Started application on port %d", PORT);
});