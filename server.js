const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const routes = require('./routes');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/diablo');

const store = new MongoStore({
    db: mongoose.connection.db,
    collection: 'sessions',
    mongoUrl: process.env.MONGODB_URI,
    interval: 1200000,
    dbName: 'diablo',
});

app.use(
    cors({
        allowedHeaders: '*',
        origin: 'localhost:3000/',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        exposedHeaders: '*',
        credentials: true,
    })
);

app.use(
    session({
        secret: 'keyboard cat',
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        },
        store: store,
        saveUninitialized: false,
        resave: false,
        name: 'session-diablo',
    })
);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './client/build')));
app.use(routes);


app.listen(PORT, () => {
    console.info(`Server is running on port ${PORT}`);
});
