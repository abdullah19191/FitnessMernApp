import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Workout from './pages/Workout';
import Signup from './pages/Signup';
import Login from './pages/Login';
import {useAuthContext} from './hooks/useAuthContext'
import WorkoutUpdate from './components/WorkoutUpdate';
import About from './pages/About';
import Price from './pages/Price';


function App() {
const  {user} = useAuthContext()
  
return (
    <div className="App">
        <BrowserRouter>
        <Navbar/> 
        <div className='pages'>
          <Routes>
           <Route
            path="/" 
            element={ user ? <Home/> : <Navigate to="/login"/>}
           />
           <Route
           path='/about'
           element = {<About/>}
           />
           <Route
           path='/price'
           element = {<Price/>}
           />
           <Route
           path='/workout'
           element = {<Workout/>}
           />
           <Route
            path="/signup" 
            element={!user ? <Signup/> : <Navigate to="/"/>}
           />
           <Route
            path="/login" 
            element={!user?<Login/> : <Navigate to="/"/>}
           />
           <Route
            path="/workoot/edit/:id" 
            element={<WorkoutUpdate/>}
            // element={!user?<Login/> : <Navigate to="/"/>}
           />
          </Routes>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
