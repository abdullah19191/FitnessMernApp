const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')
const userRoutes = require('./routes/user')
const port = process.env.PORT || 8000

// express app
const app = express()

//middleware
app.use(express.json())

// // Sercer Production
// if(process.env.NODE_ENV === "production"){
//     app.use(express.static(path.join("frontend/build")))
//     app.get("*",(req,res)=> res.sendFile(path.resolve(__dirname,"frontend","build","index.html")))
// }

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})  

// routes handler
app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)

//connect to db
mongoose.connect(process.env.MONG_URI)
   .then(()=>{
    // listen for Request
app.listen(process.env.PORT,()=> {
    console.log('listening to port',port);
})
   })
   .catch((error)=>{
    console.log(error);
   })
