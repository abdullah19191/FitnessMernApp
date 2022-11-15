import React, { useState } from 'react'
import WorkoutForm from './WorkoutForm';
import WorkoutUpdate from './WorkoutUpdate';



function TabWorkouts({workout, getUser}) {
  const [toggle,setToggle] = useState(1);
  const [data,setData] = useState(1);
  
  const toggleTab = (index) => {
   setToggle(index)
  }
  
  const getworkouts = (details) => {
    console.log(details);
     setData(details)
  }
    
    return (    
        <div className=''>
               <div className="workout-tabs">
            <button className={toggle === 1 ? " tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>New Workout</button>
            <button className={toggle === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Update</button>
               </div> 
        <div className="content-tabs">
        <div className={toggle === 1 ? "content  active-content" : "content"}>
          <WorkoutForm/>
        </div>
        <div className={toggle === 2 ? "content  active-content" : "content"}>
        <WorkoutUpdate />
        </div>
                </div>
        </div>
      )
}

export default TabWorkouts