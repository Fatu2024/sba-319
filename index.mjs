import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import jsxViewEngine from 'jsx-view-engine';
import methodOverride from 'method-override';

import db from './db/conn.mjs';
import usersRoutes from './controllers/users.mjs';
import classesRoutes from './controllers/classes.mjs';

//creating express app
const app = express();
const PORT = process.env.PORT || 1010;

app.use(express.json());

//setting up a view engine
app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

//middleware - must run before routes
app.use(express.urlencoded({extended: false}));

//use method override
app.use(methodOverride('_method'));

//routes
app.use('/users', usersRoutes);
app.use('/classes', classesRoutes);

app.get('/', (req, res) => {
    res.send(
        `<div>this is my users and classes route <br> <a href='/users'>Users</a> | <a href='/classes'>Classes</a></div>`
    );
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});