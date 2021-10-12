const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const compression = require('compression');

const routes = require('./routes');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(cors({
    allowedHeaders: '*',
    origin: 'localhost:3000/',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    exposedHeaders: '*',
    credentials: true,
}));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './client/build')));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/diablo');

app.listen(PORT, () => {
    console.info(`Server is running on port ${PORT}`);
});