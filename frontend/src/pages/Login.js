import {React,useState} from 'react'
import useLoginContext from '../hooks/useLoginContext'
import {Link} from 'react-router-dom'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {logins,isLoading,error} = useLoginContext()
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("////////////",e.error)
        await logins(email,password)
    }

  return (
    <div className="md:p-40 p-10  items-center justify-center flex">
       <form  className='border-4 border-slate-400 p-6 rounded-xl shadow-lg md:w-96' onSubmit={handleSubmit}>
        <h3 className='text-lg text-center font-bold bg-gray-300 rounded border-4'>Login</h3>
        <label className='font-semibold text-lg'>Email:</label>
        <input  type="email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
        <label className='font-semibold text-lg'>Password:</label>
        <input  type="password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
      <button className='inline-block px-8 py-2.5 bg-green-500 text-white flex mx-auto font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out' >Login</button>
      <Link to ="/signup"><h4 className='font-semibold text-lg text-center mt-4'>Create New Account!</h4></Link>
     {error && <div className='Error'>{error}</div>}
     </form>
  
    </div>
       )
}

export default Login