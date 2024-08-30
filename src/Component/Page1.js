import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Slider from './Slider'
import Pic1 from "../assets/slider/pic1.jpeg"
import Pic2 from "../assets/slider/pic2.jpg"
import Pic3 from "../assets/slider/pic3.jpg"
import { Link } from 'react-router-dom';

const Page1 = () => {

    const indexRef = useRef(0);
    const intervalIdRef = useRef(null);
  
    useEffect(() => {
      const Slider = document.querySelectorAll('.slide');
  
      const startSlide = () => {
        intervalIdRef.current = setInterval(() => {
          indexRef.current++;
          Slider.forEach((slide, i) => {
            slide.style.transition = 'transform 0.7s ease-in-out';
            slide.style.transform = `translateX(-${100 * indexRef.current}%)`;
          });
  
          if (indexRef.current >= Slider.length-1) {
            setTimeout(() => {
              Slider.forEach((slide) => {
                slide.style.transition = 'none';
                indexRef.current = 0;
                indexRef.current--;
                slide.style.transform = `translateX(-${100 * indexRef.current}%)`;
              });
            }, 700);
          }
        }, 4000);
      };
  
      startSlide();
  
      return () => {
        clearInterval(intervalIdRef.current); 
      };
  
  
  
  
    }, []);


    useGSAP(() => {
        gsap.from(".box li", {
          x:"-100%",
          delay:0.5,
          duration:1,
          stagger:0.1
        })
    }, );





  return (
    <div className='w-full h-96 bg-white flex '>
      <div className='w-3/12 h-full  px-1 flex justify-center items-center'>
        <ul className=' box w-full h-max bg-white text-md overflow-hidden'>
        <Link to="/grehoproduct">  <li className='bg-sky-500 w-full px-5 py-1 text-white mb-px'>
            <i className='fa-regular fa-hand-point-right'></i> &nbsp; গ্রহস্থলী পণ্য
          </li>
          </Link> 
          <Link to="/babyandkids" >  
          <li className='bg-sky-500 w-full px-5 py-1 text-white mb-px'>
            <i className='fa-regular fa-hand-point-right'></i> &nbsp; বেবি এবং কিডস
          </li>
          </Link>
          <Link to="/boyshoping">  
          <li className='bg-sky-500 w-full px-5 py-1 text-white mb-px'>
            <i className='fa-regular fa-hand-point-right'></i> &nbsp;  ছেলেদের ফ্যাশন
          </li>
          </Link>
          <Link to ="/winterproduct"> 
          <li className='bg-sky-500 w-full px-5 py-1 text-white mb-px'>
            <i className='fa-regular fa-hand-point-right'></i> &nbsp; উন্টার কালেকশন
          </li>
          </Link>
          <Link to="/securityproduct">  
          <li className='bg-sky-500 w-full px-5 py-1 text-white mb-px'>
            <i className='fa-regular fa-hand-point-right'></i> &nbsp; সিকউরিটি গেজেটস
          </li>
          </Link>


          <Link to ="/gezetproduct">  
          <li className='bg-sky-500 w-full px-5 py-1 text-white mb-px'>
            <i className='fa-regular fa-hand-point-right'></i> &nbsp; মোবাইল ও গেজেট
          </li>
          </Link>
          <Link to="/wacthproduct"> 
          <li className='bg-sky-500 w-full px-5 py-1 text-white mb-px'>
            <i className='fa-regular fa-hand-point-right'></i> &nbsp; ঘড়ি
          </li>
          </Link>
          <Link to="/cosmiticproduct">  
          <li className='bg-sky-500 w-full px-5 py-1 text-white mb-px'>
            <i className='fa-regular fa-hand-point-right'></i> &nbsp; কসমিটিক্স
          </li>
          </Link>
          <Link to="/electricproduct"> 
          <li className='bg-sky-500 w-full px-5 py-1 text-white mb-px'>
            <i className='fa-regular fa-hand-point-right'></i> &nbsp; ইলেকট্রনিক্স পণ্য
          </li>
          </Link>

          <Link to="/helthproduct">  
          <li className='bg-sky-500 w-full px-5 py-1 text-white mb-px'>
            <i className='fa-regular fa-hand-point-right'></i> &nbsp; স্বাস্থ্য সুরক্ষার পণ্য
          </li>
          </Link>

          <Link to="/brandproduct">  
          <li className='bg-sky-500 w-full px-5 py-1 text-white'>
            <i className='fa-regular fa-hand-point-right'></i> &nbsp; ব্রান্ড পণ্য 
          </li>
          </Link>

         

        </ul>
      </div>
      <div className='slider w-11/12 h-full bg-zinc-400 flex overflow-hidden'>
        <Slider ime= {Pic1}/> 
        <Slider ime= {Pic2}/> 
        <Slider ime= {Pic3}/> 
        <Slider ime= {Pic3}/> 
       
    
      </div>
    </div>
  )
}

export default Page1
