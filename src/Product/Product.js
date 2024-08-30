import React from 'react'

const Product = ({deta}) => {
  return (
    <div className='pbox w-56 h-80 bg-white scale-90 drop-shadow-xl relative text-black'>
        <img className='w-full mb-2' src={deta.image} alt=''/>
        <p className='px-4 text-center leading-5 '>{deta.title}</p>
        <p className='px-4  text-red-500 font-bold text-lg absolute bottom-2'>{deta.prise}</p>
      
    </div>
  )
}

export default Product
