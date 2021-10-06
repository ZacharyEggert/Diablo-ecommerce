const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('client/public'));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/diablo');

app.listen(PORT, () => {
    console.info(`Server is running on port ${PORT}`);
});