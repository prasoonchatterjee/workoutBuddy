const mongoose = require('mongoose');
const Workout = require('../models/workoutModel');

// get all workouts
const getAllWorkouts = async (req, res) => {
  try {
    const user_id = req.user.id;
    const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get a single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: 'Invalid id' });
    }
    const workout = await Workout.findById(id);
    if (!workout) return res.status(400).json({ msg: 'No such workout' });
    else return res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// create a new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  let emptyFields = [];

  if (!title) emptyFields.push('title');
  if (!load) emptyFields.push('load');
  if (!reps) emptyFields.push('reps');

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'Please fill in all fields', emptyFields });
  }
  try {
    const user_id = req.user._id;
    const workout = await Workout.create({ title, load, reps, user_id });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: 'Invalid id' });
    }
    const workout = await Workout.findByIdAndDelete(id);
    if (!workout) return res.status(400).json({ msg: 'No such workout' });
    else return res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  const { title, load, reps } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: 'Invalid id' });
    }
    const workout = await Workout.findOneAndUpdate(
      { _id: id },
      { title, load, reps }
    );
    if (!workout) return res.status(400).json({ msg: 'No such workout' });
    else return res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createWorkout,
  getAllWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
};
