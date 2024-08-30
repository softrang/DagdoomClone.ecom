import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Product from './Product'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
gsap.registerPlugin(ScrollTrigger);
const ProductDetails = () => {

  useGSAP(() => {
    gsap.from(".dbox", {
        x: -100,
        opacity: 0,
      
        duration: 1,
        stagger: 0.3,
        
         
         
        
    });
  }, []);



 
  const {item, allDeta} = useLocation().state
  const subDeta= allDeta.filter(obj => obj.image !== item.image)

  const [count, setCount] = useState(1);

  
  const Increment = () => {
    setCount(count + 1);
  };

  const Dicrement = () => {
    setCount(count - 1);
  };


  return (
    <>  
    <Header/>
    <div className='App h-max bg-white flex mt-2'>
    <div className='dbox w-1/2 h-full '>
    <div className='w-7/12  h-7/12 m-auto shadow-md shadow-slate-950 mt-20 rounded-md overflow-hidden'> 
     <img className='w-full h-full' src={item.image} alt=''/> 
     
     </div>
     </div>
 

    <div className='w-1/2 h-full bg-white'>
    <h1 className='text-xl px-2 text-black '> {item.title} </h1>
    <h1 className='text-sm px-2 text-green-600 font-bold'> Stock: {item.stock} </h1>
    <h1 className='text-lg px-2 text-pink-700 font-bold'> Prise: {item.prise} </h1>
    <div className='w-full h-44 bg-white text-black flex p-2'> 
      <div className='w-1/2 h-full'> 
        <h1 className=' w-48    bg-green-500 text-white rounded-full flex justify-center items-center'> Product Code:&nbsp; {`${item.code}`} </h1>
     <div className='w-full h-max flex mt-2'> 
      <h1 className='leading-6 mt-2'> পরিমাণ : </h1>
      <button onClick={Dicrement} className='w-12 h-10 border-2 border-green-200 text-3xl  ml-2'>-</button>
      <button className='w-12 h-10 border-2 border-green-200 text-3xl '>{count}</button>
      <button onClick={Increment} className='w-12 h-10 border-2 border-green-200 text-3xl '>+</button>

     </div>
     
      </div>

      <div className='w-1/2 h-full'> 
        <button className='w-full  bg-blue-800  text-white text-2xl py-2 shadow-lg shadow-slate-600 rounded-md'> অর্ডার করুন </button>
        <button className='w-full  bg-orange-400 text-2xl py-2 mt-5 shadow-lg shadow-neutral-600 rounded-md'> কার্ট-এ যোগ করুন </button>

      </div>


    </div>
<div className='w-full h-max bg-white px-3'>
<h1 className='text-2xl text-red-500 font-bold ml-2'> ফোনে অর্ডারের জন্য ডায়াল করুন </h1> <br/>
<ul className='w-11/12 h-max text-red-500 text-3xl font-bold ml-7'>
  <li> 01312-666303 </li>
  <li> 01973-309020 </li>
  <li> 01943-688199 </li>
</ul>
<table className='text-black w-full mt-5 mb-14' >
  <tbody> 
  <tr className='border-t-2 border-zinc-300 h-10 '>
    <td className='px-5'>ঢাকায় ডেলিভারি খরচ</td>
    <td className='text-left  w-4/12'>$ 80</td>
  </tr>
  <tr className='border-t-2 border-zinc-300 h-10 '>
    <td className='px-5'>ঢাকার বাইরের কুরিয়ার খরচ</td>
    <td className='text-left  w-4/12'>$ 100</td>
  </tr>
  <tr className='border-t-2 border-zinc-300 h-10 '>
    <td className='px-5'>ঢাকার বাইরের হোম ডেলিভারি খরচ</td>
    <td className='text-left  w-4/12'>$ 150</td>
  </tr>
  <tr className='border-t-2 border-zinc-300 h-10 '>
    <td className='px-5'>ঢাকার বাইরের ১৫০ টাকা অগ্রিম প্রদান করতে হবে।</td>
    
  </tr>
  <tr className='border-t-2 border-zinc-300 h-10 '>
    <td className='px-5'>বিকাশ মার্চেন্ট নাম্বার</td>
    <td className='text-left  w-4/12'>01309-806797</td>
  </tr>
  </tbody>
</table>
 </div>


     </div>
   
    
  </div>
  <div className='App h-max bg-white border border-blue-500 mb-5 mt-5'> 
    <h1 className='px-2 py-3 text-black text-3xl'>পন্যের বিবরণ</h1> 
    <div className='w-full h-max  text-black p-5 text-xl leading-10 border-t border-blue-500'
    dangerouslySetInnerHTML={{ __html:item.reproduct }}
          > 
  
   </div>
   </div>
   <div className='App h-max bg-white border border-blue-500 mb-5'> 
    <h1 className='px-2 py-3 text-black text-2xl'> রিলেটেড প্রোডাক্ট </h1> 
    <div className='w-full h-max bg-zinc-100 text-black  text-xl leading-10 border-t border-blue-500 flex flex-wrap gap-3 justify-center itmes-center'> 
 
    {subDeta.map((items, index) => (

   
<Link 
key={index}
to={`/products/${items.title}`} 
state={{ item:items , allDeta: allDeta }}
>
<Product   deta={items}/>

</Link>
))}
  
   </div>

   </div>
<Footer/>
   
   </>
  )
}

export default ProductDetails
