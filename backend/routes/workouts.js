const express = require('express');
const Workout = require('../models/workoutModel');

//initialize express router
const router = express.Router();

// GET all workouts
router.get('/', (req, res) => {
  res.json({ msg: 'get all workouts' });
});

// GET a single workouts
router.get('/:id', (req, res) => {
  res.json({ msg: 'get a single workout' });
});

// POST a workout
router.post('/', async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE a single workouts
router.delete('/:id', (req, res) => {
  res.json({ msg: 'delete a single workout' });
});

// UPDATE a single workouts
router.patch('/:id', (req, res) => {
  res.json({ msg: 'update a single workout' });
});

module.exports = router;
