import React, { useState,useEffect } from 'react'
//import { useWorkoutContext } from '../hooks/useWorkoutContext';
import { useAuthContext } from '../hooks/useAuthContext'
//import WorkoutDetails from './WorkoutDetails';
import {useParams} from 'react-router-dom'
import axios from 'axios';

function WorkoutUpdate(props) {  
  const [error,setError] = useState(null)
  const [emptyfield,setEmptyfields] = useState([])  
  const  {user} = useAuthContext()
   
  //   const [title,setTitle] = useState("")
//   const [reps,setReps] = useState("")
//   const [load,setLoad] = useState("")
  const {id} = useParams();
  const [data,setData]= useState({
    title:"", 
    load:"",
    reps:""
  })

  
  // const handleSubmit = async (e) =>{
  //   e.preventDefault()
    
  //   const formData = new FormData();
  //   formData.append("title",title)
  //   formData.append("load",load)
  //   formData.append("reps",reps)
  //   formData.append("image",image)
    
  //   console.log("IMAGEEEEEEEEE",image);

  //  axios.post('/api/workouts/',formData,{
  //    data: JSON.stringify(formData),
  //     headers:{
  //       'Content-Type': 'multipart/form-data',
  //       'Authorization': `Bearer ${user.token}`
  //       }
  //   }).then((response) => {
  //     console.log("Data Incoming////",response.data)
  //           setLoad('')
  //           setTitle('')
  //           setReps('')
  //           setImage('')
  //           setError(null)
  //           setEmptyfields([])
  //     dispatch({type:'CREATE_WORKOUTS',payload:response.data})
  //     console.log('new workout added', response)
  //   })
  //   .catch((error) => {
  //     console.log("AXIOS ERROR: ", error);
  //     setError(error)
  //     setEmptyfields()
  //   })
  // }


//   const handleSubmit = async (e) => {
//       e.preventDefault()
//        const id = props.match.params.id
//        fetch('/api/workouts/' + id,{
//         method:'PATCH',
//         headers: {
//           'Authorization': `Bearer ${user.token}`
//         },
//         body:JSON.stringify(props)
//       }).then((r) =>{
//         console.log(r.data) 
//         setData(r.data)
//     }).catch(err=>console.error(err));
//  }

// const Submit = async (e) =>  {
//         e.preventDefault()
//        setTitle(localStorage.getItem('title'))    
//        setLoad(localStorage.getItem('load'))    
//        setReps(localStorage.getItem('reps'))    
//       }
      
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData()
  }
  
//  const loaduser = async ()=> {
//     const response = await fetch(`/api/workouts/${id}`, {
//         headers: {
//           'Authorization': `Bearer ${user.token}`
//         }
//       });
//       const json = await response.json();
//       console.log(json);
//       setData(json)
//   }

//   useEffect(() => {
//     loaduser()
//   },[])
  return (
    <form  className="border-4 border-slate-400 p-6 rounded-xl shadow-lg" > 
        <h3 className='text-lg text-center font-bold bg-gray-300 rounded border-4'>Update a Workout</h3>
        <label className='font-semibold text-lg'>Excersize Title:</label>
        <input type="text"onChange={(e)=> handle(e)}  value={data.title}></input>
        <label className='font-semibold text-lg'>Load (in Kg):</label>
        <input type="number" onChange={(e)=> handle(e)} value={data.load}></input>
        <label className='font-semibold text-lg'>Reps:</label>
        <input type="number" onChange={(e)=> handle(e)} value={data.reps}></input>
        <button type="button" className="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out">Update Workout</button>
         {error &&  <div className='Error'>{error}</div>}
    </form>
    
  )
}

export default WorkoutUpdate