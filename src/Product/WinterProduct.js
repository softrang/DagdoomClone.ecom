import React from 'react'
import { Link } from 'react-router-dom';
import { useDeta } from '../Context/ShareDeta';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Product from './Product';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
gsap.registerPlugin(ScrollTrigger);

const WinterProduct = () => {

    useGSAP(() => {
        gsap.from(".pbox", {
            y: 50,
            opacity: 0,
          
            duration: 1,
            stagger: 0.3,
            
             
             
            
        });
      }, []);
    
      const { deta7 } = useDeta();
        
  return (
    <>  
    <Header/>
    <div className='App h-max  flex flex-wrap bg-zinc-50 '>
    {deta7.map((items, index)=>(
         <Link 
         key={index} 
         to={`/products/${items.title}`} 
         state={{ item:items , allDeta: deta7 }}
        >
       <Product deta={items}/>

     </Link>
     ))}
    </div>
    <Footer/>

    </>
  )
}

export default WinterProduct
