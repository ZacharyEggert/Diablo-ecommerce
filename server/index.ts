import './paths';
import express from 'express';
import mongoose from 'mongoose';
import next from 'next';
import path from 'path';
import cors from 'cors';
import compression from 'compression';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import routes from '@routes';
import dotenv from 'dotenv';
dotenv.config();
const PORT = parseInt(process.env.PORT!) || 3000;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: path.join(__dirname, '../') });
const handle = app.getRequestHandler();

const main = async () => {

    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/diablo');

    const store = new MongoStore({
        collectionName: 'sessions',
        mongoUrl: process.env.MONGODB_URI,
        autoRemoveInterval: 1200,
        dbName: 'diablo',
        mongoOptions: {},
    });

    app.prepare().then(() => {
        const server = express();

        server.use(
            cors({
                allowedHeaders: '*',
                origin: 'localhost:3000/',
                methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
                exposedHeaders: '*',
                credentials: true,
            })
        );

        server.use(
            session({
                secret: 'keyboard cat',
                cookie: {
                    maxAge: 1000 * 60 * 60 * 24 * 7 * 52, // 1 year
                },
                store: store,
                saveUninitialized: false,
                resave: false,
                name: 'session-diablo',
            })
        );
        server.use(compression());
        server.use(express.json());
        server.use(express.urlencoded({ extended: true }));

        server.use(express.static(path.join(__dirname, '../public')));
        server.use(routes);

        server.all('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(PORT, () => {
            console.log(`> Ready on http://localhost:${PORT}`);
        });
    });

};

main();