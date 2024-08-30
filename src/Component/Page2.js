import React, { useEffect, useRef } from 'react'
import Fproduct from './Fproduct'
import Fproduct1 from './Fproduct1'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useDeta } from '../Context/ShareDeta'
import Hot from "../assets/payment/hot.gif"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';

const Page2 = () => {
    gsap.registerPlugin(ScrollTrigger);
const {deta, deta1} = useDeta()

const [item1, item2, item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13] = deta;
const SubItem = [item1, item2, item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13]




console.log(deta)


const IndexRef = useRef(0);
  const IntervalIdRef = useRef(null);
  useEffect(() => {
    const Slide = document.querySelectorAll('.oa');

    const showSlide = () => {
      IntervalIdRef.current = setInterval(() => {
        IndexRef.current++;
        Slide.forEach((slider, i) => {
          slider.style.transition = 'transform 0.7s ease-in-out';
          slider.style.transform = `translateX(-${100 * IndexRef.current}%)`;
        });

        if (IndexRef.current >= Slide.length-7) {
          setTimeout(() => {
            Slide.forEach((slider) => {
              slider.style.transition = 'none';
              IndexRef.current = 0;
              IndexRef.current--;
              slider.style.transform = `translateX(-${100 * IndexRef.current}%)`;
            });
          }, 700);
        }
      }, 3500);
    };

    showSlide();

    return () => {
      clearInterval(IntervalIdRef.current); // Clean up on component unmount
    };
  }, []);

  useGSAP(() => {
    gsap.from(".box1", {
        y: 50,
        opacity: 0,
      
        duration: 1,
        stagger: 0.1,
        scrollTrigger:{
          trigger:".box1",
          scroller:"body",
         
          start: "top 100%",
          end:"top 95%",
          yoyo: true,
          scrub:true,

        } 
    });
}, []);


    
  return (
    <div className=' w-full h-max bg-pink-100 '>
    <div className='w-full py-1 flex justify-between items-center px-5'>
          <img src=  {Hot} alt=''/>
          <h2 className='text-red-600 text-xl'>সকল হট ডিল <i className="fa-solid fa-arrow-right-long"></i></h2>
          
           </div>
    <div className='w-full h-48 flex overflow-hidden '> 

   
                {SubItem.map((items, index) => (

                     <Link 
                    key={index} 
                    to={`/products/${items.title}`} 
                    state={{ item: items, allDeta: deta }}
                    >
                    <Fproduct deta={items} />
                    </Link>


            ))}

     
   

    </div>

    <div className=' box1 w-full h-48 flex'> 
    
    
            {deta1.map((items, index) => (

             <Link 
                key={index} 
                to={`/products/${items.title}`} 
                state={{ item: items, allDeta: deta1 }}
                >
                <Fproduct1 deta={items} />
                </Link>

            ))}
     
  
</div>


  </div>
  )
}

export default Page2
