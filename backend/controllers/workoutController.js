const Workout = require('../models/Workoutmodel')
const mongoose = require('mongoose')
const multer  = require('multer')
const path = require('path')





//files received from the client will be saved
const storage = multer.diskStorage({
    destination:function(req,file,cb) {
        cb(null,"../frontend/public/uploads");
    },
    filename: function(req,file,cb){
     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))  
    }
})


let upload = multer({storage:storage})


//Get All Workout
const getAllWorkouts  = async (req,res) => {
    const user_id = req.user._id
    const workout  = await Workout.find({user_id}).sort({createdAt: -1})    
    res.status(200).json(workout);
}



//Get a single workout
const getSingleWorkouts = async (req,res) => {
    
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such Workout'});
    }

    const workout = await Workout.findById(id);
    if(!workout){
        return res.status(404).json({error:'No such workout'})
    }
     res.status(200).json(workout)
}




//Create a new workout
const createWorkout = async (req,res) =>{   
    
    const {title,load,reps} = req.body
    
      let emptyfield = []
      if(!title){
        emptyfield.push('title')
      }
      if(!load){
        emptyfield.push('load')
      }
      if(!reps){
        emptyfield.push('reps')
      }
      if(emptyfield.length > 0){
        return res.status(400).json({error:'Please fill in all the fields', emptyfield})
      }

//Adding Doc to DB
    try{ 

    const user_id = req.user._id
    const image = req.file.filename
    const newWorkoutData = {title,load,reps,image,user_id} 
    const workout = await Workout.create(newWorkoutData) 
    console.log("////////////YAYYYYYYYYYY DATAAAAAAAAAAA",workout)
      res.status(200).json(workout);
    }catch (error) {
       res.status(400).json({error:error.message})
    } 
}


//Delete a workout
const deleteWorkout = async (req,res) =>{
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such Workout'});
    }

    const workout = await Workout.findOneAndDelete({_id:id})
    if(!workout) {
        return res.status(404).json({error: 'No Such Workout'})
    }

    res.status(200).json(workout)
}


//Update a workout
const updateWorkout = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such Workout'});
    }
    const workout = await Workout.findOneAndUpdate({_id:id}, {
        ...req.body
    })

    if(!workout) {
        return res.status(404).json({error: 'No Such Workout'})
    }
    res.status(200).json(workout)
}



module.exports = {
    getAllWorkouts,
    getSingleWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout,
    upload
}