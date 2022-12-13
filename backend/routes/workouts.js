const express = require('express');

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
router.post('/', (req, res) => {
  res.json({ msg: 'post a workout' });
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
