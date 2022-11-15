import React, { useState } from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext';
import { useAuthContext } from '../hooks/useAuthContext'
import axios from 'axios';


function WorkoutForm() {

  const {dispatch} = useWorkoutContext()
  const {user} = useAuthContext()
  const [title,setTitle] = useState('')
  const [load,setLoad] = useState('')
  const [reps,setReps] = useState('')
  const [image,setImage] = useState('')
  const [error,setError] = useState(null)
  const [emptyfield,setEmptyfields] = useState([])  
  console.log(image,12)

  const handleSubmit = async (e) =>{
    e.preventDefault()
    
    const formData = new FormData();
    formData.append("title",title)
    formData.append("load",load)
    formData.append("reps",reps)
    formData.append("image",image)
    
    console.log("IMAGEEEEEEEEE",image);

   axios.post('/api/workouts/',formData,{
     data: JSON.stringify(formData),
      headers:{
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${user.token}`
        }
    }).then((response) => {
      console.log("Data Incoming////",response.data)
            setLoad('')
            setTitle('')
            setReps('')
            setImage('')
            setError(null)
            setEmptyfields([])
      dispatch({type:'CREATE_WORKOUTS',payload:response.data})
      console.log('new workout added', response)
    })
    .catch((error) => {
      console.log("AXIOS ERROR: ", error);
      setError(error)
      setEmptyfields()
    })
  }
  
  
  

  return (
    <form  className="shadow-lg border-4 border-slate-400 p-6 rounded-xl" onSubmit={handleSubmit} encType="multipart/form-data">
        
        <h2 className='text-lg text-center font-bold bg-gray-300 rounded border-4'>Add New Workout</h2>
        <label className='font-semibold text-lg'>Excersize Title:</label>
        <input type="text"onChange={(e)=> setTitle(e.target.value)}  value={title}  className={emptyfield.includes('title')?'error':''}></input>
    
        <label className='font-semibold text-lg'>Load (in Kg):</label>
        <input type="number" onChange={(e)=> setLoad(e.target.value)} value={load}   className={emptyfield.includes('load')?'error':''}></input>
        
        <label className='font-semibold text-lg'>Reps:</label>

        <input type="number" onChange={(e)=> setReps(e.target.value)} value={reps}    className={emptyfield.includes('reps')?'error':''}></input>
        <input onChange={(e) => setImage(e.target.files[0])} type="file" filename="image"/>
        <button  className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Add Workout</button>

         {error &&  <div className='Error'>{error}</div>}
    </form>

    
  )
}

export default WorkoutForm




// const handleSubmit = async (e) => {
//   e.preventDefault()
  
//   if(!user){
//     setError('You must be logged in')
//     return
//   }
  
//   const formData = new FormData();
//   formData.append("title",title)
//   formData.append("load",load)
//   formData.append("reps",reps)
//   formData.append("image",image)
//   const workout  =  {title,load,reps};
  
//  const usersName = JSON.stringify(formData);
//  const customConfig = {
//   headers: {
//   'Content-Type': 'application/json',
//   'Authorization': `Bearer ${user.token}`
//   }
// };
// const result = await axios.post('/api/workouts/',formData, usersName, customConfig);
 
// let reqInstance = axios.create({
//     headers: {
//       'Content-Type':'application/json',
//       'Authorization': `Bearer ${user.token}`
//       }
//     })
  
//     const result = await reqInstance.post('/api/workouts/',formData)
     
//   const response = await fetch('/api/workouts/',{
//       method:'POST',
//       body: JSON.stringify(workout),
//       headers: {
//           'Content-Type':'application/json',
//           'Authorization': `Bearer ${user.token}`
//       }
//   })
  
//     const json = await response.json() 

//     const json = await result.json() 

//     if(!result.ok){
//       setError(json.error)
//       setEmptyfields(json.emptyfield)
//     }

//     if(result.ok){
//       setLoad('')
//       setTitle('')
//       setReps('')
//       setError(null)
//       setEmptyfields([])
//       dispatch({type:'CREATE_WORKOUTS',payload:json})
//       console.log('new workout added', json)
//     }
//  }