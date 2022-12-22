const express = require('express');
const {
  createWorkout,
  getAllWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
} = require('../controllers/workoutController');

const requireAuth = require('../middleware/requireAuth');

// initialize express router
const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

// GET all workouts
router.get('/', getAllWorkouts);

// GET a single workouts
router.get('/:id', getSingleWorkout);

// POST a workout
router.post('/', createWorkout);

// DELETE a single workouts
router.delete('/:id', deleteWorkout);

// UPDATE a single workouts
router.patch('/:id', updateWorkout);

module.exports = router;
