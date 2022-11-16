const express = require('express')
const {create} = require('../models/Workoutmodel')
const Workout = require('../models/Workoutmodel')
const  {getAllWorkouts,getSingleWorkouts,createWorkout,deleteWorkout,updateWorkout,upload} = require('../controllers/workoutController')  
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()





//Require Auth For All Workouts
router.use(requireAuth)

//Get All WorkOuts
router.get('/', getAllWorkouts)

//Get Single Workouts
router.get('/:id', getSingleWorkouts)

//Post a new Workout
router.post('/', upload.single('image') , createWorkout);

//Delete a Workout
router.delete('/:id',deleteWorkout)

// Update a Workout
router.patch('/:id', updateWorkout)
 
//63400042cd4a43c675b5e3f7
module.exports = router