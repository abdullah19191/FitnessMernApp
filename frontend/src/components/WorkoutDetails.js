import {React} from 'react'
import '../index.css'; 
import {useAuthContext} from '../hooks/useAuthContext'
import { useWorkoutContext } from '../hooks/useWorkoutContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'




function WorkoutDetails({workout, getUser},props) {
  const {dispatch} = useWorkoutContext()
  const {user} = useAuthContext()


  const handleClick = async() =>{   
     if(!user){
      return 
     }       
      const response = await fetch('/api/workouts/' + workout._id,{
        method:'DELETE' ,
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()
      if(response.ok) {
           dispatch({type:'DELETE_WORKOUT',payload: json})
      }
  }
  return (  
    <div className=" lg:max-w-full lg:flex md:mx-10 md:my-10 container my-12 mx-auto px-4 md:px-12 ">
    <img src= {`/uploads/${workout.image}`}  className=" border-cyan-500 border-8 md:h-48 lg:h-56 md:w-auto bg-gray-700 lg:w-68 flex-none md:bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden block h-auto w-full rounded-lg shadow-lg" alt=""/>
      <div className="border-cyan-500 border-4 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-0 ">
          <p className="text-sm text-gray-600 flex items-center ">
          <img src= {`/uploads/${workout.image}`} className="fill-current text-gray-500 w-3 h-3 mr-2" alt=""/>
            Members only
          </p>
          <div className="p-2 md:p-2 md:mt-2 text-md bg-gray-200 flex flex-col items-center">
          <h1 className='text-xl font-mono'><strong>Title:</strong> {workout.title}</h1>
          <p className='text-xl font-mono'><strong>Load (kg):</strong> {workout.load}</p>
          <p className='text-xl font-mono'><strong>Reps:</strong> {workout.reps}</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-xl md:jutify-evenly">
        <ion-icon name="trash-outline" onClick={handleClick} className='cursor-pointer'></ion-icon>          
        <div className="items-center mt-2">
          <ion-icon name="refresh" onClick={() => getUser(workout)}></ion-icon>
          </div>
        </div>
        <p className='text-sm'>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
      </div>
    </div>
  )
}
 
export default WorkoutDetails

{/* <img src= {`/uploads/${workout.image}`} alt="" />
        <h3 className='text-3xl font-bold'>{workout.title}</h3>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Reps: </strong>{workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
        <span onClick={handleClick}>Delete</span>
        <span className='update' onClick={() => getUser(workout)}>Update</span> */}
     


    // <div className="my-10 mx-10 md:mx-20 lg:mx-62 flex flex-col  bg-white rounded-lg border shadow-md lg:flex-row md:max-w-auto hover:bg-gray-100">
    //     <img src= {`/uploads/${workout.image}`} className="thumbnail bg-slate-600 mr-auto" alt=""/>
    //     <div className="flex flex-col justify-between p-4 leading-normal">
    //     <div className="font-bold  top flex flex-col justify-between mx-2" >
    //     <h1>Title:{workout.title}</h1>
    //     <p>Load (kg):{workout.load}</p>
    //     <p>Reps:{workout.reps}</p>
    //     <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
    //       </div>
    //       <div className="bottom flex justify-between mx-2">
    //       <ion-icon name="trash-outline"></ion-icon>
    //       <ion-icon name="refresh"></ion-icon>
    //       </div>
    //     </div>
    // </div>


  // const selectUser = () => {
  //    console.warn("function called",workout)
  //    localStorage.setItem('title',workout.title)
  //    localStorage.setItem('load',workout.load)
  //    localStorage.setItem('reps',workout.reps)
  //   }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //    let updateWorkout={title,load,reps}
  //    console.log(updateWorkout)
  //    fetch('/api/workouts/' + workouts._id,{
  //     method:'PATCH',
  //     headers: {
  //       'Authorization': `Bearer ${user.token}`
  //     },
  //     body:JSON.stringify(updateWorkout)
  //   }).then((r)=> {r.json().then((resp)=>{console.log(resp)})});}

  // const selectuser = () =>[
  //   console.log("Function called: ",workout)
  // ]
