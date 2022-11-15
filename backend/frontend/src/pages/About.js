import React from 'react'

function About() {
    return (
        <div className="w-full bg-gradient-to-r from-[#EEE4DB] to-[#FAEFE4] ">
            <div className="text-black max-w-screen-lg p-4 flex flex-col text-center w-full h-full  mx-auto md:py-36 md:items-center bg-no-repeat bg-contain bg-center justify-center bg-opacity-25" style={{backgroundImage: `url('/images/gym.png')`}}>
            <div className="pb-8">
                <p  className='text-4xl font-bold inline border-b-4 border-red-700 text-center font-serif'>About</p>
            </div>
            <p className=' mt-10 text-xl font-mono'>
            No matter your age or athletic ability, strength training is the key to flexibility, mobility, improved performance and lower injury risk. Anyone, at any fitness level, can and should strength train. And it doesn't have to take hours at the gym to see results.
            </p>
            <br />
            <p className='text-xl font-mono'>
                Add Workouts accroding to your choice and perform exercises daily,
            Then take a one-minute break before moving onto set 2, in which the exercises should also be performed for one minute each.
           Ultimately, you’ll complete the whole workout, having completed nine minutes of training with two minutes of breaks in between.
             Do this workout two to three times a week for maximum benefits.<br/>
           <i>Ready to give it a try? Lace up your sneakers and let’s do it.!</i>
            </p>
            </div>
            </div>       
      )
}

export default About