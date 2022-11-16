import React from 'react'
import { priceData } from '../components/pricingdata'

function Price() {
  return (    

   <div className="Price">
    <div className="font-mono  text-sm sm:text-2xl lg:text-6xl md:text-4xl font-Norms justify-center items-center flex my-20 gap-10 stroke-cyan-500">
        <span className='text-gray-900 font-bold italic'>READY TO START</span>
        <span className='font-bold italic'>YOUR JOURNEY</span>
        <span className='text-gray-800 font-bold italic'>WITHUS</span>
    </div>   

    {/* Pricing Plans */}
        <div className="grid lg:grid-cols-3 lg:gap-8 py-22 max-w-7xl mx-auto px-4 sm:px-6 gap-12" >
            {priceData.map((plan)=> (
                <div key={plan.title} className="flex relative border border-slate-200 p-8 shadow-lg bg-white rounded-2xl flex-col">
                    <h3 className='text-lg font-semibold leading-5'>{plan.title}</h3>
                    {plan.mostpopular && <p className='absolute top-0 -translate-y-1/2 bg-cyan-500 text-white px-3 py-0.5 
                    text-sm font-semibold tracking-wide rounded-full shadow-md'>Most Popular</p>}
                    <p className='mt-2 text-md text-slate-700 leading-6'>{plan.description}</p>
                    <div className="mt-4 bg-slate-50 rounded-lg p-6 -mx-6">
                        <p className="flex text-sm font-semibold text-slate-500 items-center">
                        <span>{plan.currencey}</span>
                        <span className='ml-2  text-3xl text-slate-700'>${plan.price}</span>
                        <span className='ml-1.5'>{plan.frequency}</span>
                        </p>
                    </div>

                     {/* Features */}
                     <ul className='mt-6 space-y-4 flex-1'>
                     {plan.features.map(feature =>(
                        <li key={feature} className="text-md text-slate-700 leading-6 flex">
                            <ion-icon name="checkmark-sharp" color="secondary" ></ion-icon>
                            <span className='ml-3'>{feature}</span>
                            </li>
                     ))}   
                     </ul>

                     {/* Call To Action Button */}
                     <a href="#loool" className={` mt-8 block px-6 py-4 text-md font-
                     font-semibold text-center rounded-lg leading-4 
                     ${
                        plan.mostpopular?'text-white bg-cyan-500 hover:bg-cyan-600 shadow-lg':'text-cyan-700 bg-cyan-50 hover:bg-cyan-100 shadow-lg'
                     }
                     `}>{plan.cta}</a>
                    </div>
            ))}
        </div>
   </div>
  )
}

export default Price