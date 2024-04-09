import express from 'express';
const router = express.Router();
import Classes from '../models/classes.mjs';
import db from '../db/conn.mjs';

//routes
//seed route
router.get('/seed', async (req, res) => {
    console.log('seed route');
    try {
        await Classes.create([
            {
                name: 'basketball basics',
                ageGroup: '14 - 16',
                program: 'basketball',
                location: 'Los-Angeles, CA'
            },
            {
                name: 'basketball basics',
                ageGroup: '16 - 18',
                program: 'basketball',
                location: 'Los-Angeles, CA'
            },
            {
                name: 'basketball basics',
                ageGroup: '18 - 20',
                program: 'basketball',
                location: 'Los-Angeles, CA'
            },
            {
                name: 'basketball basics',
                ageGroup: '20 - 25',
                program: 'basketball',
                location: 'Los-Angeles, CA'
            },
            {
                name: 'yoga fundamentals',
                ageGroup: '14 - 16',
                program: 'yoga',
                location: 'Los-Angeles, CA'
            },
            {
                name: 'yoga fundamentals',
                ageGroup: '14 - 18',
                program: 'yoga',
                location: 'Los-Angeles, CA'
            },
            {
                name: 'yoga fundamentals',
                ageGroup: '18 - 25',
                program: 'yoga',
                location: 'Los-Angeles, CA'
            },
            {
                name: 'yoga fundamentals',
                ageGroup: '25 - 35',
                program: 'yoga',
                location: 'Los-Angeles, CA'
            },
            {
                name: 'daily meditation',
                ageGroup: '14+',
                program: 'meditation',
                location: 'remote'
            }

        ])
        res.status(200).redirect('/classes');
    } catch (err) {
        res.status(400).send(err);
    }
});

//index
router.get('/', async (req, res) => {
    try {
        const foundClasses = await Classes.find({});
        res.status(200).render('classes/Index', { classes: foundClasses })
        // res.status(200).send(foundClasses);
    } catch (err) {
        res.status(400).send(err);
    }
});

//post
router.post('/', async (req, res) => {
    try {
        const newClass = await Classes.create(req.body);
        res.status(201).send(newClass);
    } catch (err) {
        res.status(400).send(err);
    }
});

//put route
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedClass = await Classes.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).send(updatedClass);
    } catch (err) {
        res.status(400).send(err);
    }
});

//delete route
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Classes.findByIdAndDelete(id);
        res.status(204).send();
    } catch (err) {
        res.status(400).send(err);
    }
});

//new
router.get('/new', (req, res) => {
    res.render('classes/New');
});

//edit
router.get('/:id/edit', async (req, res) => {
    try {
        const foundClasses = await Classes.findById(req.params.id);
        res.status(200).render('classes/Edit', {classes: foundClasses});
    }catch (err) {
        res.status(400).send(err);
    }
});

//show
router.get('/:id', async (req, res) => {
    try {
        const foundClasses = await Classes.findById(req.params.id);
        res.render('classes/Show', {classes: foundClasses});
    } catch (err) {
        res.status(400).send(err);
    }
});



export default router;
