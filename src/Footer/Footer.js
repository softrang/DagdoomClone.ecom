import React from 'react'
import Pay from "../assets/payment/pay.jpg"
import Patha from "../assets/payment/patha.jpg"
import Ec from "../assets/payment/ec.jpg"

const Footer = () => {
  return (
    <div className='App h-96 bg-white text-black '>  
    <div className='w-full h-80 bg-white flex gap-6 px-5 py-3 text-xl capitaliz'>
        <div className='w-5/12 h-full'>
            <h1 className='text-2xl font-bold'>Pyment Information</h1> <br/>
            <img className='w-10/12' src= {Pay} alt=''/>
            <h3 className='font-bold text-lg leading-10'>Our Partners </h3>
            <div className='w-full h-10 flex'> 
            <img className='w-1/4' src= {Patha} alt=''/>
            <img className='w-1/4' src= {Ec} alt=''/>

            </div>
            <h4 className='text-base leading-10'> Subscribe to our newsletter to receive special offers!</h4>
            <div className='w-10/12 h-10 flex rounded-lg overflow-hidden'>
                <input className='w-full h-10 bg-zinc-100 px-5 outline-none ' type="search" placeholder='E-mail Addres Heare'/>
                <button className='w-24 h-10 bg-yellow-400'>Send</button>
            </div>
        
        
        </div>
        <div className='w-3/12 h-full'> 
            <h1 className='text-xl font-bold'> Information </h1><br/>
            <ul className='leading-7 text-sm'>
                <li>About Us</li>
                <li>Delivary & Payment</li>
                <li>Riplace & Refund</li>
            </ul>


        </div>
        <div className='w-2/12 h-full'>
            <h1 className='text-xl font-bold'> Top Catagory </h1> <br/>
            <ul className='leading-7 text-sm'>
                <li>গ্রহস্থলী পণ্য</li>
                <li>সামার কালেকশন</li>
                <li>ফ্যাশন</li>
                <li>উন্টার কালেকশন</li>
            </ul>
        </div>
        <div className='w-4/12 h-full text-center'> 
            <h1 className='text-xl font-bold'> Office Address </h1><br/>

            <p className='text-sm'>189/A (1st Floor) Hazi Moron Ali Road
            Tejgoan Dhaka, Bangladesh</p>
            <br/>
            <h2 className='text-sm'>Help Line: 09636-500700</h2>
        </div>
      
    </div>
    <div className='w-full h-12 flex justify-center items-center bg-zinc-200 mt-4 text-lg'>
    Copyright &copy; 2020 | dagdoom.com.bd
    </div>
   
    </div>
  )
}

export default Footer
