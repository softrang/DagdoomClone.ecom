import React from 'react'
import Fproduct2 from './Fproduct2'
import { useDeta } from '../Context/ShareDeta'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';

const Page3 = () => {
    gsap.registerPlugin(ScrollTrigger);
    const { deta2} = useDeta()

    useGSAP(() => {
        gsap.from(".box2", {
            y: 50,
            opacity: 0,
          
            duration: 1,
            stagger: 0.1,
            scrollTrigger:{
              trigger:".box2",
              scroller:"body",
              
              start: "top 100%",
              end:"top 90%",
              yoyo: true,
              scrub:true,
    
            } 
        });
    }, []);
    
    
    
    useGSAP(() => {
      gsap.from(".box33", {
          y: 50,
          opacity: 0,
        
          duration: 1,
          stagger: 0.3,
          scrollTrigger:{
            trigger:".box33",
            scroller:"body",
           
            start: "top 100%",
            end:"top 80%",
            yoyo: true,
            scrub:true,
    
          } 
         
      });
    }, []);
    





  return (
    <div className='w-full h-max bg-purple-100 '>
 <div className=' box2 w-full h-16  flex justify-center items-center  '> <h1 className='text-2xl text-violet-800 w-full-h-full bg-purple-200 px-96 py-1 border-4 border-violet-400 font-bold'>নতুন ডিল কালেকশন </h1></div>
      
<div className=' box3 w-full h-max flex flex-wrap'> 

    
      
            {deta2.map((items, index) => (

                 <Link 
                key={index} 
                to={`/products/${items.title}`} 
                state={{ item: items, allDeta: deta2 }}
                >
                <Fproduct2 deta={items} />
                </Link>


            ))}

     
   </div>
    </div>
  )
}

export default Page3
