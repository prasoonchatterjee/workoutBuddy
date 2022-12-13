require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workouts');

//initialize express app
const app = express();

// middlewares

//to access incoming data in req body
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use('/api/workouts', workoutRoutes);

//listen for requests
app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT);
});
