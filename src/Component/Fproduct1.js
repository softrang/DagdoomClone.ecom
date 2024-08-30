import React from 'react'

const Fproduct1 = ({deta}) => {
  return (
    <div className=' min-w-48 h-full  relative  shadow-lg'>
    <div className='w-full h-full scale-90'> 
    <img className='w-full h-full absolute' src=  {deta.image} alt=''/>
    <div className='w-full h-16  absolute bottom-0  flex justify-between items-center text-white'> 
      <div className='w-14 h-14 bg-sky-600 text-center rounded-full scale-90 flex justify-center items-center leading-5'> {deta.ps} <br/> off </div>
      <div className='w-18 py-1 bg-zinc-900 px-3 rounded-s-full '> {deta.prise} </div>
    </div>
    
    
    </div>
    </div>
  )
}

export default Fproduct1
