import {  useAuthContext } from "./useAuthContext";
import { useState } from "react";


function useSignupContext() {
  const [error,setError] = useState(null)
  const [isLoading,setLoading] = useState(null)
  const {dispatch} = useAuthContext() 
  const signup = async (email,password) => {
    setLoading(true)
    setError(error)
       
    const response = await fetch('/api/user/signup',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email,password})
    })
    const json = await response.json()

    if(!response.ok){
        setLoading(false)
        setError(json.error)
    }
    if(response.ok){
        setError(null)
        // save the user to loacal storage
        localStorage.setItem('user', JSON.stringify(json))
        // update the auth context
       dispatch({ type:'LOGIN',payload:json})
        
       setLoading(false)
    }

}
    return {signup,isLoading,error}
}

export default useSignupContext