import React from 'react'

const Fproduct2 = ({deta}) => {
  return (
    <div className = " box33 min-w-56 h-52 bg-red-300  relative scale-90 shadow-lg ">
    <img className='w-full h-full absolute' src= {deta.image} alt='' />
    <div className='w-full h-16  absolute bottom-0  flex justify-between items-center text-white'> 
      <div className='w-14 h-14 bg-sky-600 text-center rounded-full scale-90 leading-5 flex justify-center items-center'> {deta.ps} <br/> off </div>
      <div className='w-18 py-1 bg-zinc-900 px-3 rounded-s-full '> {deta.prise}  </div>
    </div>
  
  </div>
  )
}

export default Fproduct2
