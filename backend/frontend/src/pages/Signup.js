import {React,useState} from 'react'
import {Link} from 'react-router-dom'
import useSignupContext from '../hooks/useSignupContext'
function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup,isLoading,error} = useSignupContext()
    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(email,password)
    }

  return (
    <div className="md:p-40 p-10  items-center justify-center flex">
    <form  className='border-4 border-slate-400 p-6 rounded-xl shadow-lg md:w-96' onSubmit={handleSubmit}>
        <h3 className='text-lg text-center font-bold bg-gray-300 rounded border-4'>Sign up</h3>
        <label className='font-semibold text-lg'>Email:</label>
        <input  type="email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
        <label className='font-semibold text-lg'>Password:</label>
        <input  type="password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
      <button className='inline-block px-6 py-2.5 bg-orange-500 text-white flex mx-auto font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out' disabled={isLoading}>Sign up</button>
      <Link to ="/login"><h4 className='font-semibold text-lg text-center mt-4'>Already have an account?</h4></Link>
      {error && <div className='Error'>{error}</div>}
     </form>
    </div>
     
    )
}

export default Signup