import React from 'react'
import {useEffect,useState} from 'react';
import WorkoutDetails from '../components/WorkoutDetails';
import { useWorkoutContext } from '../hooks/useWorkoutContext';
import '../index.css';
import {useAuthContext} from '../hooks/useAuthContext'
import TabWorkouts from '../components/TabWorkouts';





 function Workout() {
   const {workouts,dispatch} = useWorkoutContext() 
   const {user}  = useAuthContext()
   const [data,setData]= useState([])
  //  const [data,setData]= useState({
  //   title:"",
  //   load:"",
  //   reps:"",
  //   image:""
  // })

    useEffect(() => {
    const fetchWorkouts = async () => {
        const response = await fetch('/api/workouts/', {
          headers: {
            'Authorization': `Bearer ${user.token}`,
          }
        });
        const json = await response.json();
        console.log(">>>>>>><<<<<<<<<<<<",response.body)
        if(response.ok){
          dispatch({type:'SET_WORKOUTS',payload:json})
          setData(workouts)
        }
        console.log(".....x.......x",data)
            }
      if(user){
        fetchWorkouts()
      }
    }, [dispatch,user])
  
    const getUser = (workout) => {
      console.log(workout)
    }
// block h-auto w-full overflow-hidden rounded-lg shadow-lg

  return (
    <div>
     <div className="shadow-lg border-4 border-cyan-400 p-6 rounded-xl text-xl font-bold max-w-sm my-5 mx-auto text-center font-serif md:max-w-lg">Add Your Daily Workouts</div>
    <div className='grid grid-col-1 md:grid-cols-2 md:gap-44 items-center '>     
    <div className='md:col-end-2 md:col-span-4'> 
        {workouts && workouts.map((workout) => (
               <WorkoutDetails key={workout._id} workout={workout} getUser={getUser}/>
        ))}                      
    </div>
    <div className="mx-6 md:mx-0">
    <TabWorkouts workout={workouts} getUser={getUser}/>
    </div>
       </div>
    </div>
  )
}

export default Workout