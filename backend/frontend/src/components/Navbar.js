import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import '../index.css';
import useLogoutContext from '../hooks/useLogoutContext';
import {useAuthContext} from '../hooks/useAuthContext'
import { useState } from 'react';

function Navbar() {
 const  {logout} = useLogoutContext()
 const {user} = useAuthContext()
 const [open,setOpen]=useState(false)
  const handleClick = ( ) => {
      logout()
  }


    return (
     <nav className='shadow md:flex md:items-center md:justify-between'>
      <div className='flex justify-between items-center mx-4 '>
           <span className='text-2xl font-[Poppins] cursor-pointer'>
            <img className='object-contain h-28 w-26 mt-0 md:w-96' src='./images/Fitneslogo.png' alt='' ></img>
           </span>
           <span onClick={()=>setOpen(!open)} className='text-3xl md:hidden block '>
           <ion-icon name={open ?  "close-outline" : "menu-outline"}></ion-icon>
           </span>
      </div>
      <ul className={`md:flex md:item-center  items-center md:justify-center  z-990 md:z-auto md:static absolute bg-gray-300 w-full left-0 md:w-auto md:bg-transparent 
      opacity-0 md:opacity-100 translate-all  ease-in text-center duration-500 ${open ? 'top-20 opacity-100':'top-[-400px]'}`}>
        <li className='mx-4  my-6 md:my-1 hover:bg-black md:hover:bg-transparent'>
        <Link to ="/">
              <h4 className='text-xl hover:text-gray-500 duration-500'>Home</h4>
        </Link>
        </li>
        <li className='hover:bg-black md:hover:bg-transparent mx-4 mt-1 my-6 md:my-1 items-center'>
        <Link to ="/about">
              <h4 className='text-xl hover:text-gray-500 duration-500'>About Us</h4>
             </Link>
             </li>
             <li className='mx-4 mt-1 my-6 md:my-1 hover:bg-black md:hover:bg-transparent'>
             <Link to ="workout">
              <h4 className='text-xl hover:text-gray-500 duration-500'>Workouts</h4>
             </Link>
             </li>
             <li className='mx-4 mt-1 my-6 md:my-1 hover:bg-black md:hover:bg-transparent'>
             <Link to ="/price">
              <h4 className='text-xl hover:text-gray-500 duration-500'>Pricing</h4>
             </Link>
             </li>
             <li className='mx-4 my-5 md:my-1 hover:bg-black md:hover:bg-transparent'>
            {!user && (
             <Link to ="/signup">
             {/* Join Here</Button> */}
              </Link>  
           )}
           </li>
           <li className='mx-4 my-3 md:my-0 '>
           {!user && (
             <Link to ="/signup">
             <Button>Join Here</Button> 
              </Link>  
           )}
            {user &&(<div>
            <span>{user.email}</span>
            <button className='logout' onClick={handleClick}>LOG OUT</button>
           </div>)}
           </li>
      </ul>
     </nav>
    )
} 

// const Logo = styled.a`
// margin-top: 34px;
// justify-content: center;
// align-items: center;
// //background-color: red;
// background-size: contain;
// `;

// const Nav = styled.nav`
// height: 75px;
// //background-color: red;
// display: flex;
// align-items: center;
// justify-content: space-between;
// margin: 0 auto;
// max-width: 1400px;
// padding: 10px 20px;
// z-index: 3;
// `;

// const NavMenu = styled.div`
// align-items: center;
// display: flex;
// gap: 30px;
// flex-flow: row nowrap;
// justify-content: space-between;
// margin: 0px auto;
// padding: 0px;
// position: relative;
// font-size: 19px;
// /* margin-right: auto;
// margin-left: 25px; */
// `;

const Button = styled.button`
background-color: black;
display: inline-block;
color: white;
padding: 10px 20px;
border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #363636;
    text-transform: uppercase;
  }
`

//<header className='flex  flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 py-2.5'>
    // <img className='object-contain h-28 w-96 mt-0' src='./images/Fitneslogo.png' alt='' height="140" ></img>
    // <div class="md:hidden flex items-center">
		// <button class="outline-none mobile-menu-button">
		// <svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
		// 					x-show="!showMenu"
		// 					fill="none"
		// 					stroke-linecap="round"
		// 					stroke-linejoin="round"
		// 					stroke-width="2"
		// 					viewBox="0 0 24 24"
		// 					stroke="currentColor"
		// 				>
		// 					<path d="M4 6h16M4 12h16M4 18h16"></path>
		// 				</svg>
		// 			</button>
		// 			</div> 
    //       <div class="hidden mobile-menu">
		// 		<ul class="">
    //     <Link className='active' to ="/">
    //          <h4>Home</h4>
    //         </Link>
    //         <Link className='class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"' to ="/">
    //          <h4>About Us</h4>
    //         </Link>
    //         <Link className='class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"' to ="workout">
    //          <h4>Workouts</h4>
    //         </Link>
    //         <Link className='class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"' to ="/">
    //          <h4>Pricing</h4>
    //         </Link>
		// 		</ul>
		// 	</div>
    //         <Link to ="/">
    //          <h4>Home</h4>
    //         </Link>
    //         <Link to ="/">
    //          <h4>About Us</h4>
    //         </Link>
    //         <Link to ="workout">
    //          <h4>Workouts</h4>
    //         </Link>
    //         <Link to ="/">
    //          <h4>Pricing</h4>
    //         </Link>
    //        {!user && (
    //          <Link to ="/signup">
    //          {/* Join Here</Button> */}
    //           </Link>  
    //        )}
    //         {user &&(<div>
    //         <span>{user.email}</span>
    //         <button className='logout' onClick={handleClick}>LOG OUT</button>
    //        </div>)}
        
    // </header>
export default Navbar