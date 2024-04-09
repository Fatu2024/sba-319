import express from 'express';
const router = express.Router();
import User from '../models/users.mjs';
import db from '../db/conn.mjs';

//routes
//seed route
router.get('/seed', async (req, res) => {
    console.log('seed route');
    try {
        await User.create([
            {
                name: 'Hima',
                age: '16',
                program: 'basketball'
            },
            {
                name: 'Ayan',
                age: '13',
                program: 'yoga'
            },
            {
                name: 'Fatu',
                age: '24',
                program: 'meditation'
            },
            {
                name: 'Makiya',
                age: '50',
                program: 'yoga'
            },
            {
                name: 'Jailan',
                age: '23',
                program: 'basketball'
            },
            {
                name: 'Ali',
                age: '25',
                program: 'basketball'
            }
        ])
        res.status(200).redirect('/users');
    } catch (err) {
        res.status(400).send(err);
    }
});

//index
router.get('/', async (req, res) => {
    try {
        const foundUsers = await User.find({});
        res.status(200).render('users/Index', { users: foundUsers });
    } catch (err) {
        res.status(400).send(err);
    }
});

//post
router.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).send(newUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

//update route
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).send(updatedUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

//delete route
router.delete('/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).redirect('/users');
    } catch (err) {
        res.status(400).send(err);
    }
});

//new
router.get('/new', (req, res) => {
    res.render('users/New');
});

//edit
router.get('/:id/edit', async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id);
        res.status(200).render('users/Edit', { user: foundUser });
    }catch (err) {
        res.status(400).send(err);
    }
});

//show
router.get('/:id', async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id);
        res.render('users/Show', {user: foundUser});
    } catch (err) {
        res.status(400).send(err);
    }
});


export default router;
