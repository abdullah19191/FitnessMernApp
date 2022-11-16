import React from 'react'
import styled from 'styled-components';
import '../index.css';


function Home() {
  return (
      <section className='h-auto'>
     <img className='mx-auto  my-10 h-auto md:h-screen' src='/images/Fitimg.png' alt=''></img>
       <hr  className='border-2 border-white my-4 mx-8 md:mx-16'></hr>
      {/* <Btimg> */}
      <div className="md:flex justify-center">
      <img  className='object-contain mt-6 h-52 w-96 mx-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl' src='/images/puma.png'  
           alt=''></img>
        <img className='object-contain mx-auto w-48 h-42 md:h-56 transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl' src='/images/nike.png'  
           alt=''></img>
        <img className='object-contain mx-auto w-48 h-42 md:h-56 transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl' src='/images/asics.png' 
           alt=''></img>
        <img className='object-contain mx-auto w-48 h-42 md:h-56 transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl' src='/images/basketball.png'   
           alt=''></img>
        <img className='object-contain mx-auto w-48 h-42 md:h-56 transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl' src='/images/adidas.png'  
           alt=''></img>
      </div>
      </section>
  )
}                                                    

// const Btimg = styled.div`
// display: flex;
// justify-content: space-between;
// `;

{/* const Image = styled.div`
      height: 100%;
      margin: 0 auto;
      justify-content: center;
      //max-width: 300%;
      width: auto;
      background-size: contain;
      background-image: url("/images/fit.png");
      background-repeat: no-repeat;
      background-position: center;      
`; */}


const Wrapper = styled.section`
    height:75vh;
`;
export default Home