import React, { useState } from 'react'
import Product from './Product'
import ReactPaginate from 'react-paginate';
import { useDeta } from '../Context/ShareDeta';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';

const Page4 = () => {
    gsap.registerPlugin(ScrollTrigger);
    const { deta, deta1, deta2, deta3, deta4, deta5, deta6, deta7, deta8, deta9, deta10 } = useDeta();
    const TotalDeta = [ ...deta10, ...deta, ...deta1, ...deta9, ...deta2, ...deta3, ...deta8, ...deta4, ...deta5, ...deta7, ...deta6 ]
  
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage =12
   
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = TotalDeta.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(TotalDeta.length / itemsPerPage);



    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % TotalDeta.length;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
      };

      useGSAP(() => {
        gsap.from(".box4", {
            y: 50,
            opacity: 0,
          
            duration: 1,
            stagger: 0.1,
            scrollTrigger:{
              trigger:".box4",
              scroller:"body",
            
              start: "top 100%",
              end:"top 90%",
              yoyo: true,
              scrub:true,
      
            }
         
        });
      }, []);
    
      useGSAP(() => {
        gsap.from(".box44", {
            x: "100%",
            opacity: 0,
          
            duration: 1,
            stagger: 0.1,
            scrollTrigger:{
              trigger:".box44",
              scroller:"body",
             
              start: "top 100%",
              end:"top 90%",
              yoyo: true,
              scrub:true,
      
            } 
        });
      }, []);
      useGSAP(() => {
        gsap.from(".pbox", {
            y: 50,
            opacity: 0,
          
            duration: 1,
            stagger: 0.3,
            scrollTrigger:{
              trigger:".pbox",
              scroller:"body",
            
              start: "top 100%",
              end:"top 90%",
              yoyo: true,
              scrub:true,
      
            }
           
        });
      }, []);

  return (
    <>  
    <div className='box4 w-full bg-zinc-100 h-max overflow-hidden '>
      
  
    
      <h1 className='box44 text-black text-2xl italic py-2 px-5 '> জনপ্রিয় সকল প্রোডাক্ট </h1>
   <div className='w-full h-max flex flex-wrap bg-stone-100'> 
    
            {currentItems.map((items, index) => (

              <Link 
                key={index} 
                to={`/products/${items.title}`} 
                state={{ item: items, allDeta: currentItems }}
                >
                <Product deta={items} />
                </Link>


              ))}
                
 </div>
     
      



     </div>
     <div className=' flex justify-center items-center py-8 bg-pink-50'> 
        <ReactPaginate
          breakLabel=".............."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={4}
          containerClassName="pagination flex   justify-center items-center" // Custom class for styling
          pageClassName="page-item flex justify-center items-center" // Custom class for each page item
          pageLinkClassName="page-link  px-5 py-2 border-2 border-bg-sky-800" // Custom class for each page link
          previousClassName="page-item px-5 py-2 border-2 border-bg-sky-300" // Custom class for previous button
          nextClassName="page-item px-5 py-2 border-2 border-bg-zinc-200 " // Custom class for next button
          previousLinkClassName="page-link " // Custom class for previous link
          nextLinkClassName="page-link " // Custom class for next link
         // breakClassName="page-item" // Custom class for break item
         // breakLinkClassName="page-link" // Custom class for break link
          activeClassName="active bg-red-700 z-50 text-white" // Custom class for active page
        />
        </div>

        </>
  )
}

export default Page4
