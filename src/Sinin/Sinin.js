import React from 'react'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'

const Sinin = () => {
  return (
    <div className='App h-max bg-zinc-100'>
      <Header/>
      
       <div className='w-full h-max  flex justify-center items-center'>
        
        <div className='w-1/2 h-96 bg-zinc-200 flex flex-col justify-center items-center px-5 mt-20 mb-32 rounded-xl shadow-xl shadow-slate-700'> 

        <h1 className='w-full text-left px-20   text-5xl font-serif bg-gradient-to-tr from-indigo-950 to-blue-500 bg-clip-text  font-bold text-transparent '> wellcome to  </h1>
        <h1 className='w-full text-right px-28 text-4xl font-serif mb-10 bg-gradient-to-br from-violet-950 to-indigo-700 bg-clip-text  font-bold text-transparent '>  Sin In Here </h1>
         <span className='w-full flex justify-center items-center mb-5'>  <label className=' bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text  font-bold text-transparent  px-5  font-mono text-2xl py-2 text-right'>User Name</label><input className='w-1/2 h-10  rounded-xl outline-none px-5 text-xl ml-5 shadow-lg shadow-stone-700' type='email' placeholder='Enter your email addres'/><br/></span>
         <span className='w-full flex justify-center items-center mb-10'>  <label className='bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text  font-bold text-transparent   px-5 font-mono text-2xl py-2 text-right'>Password  </label><input className='w-1/2 h-10  rounded-xl outline-none px-5 text-xl ml-5 shadow-lg shadow-stone-700 ' type='password' placeholder='Enter your email passowrd'/><br/></span>
<button className='w-1/4 h-12 bg-sky-400 rounded-xl text-2xl font-mono shadow-lg shadow-slate-600'> Sin In</button>
        </div>
       </div>
       <Footer/>
    </div>
  )
}

export default Sinin
