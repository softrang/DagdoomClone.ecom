import React, { createContext, useContext } from 'react';
import G1 from "../assets/ghr/g1.jpg"
import G2 from "../assets/ghr/g2.jpg"
import G3 from "../assets/ghr/g3.jpg"
import G4 from "../assets/ghr/g4.jpg"
import G5 from "../assets/ghr/g5.jpg"
import G6 from "../assets/ghr/g6.jpg"
import G7 from "../assets/ghr/g7.jpg"
import G8 from "../assets/ghr/g8.jpg"
import G9 from "../assets/ghr/g9.jpg"
import G10 from "../assets/ghr/g10.jpg"
import G11 from "../assets/ghr/g11.jpg"
import G12 from "../assets/ghr/g12.png"
import G13 from "../assets/ghr/g13.png"
import G14 from "../assets/ghr/g14.jpg"
import G15 from "../assets/ghr/g15.jpeg"
import G16 from "../assets/ghr/g16.jpg"
import G17 from "../assets/ghr/g17.jpeg"
import G18 from "../assets/ghr/g18.jpeg"

import Bk1 from "../assets/bebyandkids/bk1.png"
import Bk2 from "../assets/bebyandkids/bk2.png"
import Bk3 from "../assets/bebyandkids/bk3.jpeg"
import Bk4 from "../assets/bebyandkids/bk4.jpeg"
import Bk5 from "../assets/bebyandkids/bk5.jpg"
import Bk6 from "../assets/bebyandkids/bk6.png"
import Bk7 from "../assets/bebyandkids/bk7.jpg"

import H1 from "../assets/helth/h1.jpg"
import H2 from "../assets/helth/h2.jpg"
import H3 from "../assets/helth/h3.jpeg"
import H4 from "../assets/helth/h4.jpg"
import H5 from "../assets/helth/h5.jpg"
import H6 from "../assets/helth/h6.jpeg"
import H7 from "../assets/helth/h7.jpeg"
import H8 from "../assets/helth/h8.jpeg"
import H9 from "../assets/helth/h9.jpg"
import H10 from "../assets/helth/h10.jpg"
import H11 from "../assets/helth/h11.jpg"
import H12 from "../assets/helth/h12.jpg"

import Bs1 from "../assets/boyshoping/Bs1.jpg"
import Bs2 from "../assets/boyshoping/Bs2.jpg"


import Br1 from "../assets/brand/Br1.png"
import Br2 from "../assets/brand/Br2.png"
import Br3 from "../assets/brand/Br3.jpeg"
import Br4 from "../assets/brand/Br4.jpg"

import Gz1 from "../assets/gazet/gz1.jpg"
import Gz2 from "../assets/gazet/Gz2.jpg"
import Gz3 from "../assets/gazet/gz3.jpg"
import Gz4 from "../assets/gazet/gz4.jpg"
import Gz5 from "../assets/gazet/gz5.jpg"
import Gz6 from "../assets/gazet/gz6.jpg"

import W1 from "../assets/watch/w1.jpg"
import W2 from "../assets/watch/w2.jpg"
import W3 from "../assets/watch/w3.jpeg"
import W4 from "../assets/watch/w4.jpeg"
import W5 from "../assets/watch/w5.jpeg"
import W6 from "../assets/watch/w6.jpg"
import W7 from "../assets/watch/w7.jpeg"
import W8 from "../assets/watch/w8.jpeg"
import W9 from "../assets/watch/w9.jpeg"
import W10 from "../assets/watch/w10.jpeg"
import W11 from "../assets/watch/w11.jpg"
import W12 from "../assets/watch/w12.jpg"
import W13 from "../assets/watch/w13.jpeg"


import Wi1 from "../assets/winter/wi1.jpeg"
import Wi2 from "../assets/winter/wi2.jpeg"
import Wi3 from "../assets/winter/wi3.jpg"
import Wi4 from "../assets/winter/wi4.jpg"
import Wi5 from "../assets/winter/wi5.jpg"
import Wi6 from "../assets/winter/wi6.jpg"

import S1 from "../assets/sceurity/s1.jpg"
import S2 from "../assets/sceurity/s2.jpeg"
import S3 from "../assets/sceurity/s3.jpeg"
import S4 from "../assets/sceurity/s4.jpg"
import S5 from "../assets/sceurity/s5.jpg"
import S6 from "../assets/sceurity/s6.jpg"

import C1 from "../assets/cosmitic/c1.jpeg"
import C2 from "../assets/cosmitic/c2.jpg"
import C3 from "../assets/cosmitic/c3.jpg"
import C4 from "../assets/cosmitic/c4.jpg"
import C5 from "../assets/cosmitic/c5.jpg"
import C6 from "../assets/cosmitic/c6.jpg"

import E1 from "../assets/electric/e1.jpeg"
import E2 from "../assets/electric/e2.jpg"
import E3 from "../assets/electric/e3.jpeg"
import E4 from "../assets/electric/e4.jpg"
import E5 from "../assets/electric/e5.jpg"
import E6 from "../assets/electric/e6.jpg"

const ShareDeta = createContext();

export const useDeta = () => useContext(ShareDeta);

export const DetaProvider = ({ children }) => {
    const deta = [

        {
           image: G1, prise:"$ 450", ps:"31%", code:"  01" , title:"পোর্টেবল ওয়েট স্কেল", stock:"Stock in" ,
           reproduct:` <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;   LCD ডিসপ্লে <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;পকেট সাইজ,<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;সহজে বহনযোগ্য <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;যে কোন বস্তু হুকে ঝুলিয়ে মাপা যায় <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;১০ গ্রাম হতে ৫০ কেজি পর্যন্ত ওজন মাপা যায় <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;আউন্স অথবা পাউন্ডে ওজন কনভার্ট করা যায় খালি পাত্রের ওজনকে শুন্য করে নেয়া যায় <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;মাত্র ২টি পেন্সিল (AAA সাইজের) ব্যাটারীতে চলে সাথে বেটারি সংযুক্ত নয়। 
      `  
        
        },
        
        {
                 image:G2, prise:"$ 499", ps:"0%", code:"02" , title:"নেকব্যান্ড রিচার্জেবল মিনি ফ্যান", stock:"stock in",
                 reproduct: `
                 <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;   তিব্র গরমে একটু শিতল হাওয়া আপনার কাজকে আরো সহজ করে দিতে পারে। <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;এই ফ্যান এর সবচেয়ে উপকারি দিক হচ্ছে, এটা অন্ন্য মিনি ফ্যান গুলোর মত করে হাতে ধরে রাখতে হয় না <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;এটা খুব সহজে গলার উপরে রেখে দিলে দুই দিক থেকেই আপনাকে বাতাস দিতে সক্ষম <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;ঘরে বাইরে, হাঁটতে, খেলাদুলায়, জিম এ এটা আপনি খুব সহজেই ব্যাবহার করতে পারবেন <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;এই ফ্যান একবার চার্জ দিলে একটানা ৬-৭ ঘন্টা চলবে।
     `
          },
        {
                 image:G3, prise:"$ 990", ps:"34%" , code:"03",  title:"ইলেকট্রিক ক্যাপসুল কাটার", stock:"stock in",
                 reproduct:`
           <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;   ইলেকট্রিক ক্যাপসুল কাটার দিয়ে এখন মাংস কিমা থেকে শুরু করে আদা রসুন পেস্ট ,মসলা গুঁড়া, সবজি ও যে কোনো ফলের জুস করুন এক মেশিনেই ।<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;স্টেইনলেস স্টিল ব্লেড ।<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;হাই কোয়ালিটি ম্যাটেরিয়ালে প্রস্তুত ।<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; সহজেই পরিষ্কার করা যাবে।
    `
        },
        {
                image:G4, prise:"$2550", ps:"15%",  code:"04" , title:" Wardrobe Storage Organizer for Clothes" , stock:" Stock In", 
                reproduct:`
              <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;     বাইরের কাভারটা কাপরের ও বডি মেটাল এর এটা খুলে বক্স বা ব্যাগে করে <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;যে কোনো জায়গায় নিয়ে যেতে পারবেন খুব সহজেই <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;প্রতি তাকে 8 কেজি করে রাখাতে পারবেন <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;৫০-৬০ কেজি ওজন দিতে পারবেন <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;সম্পূর্ণ আলমিরাতে ও ১০-১৫ টি শার্ট জুলাতে পারবেন 
      
                
                `
        },
        {
                 image:G5, prise:"$ 5500", ps:"15%", code:"05" ,title:"5 In 1 Air Sofa Bed - Black" , stock:"Stock In", 
                 reproduct:`
              <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; এটি একটি sophisticated সোফা <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;একটি লাক্সারিয়াস lounger <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;একটি relaxed recliner <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;বাচ্চাদের একটি হাই রাইজ বোস্টার স্লিপার <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;একটি চমৎকার blissful বেড <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;অবিশ্বাস্য All in one প্রোডাক্ট এবং এই সবই আপনার ট্রাভেল ব্যাগের ভেতর এটে যাবে এবং আপনি যেখানেই যান, বহন করে নিয়ে যেতে পারেন সাথে করে!
      
                 
                 `
        },
        {
                 image:G6, prise:"$ 490", ps:"350%", code: "06", title: "কুইক নাইসার ডাইসার" , stock: "Stock  In", 
                 reproduct:`
               <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Nicer Dicer Quick 5in1 <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;নাইসার ডাইসার ভেজিটেবল কাটার 5in1 <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Nicer ডাইসার এর সাহায্যে সহজেই আপনি এখন সালাদ বা ফল স্লাইস, গ্রেট ও গ্রাইন্ড করতে পারেন <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;ব্যবহার করা নিরাপদঃ আপনার আঙ্গুল কখনোই ব্লেড স্পর্শ করবে না <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Fruit and Vegetable Cutter Set <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Nicer Dicer Quick <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Hand Format 
      `
        
        },
        {
                 image:G7, prise:"$ 400", ps:"50%", code: "07", title:" ফ্যান স্টাইল LED বাল্ব" , stock:"Stock In",
                 reproduct:`
              <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;  ফ্যান স্টাইলের এই বাল্বের আলো অন্য এল ই ডি বাল্বের চেয়ে অনেক বেশী <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;এটি আপনার বাসা বা শোরুমে ব্যাবহার করলে বাসা বা শো রুম হবে আরো আলোকিত, <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;সেই সাথে এই ৪৫ ওয়াটের বাল্বটি অনেক বিদ্যুৎ সাশ্রয়ী। <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;দেখতে সুন্দর তাই বাড়ি, শোরুম বা অফিস এই লাইট আপনার ডেকোরেশান কে আরো ফুটিয়ে তুলবে 
        `
                 
        },
        {
                 image:G8, prise:"$ 290", ps:"51%" , code: "08", title:" অটোমেটিক টুথপেস্ট ডিসপেন্সার", stock:"Stock In" ,
                 reproduct:`
             <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; এটি অটোমেটিক ভাবে বাথরুমের দেয়ালে আটকে থাকে।(কোন প্রকার পিন বা পেরেক ছাড়াই) <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;টুথব্রাশ প্রবেশ করানোর সাথে সাথেই অটোমেটিক ভাবে টুথপেষ্ট ব্রাশে প্রয়োজনমত জমা হবে। <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;একসাথে টুথব্রাশ ডিসপেনসার এবং টুথব্রাশ হোল্ডার 
          `
        },
        {
                 image:G9, prise:"$ 380 ", ps:"42%",   code:"09", title:"ম্যাগনেটিক পার্ল বল (২ পিছ সেট) ",  stock:"Stock In" ,
                 reproduct:`
              <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; আপনার ঘরের সুন্দর আপনার স্মার্টনেস ফুটিয়ে তুলতে পারে। <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;তাই আপনার ঘরের এলোমেলো পর্দা সাজিয়ে রাখুন আপনার ইচ্ছে মতই।<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;বাসা কিংবা অফিসের পর্দা সাজিয়ে রাখুন আমাদের এই ম্যাগনেটিক পার্ল বল কার্টেইন টাই ব্যাক দিয়ে।<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Curtain Tie Rings & Buckles<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Curtain Poles, Tracks & Accessories<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Material:Alloy + Magnet<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Type: Curtain Tieback<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Material: Alloy + Magnet<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Quantity: 2Pcs/4Pcs<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Features: Magnetic Closure, Easy to Use, Home Decor, Ball Shape<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Total Length: 30/40cm/15.75" (Approx.)<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;made in china `
        },
        {
                 image:G10, prise:"$ 850", ps:"11%" , code:"10", title:"সিলিকন সিটার কুশন ", stock:"Stock In" , 
                 reproduct:`
               <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;      দীর্ঘ সময় কম্পিউটারের সামনে বসে থাকতে কিংবা অফিসে চেয়ারে বসে থাকতে বা গাড়ি চালাতে চালাতে কোমর ব্যাথ্যা? <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;এই টি দিয়ে আপনি পেতে পারেন এই সমস্যার থেকে দ্রুত সমাধান।<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;এটি সঠিক পজিশনে ব্যালেন্স ঠিক রাখতে।<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;এটি এতটাই নমনীয় যে এর ওপরে একটি ডিম রেখে বসলেও ডিমটির কোন প্রকার ক্ষতি হবে না।<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;এই প্রোডাক্টটি তে ব্যবহার করা হয়েছে হাইপার ইলেকট্রিক জেল পলিমার।<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;এটি ওজনে হালকা এবং ফ্লেক্সিবল।<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;এটা মেরুদন্ডকে সোজা রাখে <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;এটা মেরুদন্ড, কোমর ও পিঠের জন্য সাপোর্ট হিসাবে কাজ করে <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;আপনাকে কুজো হয়ে বসে থাকা থেকে বিরত রাখে <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;স্প্রীং এর ন্যায় কুশন সিষ্টেম আপনাকে বাড়তি প্রশান্তি দান করে <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;ছোট ছোট উচু নোড পিঠকে ম্যাসেজের মত প্রশান্তি দান করে  `
                
        },
        {
                 image:G11, prise:"$ 550", ps:"15%", code:"11", title:" মাল্টিফাংশনাল ফোল্ডিং কাটিং বোর্ড", stock:"Stock In" ,
                 reproduct:`
            <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; এখন ফলমুল কাটা থেকে শাকসবজি ওয়াশিং স্টোরেজের জন্য ঝুড়ি দিয়েই হবে সব। <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;কাটা-ধোয়া থেকে শুরু করে রান্নায় প্রয়োজনীয় জিনিসগুলোকে সংরক্ষণ করতে সক্ষম এটি।<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;বরফ এবং পানীয়ের জন্য আদর্শ,ভ্রমন বা ক্যাম্পেইনেও বহনযোগ্য।
           
                 `
        },
        {
                 image:G12, prise:"$ 280", ps:"0%", code:"12", title:"Lighter - 210 ", stock:"Stock In",
                 reproduct:`
               <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;    Type of stove: soft gas <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Burner type: Etm <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Facilities of your hotel: You can find a charger in Dobar Sokhet <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Useful resource: Clexion, birthday gift, Valentine's. 
    `
        
        },
        {
          image:G13, prise:"$ 239", ps:"0%", code:"13", title:"Lacoste Lighter, spring knife ", stock:"Stock In",
          reproduct:`
       <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;  Use gas to light the fire. <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Red glowing light <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Has a built-in spring knife <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Size 75x30 mm <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Weight 85 grams
     
    `
    
        },
        {
    image:G14, prise:"$ 399", ps:"0%", code:"14", title:"5-in 1 Multifuntional Fish Knife ", stock:"Stock In",
    reproduct:`
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;   Material: Stainless steel <br /> 
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Package Includes: 1 x 5-in-1 Multifunction Fish Knife <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; 5-in-1 Multifunction: Removing shrimp threads, splitting, scaling, cutting and gutting, <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; All these complicated tasks are now left to this delicate knife. Yes, he can do all these jobs perfectly
     
    
    `
    
        },
        {
          image:G15, prise:"$ 280", ps:"0%", code:"15", title:"Portable Camping Handsaw ", stock:"Stock In",
          reproduct:`
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Sided Razor Teeth: Triple-bevel staggered teeth for ultra smooth and sharp sawing, 50% faster than traditional hand saws.
          
        `
    
        },
        {
          image:G16, prise:"$ 400", ps:"0%", code:"16", title:"Hard-Bristled Crevice Cleaning Brush(4-Pcs) ", stock:"Stock In",
          reproduct:`
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Super hard and super fine bristles: gap cleaning brush has harder bristles than <br /> 
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;a toothbrush to easily remove the narrowest gaps and make your home cleaner and more hygienic.<br /> 
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;A must-have for home cleaning: having a crevice gap cleaning brush A must-have tool to keep your home clean and tidy!<br /> 
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Specification:<br /> 
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Material: PP, PET<br /> 
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Size: 23.5cm/9.3in×2cm/0.8in
    
    
        `
    
        },
        {
          image:G17, prise:"$ 280", ps:"0%", code:"17", title:"14-in-1 Portable Multi Tool Pliers Hammer ", stock:"Stock In",
          reproduct:`
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Color : Black <br />
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Material : Alloy Steel, Aluminum, Stainless Steel <br />
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Item Dimensions（fold） : 160 x 75 x 22mm
          
    
        `
    
        },
        {
          image:G18, prise:"$ 1,990", ps:"0%", code:"18", title:"Rechargeable Table Fan With light -DP-7624 ", stock:"Stock In",
          reproduct:`
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;  এই ফ্যান এর সবচেয়ে উপকারি দিক হচ্ছে একবার চার্জ দিলে একটানা ৪-৫ ঘন্টা চলবে <br />
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;ব্র্যান্ড: Bright Star (NO. 1) Model No :2876<br />
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;ম্যাটেরিয়াল: ABS প্ল্যাস্টিক<br />
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;ভোল্টেজঃ AC 220-240v, 50/60Hz<br />
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;ব্যাটারিঃ 1 Pcs 4V/1600mAh sealed lead-acid battery<br />
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;চার্জিং টাইমঃ 2-4 ঘন্টা<br />
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;ডিউরেশনঃ ২.৫ ঘন্টা/হাই স্পিড, ৪ ঘন্টা মিডিয়াম স্পিড, ৬ ঘন্টা লো স্পিড, DC- সকেট, USB- সকেট, AC/DC- অপারেটেড<br />
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Light: 10 SMD LED, Torch: 0.5W, 5V USB Input & Charge<br />
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Dimension: 170 * 88 * 240mm
        
        `
    
        },
    
    
        ];
    


    const deta1 =[
        {
           image:Bk1, prise:"$169", ps:"0%", code:" 01", title:"Smile Bear 3 In 1 Feeding Bottle 125 ml", stock:"Stock in",
           reproduct:`
         <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;  Product details of Smile Bear 3 In 1 Feeding Bottle 125 ml <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Size: 125 ml <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;BPA Free PP printed Bottle <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Made in china <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;3 in 1 feeding system (extra 2 head included)
    
           ` 
        },
        {
           image:Bk2, prise:"$1450", ps:"0%" , code:"02", title:" Full Glass Feeder 60ml -1pcs ", stock:"Stock In" ,
           reproduct:`
          <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Full Glass_ feeder 60ml_1pcsThe seller Discovery Kids,<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;  offers a wide selection of products in Bangladesh with a promise of fast, <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;  safe and easy online shopping experience through Daraz. <br />
     <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; The brand comes closer to the huge customers on this leading <br />
     <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; online shopping platform of all over Bangladesh and serving to <br />
     <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; the greater extent for achieving higher customer satisfaction. <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;   The brands working with Daraz are not only serving top class products <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;  but also are dedicated to acquiring brand loyalty.
      
           `
        },
        {
           image:Bk3, prise:"$990", ps:"34%" , code:"03", title:"Rechargeable Robots Tank Music Car Toy ", stock:" Stock In" ,
           reproduct:`
       <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;   Material: Plastic<br /> 
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;With Lights, Music and Bump and Go Function<br /> 
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Front, Back, Left, Right motion with 360 drifting while transforming car to robot and back<br /> 
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Color:Army Combat Tank<br /> 
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Requires 3 AA batteries rechargeable. (included)<br /> 
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Country of Origin : Chaina 
        `
        },
        {
           image:Bk4 ,prise:"$ 690", ps:"10%" , code:"04" , title:"Remote Control LED Flying Spinner ", stock:" Stock In", 
           reproduct:` 
         <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;   Tilt the flying ball back, throw it out, and it will magically return to your hand.<br /> 
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Release horizontally, place your palm under it, and it can levitate.<br /> 
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Support multiplayer entertainment and pass it on.<br /> 
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Magic stick control, funny and interesting.<br /> 
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;The spherical shell material is flexible enough, one shake to stop.<br /> 
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Battery capacity 200mah<br /> 
    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Net 27 g
      `
        },
        {
           image:Bk5, prise:"$ 350", ps:"50%", code:"05" , title:"Baby Safety Helmet Head Protection", stock:"Stock In",
           reproduct:`
        
            <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;100% Cotton fabric Brand new and high quality<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Fits Toddlers to 24 months and one size fits all<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Machine Washable<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Beautiful and versatile accessory for your baby.<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;It is great baby safety cap.<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Material: cotton blend.<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Length Range=45~58cm=15.7~22.5inch (adjustable).<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;(2-3 cm deviation exists due to different measuring way).<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Weight: 45gPackage including:<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;1 pc safety cap<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Brand<br />
                     
           `
        },
        {
            image:Bk6, prise:"$ 250", ps:"50%", code:"06" , title:"Koochi Koo Transparent & Dust-Free Feeder Cup (Blue)", stock:"Stock In",
            reproduct:`
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Type: Sipper Bottle<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Quantity: 240 ml<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Material: Plastic<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Designed for Teething<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Trainer Handle Present           
                        `
         },
    
         {
            image:Bk7, prise:"$ 150", ps:"50%", code:"06" , title:"New Children Toothbrush U-Shape", stock:"Stock In",
            reproduct:`
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; New Children Toothbrush U-Shape Baby Toothbrush With Handle Silicone Oral Care Cleaning Brush For Kids Supplies <br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Name: Baby Toothbrush<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Material: ABS+Silicone<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Waterproof: IPX7 Waterproof<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Age: 2-12 years old<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Type: Manual<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Size: 10x4.2cm/9x5cm<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Power Supply: Manual<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Shape: U-Shape<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Made in China         
                        `
         },
    
    
    
    
      ];
    

      const deta2 = [
        {
          image:H1, prise:"$1450", ps:"11%" , code:"01",  title:"শাওয়ার ব্রাশ মাসাজার", stock:"stock in",
          reproduct:`
   <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Spin Spa শাওয়ার ব্রাশ মাসাজার <br />
  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;ওয়াটারপ্রুফ ডিজাইন <br />
  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;ব্যাটারি: 3টি AAA সাইজ ব্যাটারিতে চলে <br />
  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;যেকোন ধরণের সোপ বা বডি ওয়াশ লিকুইড  ব্যবহার করতে পারবেন <br />
  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;আছে চ্যাঙ্গেবল ভিন্ন ভিন্ন হেড <br />
  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;প্যাকেজে রয়েছে : Spin Spa, ব্রাশ হেড, মাইক্রোড্রাম হেড, ক্লিনজিং হেড, Pumice হেড
   `
  },
  
         
          
          {
                   image:H2, prise:"$ 1790", ps:"42%", code:"02" , title:"ফেসিয়াল স্টিমার ডিভাইস", stock:"stock in",
                   reproduct: `
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  বিশেষজ্ঞদের মতে গরম ভাপ নিলে আপনার করনার প্রাথমিক উপসর্গ দুর হয়ে যাবে।<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;তাই আমরা নিয়ে এলাম আপনার জন্য ইলেকট্রিক স্টিমার ডিভাইস।<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;দিনে ২/৩ তিন বার ব্যাবহার করলে ভাল ফলাফল পাবেন।<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Cartshopper Benice Electric Home Use Beauty 3 In 1 Steam Sauna Vaporizer Facial Steamer Machine<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;BNS-016 Beauty Facial Steamer<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Machine – White and Blue<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Product Type: Beauty Facial Steamer Machine<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Model: BNS-016<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Steam Duration: 15-20 minutes<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Color: White and Blue<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Voltage (V): 220<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Suitable for different skin, including oily skin, dry skin, sensitive skin, acne-prone skin<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;You can add aromatherapy, essential oils, herbs, spices, etc. with personal preferences<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;It can effectively delay aging, moisturizing, whitening, prevent acne, smooth airway
                    `
            },
            {
              image:H3, prise:"$950", ps:"0%", code:"  01" , title:"5 Spring Chest Expander", stock:"Stock in" ,
              reproduct:`  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; জিম এখন বাসায়, দ্রুত মেদ-ভুড়ি কমান ও মাসেল বৃদ্ধি করুন।  <br/>
               <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;পাঁচটি স্প্রিং থাকায় অন্যান্য যেকোন স্প্রিং থেকে বেশী শক্তিশালী। <br />
               <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;প্রয়োজন অনুযায়ী স্প্রিং কম-বেশি করেও ব্যবহার করা যায়।<br />
              <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; এটি Multifunctional হওয়ায় আঙুল,বাহু, বুক, হাত-পা সহ সব জায়গায় ব্যবহার উপযোগী।<br />
              <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; শুধু আগুলের ব্যায়ামের জন্যও আলাদা সিস্টেম দেওয়া আছে।<br />
              <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; ফুড প্যাডেল ও হ্যান্ড প্যাডেলগুলো খুবই উন্নত মানের।</br>
              <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; প্রত্যেকটি পার্ট আলাদা আলাদা করে ব্যবহার করা যায়।</br>
              <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; যারা জিমে যেতে পারেন না তাদের জন্য এটি হতে পারে সবচেয়ে উওম</br>
             <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  স্টেইনলেস স্টিলের স্প্রিং ফলে মরিচা ধরে না বা ছিঁড়ে যায় না।</br>
              <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; সুস্বাস্থ্য ও ফিটনেস ধরে রাখতে এই পণ্যটির বিকল্প নেই।</br>
             <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  ছেলে-মেয়ে সবার জন্যই উপযোগী </br>`  
           
           },
          {
                  image:H4, prise:"$1950", ps:"15%",  code:"04" , title:"অটোম্যাটিক ইনফ্রারেড থার্মোমিটার" , stock:" Stock In", 
                  reproduct:`
                 <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;   CPU: ST<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Measuring distance : 15cm<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Sensor Type : Infrared detector<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Human detection area : 32℃ to 42.9℃<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Backlight color : RED/ GREE/ ORANGE<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Power supply : 5V/1A<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Detection time : 2s<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;2 year officeal warenty
       
                  
                  `
          },
          {
                   image:H5, prise:"$ 850", ps:"51%", code:"05" ,title:"সিলিকন সিটার কুশন" , stock:"Stock In", 
                   reproduct:`
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;      দীর্ঘ সময় কম্পিউটারের সামনে বসে থাকতে কিংবা অফিসে চেয়ারে বসে থাকতে বা গাড়ি চালাতে চালাতে কোমর ব্যাথ্যা? <br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;এই টি দিয়ে আপনি পেতে পারেন এই সমস্যার থেকে দ্রুত সমাধান।<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;এটি সঠিক পজিশনে ব্যালেন্স ঠিক রাখতে।<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;এটি এতটাই নমনীয় যে এর ওপরে একটি ডিম রেখে বসলেও ডিমটির কোন প্রকার ক্ষতি হবে না।<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;এই প্রোডাক্টটি তে ব্যবহার করা হয়েছে হাইপার ইলেকট্রিক জেল পলিমার।<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;এটি ওজনে হালকা এবং ফ্লেক্সিবল।<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;এটা মেরুদন্ডকে সোজা রাখে <br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;এটা মেরুদন্ড, কোমর ও পিঠের জন্য সাপোর্ট হিসাবে কাজ করে <br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;আপনাকে কুজো হয়ে বসে থাকা থেকে বিরত রাখে <br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;স্প্রীং এর ন্যায় কুশন সিষ্টেম আপনাকে বাড়তি প্রশান্তি দান করে <br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;ছোট ছোট উচু নোড পিঠকে ম্যাসেজের মত প্রশান্তি দান করে
                                
                   `
          },
          {
                   image:H6, prise:"$790", ps:"31%", code: "06", title: "Tooth Repair Kit Resin Fix Broken Teeth Fill Gaps" , stock: "Stock  In", 
                   reproduct:`
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Brand: Jaysuing<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Name: shapeable gutta-percha<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Specification: 30ml<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Shelf life: 3 years<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Storage method: store in a cool place<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Product features: not only can be used for temporary filling and repair of broken teeth and missing teeth, but also suitable for various role-playing, DIY, etc.<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Specifications:<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;USAGE According to the size of the missing teeth(12 granules, more or less doesn't matter.) Put it in boiling hot water Stir with a spoon for a few times and the ma- terial will merge. Like rubber mud, it can be molded at will.<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;After a minute or so, the white particles become translucent. You can shape teeth.<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;The extra material can help fix the back of the adiacent teeth.<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;After cooling at room temperature, the ma- terial hardens.<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;You can wear it to the missing tooth (Rinse with cold water to accelerate cooling) If the denture has fingerprints, After forming, it can be slightly polished with fine sandpape      `
                        
          },
          {
                   image:H7, prise:"$450", ps:"31%", code: "07", title:" Philips Dry Care Hair Dryer" , stock:"Stock In",
                   reproduct:`
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  Made in Japan<br />
                   `
                   
          },
          {
                   image:H8, prise:"$499", ps:"0%" , code: "08", title:" Copper Knee Support", stock:"Stock In" ,
                   reproduct:`
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  মর্নিং ওয়াক করার সময় আপনি ব্যবহার করে করতে পারবেন।<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  আপনি উঠা বা বসা করতে এটা খুবই সহযোগীতা করবে।<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  এটা হাঁটুর রক্ত প্রবাহ স্বাভাবিক রাখতে দারুন কার্যকরী।<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  খেলাধুলা করার সময় এই সাপোর্ট পড়তে পারেন। যেমন; দৌড়ানো, বাস্কেটবল, ফুটবল, গলফ, সাইক্লিং, টেনিস, হাইকিং ভলিবল ইত্যাদি।           `
          },
          {
                   image:H9, prise:"$ 550", ps:"10%",   code:"09", title:"Copper Knee Support ",  stockt:"Stock In" ,
                   reproduct:`
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  1. Lightweight and breathable, cutout straps pressurized close to your knees<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  2. High elastic cut-out straps, light and beautiful, moderate pressure and comfort<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  3. Scientific fabric ratio, care for delicate skin<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  4. 3D knitted fabric is comfortable, breathable and pressurized, and it is comfortable to wear all seasons<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  5. Wrap around the knees in all directions, close to the leg socket tightly wrapped comfortable and not tight<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  6. pakege 1 pcs Knee Support<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  7. Coller..1.sky blue..2.purple  
                   `
          },
          {
                   image:H10, prise:"$1150", ps:"51%" , code:"10", title:"ইলেকট্রিক এগ বিটার ", stock:"Stock In" , 
                   reproduct:`
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  টি স্পীড এডজাস্টম্যান্ট সুইচ <br/ >
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; রিকোয়েন্সি: 50Hz পাওয়ার: 150W<br/ >
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; টেইনলেস স্টিল হুক<br/ >
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; হজে পরিষ্কার করা যায়<br/ >
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; গ বিটিং এবং কোন কিছু ব্লেন্ডিং-এর জন্য উপযুক্ত          
                   `
                  
          },
          
          {
            image:H11, prise:"$ 890", ps:"51%" , code:"11", title:"EMS Foot Massager Mat Electric Massage ", stock:"Stock In" , 
            reproduct:`
          
            <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;EMS Foot Massager থেরাপি এর মাধ্যমে থেরাপি নিলে এই কষ্টকর ব্যথাগুলো নির্মূল হবে প্রথম দিন থেকেই।<br/ >
            <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;আপনারা যারা দীর্ঘক্ষন চেয়ারে বসে কাজ করে থাকেন ঠিকমতো হাঁটাচলা হয় না, ফলে ঘাড় ও মাজা ব্যথা হয়ে থাকে। EMS Foot Massager থেরাপির মাধ্যমে এই সমস্যার সমাধান খুঁজে পাবেন।<br/ >
            <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;EMS Foot Massager পয়েন্টগুলিতে চমৎকার মাসাজের মাধ্যমে সারা শরীরে রক্ত সঞ্চালন প্রবাহ বৃদ্ধি করবে।<br/ >
            <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Foot reflexology নার্ভ সার্কুলেশন বাড়ায়, যা শরীরের অঙ্গসমূহের ব্যালান্স নিশ্চিত করবে।<br/ >
            <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;থেরাপি নেয়া খুবই সহজ EMS Foot Massager উপরে শুধু দাঁড়াতে হবে এরপর ব্যথা অনুযায়ী mood চেঞ্জ করে (+) / (-) মাইনাস বাটন দ্বারা গতি কমবেশি করে থেরাপি নিতে হবে। <br/ >
            <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;প্রথম দিন থেকেই পজিটিভ রেজাল্ট পাবেন।   `
                    
   },
   

   {
    image:H12, prise:"$ 850", ps:"51%" , code:"12", title:"সিট রাইট ব্যাক সাপোর্ট ", stock:"Stock In" , 
    reproduct:`
   <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  টি স্পীড এডজাস্টম্যান্ট সুইচ <br/ >
<i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;দীর্ঘসময় কম্পিউটার ব্যবহার কিংবা চাকুরীতে অফিসে বসে থাকার ফলে পিঠব্যাথা?<br/ >
<i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;চেয়ার বা গাড়ির চেয়ারে আরাম করে বসার জন্য আমরা এনেছি Seat Right Back Support নামের এই অসাধারণ পণ্য।<br/ >
<i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;স্পেশালী যারা ব্যাংক বা ডেস্ক জব করেন তারা বেশীর ভাগই পিঠের ব্যাথায় ভুগেন তাদের জন্য এই Seat Right Back Support হতেপারে এক আশীর্বাদ<br/ >
<i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;যাদের মেরুদন্ডে ব্যথা তাদের জন্য অত্যন্ত কার্যকরি।<br/ >
<i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;কাজের গতি বাড়াতে সাহায্য করে।<br/ >
<i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;মেরুদন্ড / কোমরও পিঠের ব্যথাদূর করতে সাহায্য করে।<br/ >
<i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Adjustable যা আপনার সুবিদা অনুযায়ী Adjust করতে পারবেন।<br/ >
<i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Ball যুক্তযা আপনাকে বাড়তি প্রশান্তি দিতে সাহায্য করে।<br/ >
<i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;মেরুদন্ডের শেপ অনুযায়ী ব্যবহার করা যায়।<br/ >
<i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;যে কোন চেয়ারে ফিট করা যায়।   `
   
},


          ];


          const deta3 =[
            {
               image:Bs1, prise:"$ 950", pe:"0%" , code:"01", stock:" Stock In ", title:"5-in-1 ম্যাজিক সানগ্লাস",
               reproduct:`
             <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; এটি একটি সাধারণ সানগ্লাস<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;এটির ফ্রেমের সাথে থাকা চুম্বক অতিরিক্ত লেন্স এর চুম্বককে আকর্ষণের মাধ্যমে কানেক্ট হয়ে যায়<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;খুব সাধারণ একটা পুশের মাধ্যমে আপনি লেন্সটি খুলতে পারবেন।<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;প্যাকেজে পাচ্ছেন একটি লেন্স এবং তিনটি ফ্রেম<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Stylish Glasses<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Quick-change Magnet Lenses<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Anti-glare<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Reduces Eye Strain (Day)<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Eliminates Glare Light (Night)<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Optical Precision<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Improves Vision<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;100% UV Protection<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;100% Polarization (Day & Night)<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Scratch Resistant<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Lightweight<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Durable<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Affordable<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;New magic vision<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Strong magnetic lenses Anti-far strong magnet light pressure<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Lenses Color: Blue, Transparent, Golden, Brown, Mercury
           
              
              `
            },
            {
              image:Bs2, prise:"$ 590", ps:"0%" , code:"02", stock:" Stock In ", title:"পুল রিডিউসার বডি ট্রিমার",
              reproduct:`
            <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  Contoured foam pedals and handles gives you blister proof workout<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Perfect for your gym at home<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Highly elastic body ideal for slimming and strengthening stomach, waist and legs<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Waist Reducer reduces your Waist and<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Strengthens Abdominal and Lower Back muscles<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Easy to use and carry makes it portable 
               `
            },
           
          ];

          const deta4 =[
            {
               image:Br1, prise:"$ 169", title :"Smile Bear BPA Free PP silicon Nipple baby Feeding Bottle Feeder 250 ml" ,stock:"stock in", code:"01",
               reproduct:`
           <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;    3 In 1 Feeding Bottle <br />
             <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Product Type: Baby feeding bottle / Feeder <br />
             <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Brand: SmileBear, Made in china <br />
             <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Model: 809A, Size: 250ml <br />
             <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Straight standard feeding bottle <br />
             <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;BPA Free PP printed Bottle <br />
             <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Very high quality Silicon nipple <br />
             <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; 3 in 1 feeding system (extra 2 head included) <br />
             <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Easy to clean and replacable Nipple <br />
             <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Brand new and high quality <br />
             <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Multi-purpose bottle suitable for feeding a variety of liquid/ semi-liquid foods <br />
             <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Extra food feeder spoon suitable for feeding a variety of foods, solve troubles for mom, add the fun of spoiled brats' diet <br />
             <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Transparent bottle. Can see the qty of food always.<br />
             <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Authentic product 
          
               `
            },
            {
               image:Br2, prise:"$ 180", title:"Apple Bear Plastic Feeder For Baby 60 ML",stock:"stock in", code:"02",
               reproduct:`
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Apple Bear Feeding Bottle 60 ml- Green - The Apple Bear Feeding Bottle is a natural and safe feeding for your baby. <br />
         <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; The feeding bottle has soft nipples and is easy to use, hold and clean, which makes it suitable for feeding your baby comfortably.  <br />
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;  The light weig Best Quality Baby Products in Bangladesh with cheap price. Our most of the products are imported Directly from China.  <br />
         <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; You will get Boys Clothes, Girls Clothes, Kids Footwear, Fashion accessories for Your Lovely Kids.
              `
            },
            {
               image:Br3, prise:"$ 1980", title: "Nature Plus Sun Block SPF 50+",stock:"stock in", code:"03",
               reproduct:`
             <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;  made in korea
                `
            },
            {
               image:Br4, prise:"$ 170", title: "Lolane Natura Hair Treatment For Dry & Damage Hair",stock:"stock in", code:"04",
               reproduct:`
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Made in Japans.
               `
            },
          ];

          const deta5 =[
            {
               image:Gz1, prise:"$1450", ps:"28%", code:" 01", title:"A9 Mini WiFi রিচার্জেবল মিনি ম্যাগনেট ক্যামেরা", stock:"Stock in",
               reproduct:`
              <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; নাইট ভিশন ক্যামেরাটি রাতের অন্ধকারেও স্পষ্ট ভিডিও ধারণ করতে সক্ষম।<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;ক্যামেরাটি ২৪ ঘন্টা ভিডিও ধারণ ক্ষমতা রাখে।<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;বিদুৎ চলে যাওয়ার পর wifi বিচ্ছিন্ন হলে ১ ঘন্টা পর্যন্ত ক্যামেরাটি তে অফলাইন ভিডিও রের্কড হবে।<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;ক্যামেরাটি ৬৪ জিবি মেমোরি কার্ড সাপোর্টেডম্যাগনেট ওয়াল মাউন্টশার্ট ক্লিপক্যামেরা টি মোবাইলের অ্যাপ দ্বারা নিয়ন্ত্রনযোগ্য ।<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;ভিডিও রেজুলেশন ঃ 720 P- 1080P <br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;পরিমাপঃ  32 x 33 x 36 মিমি / 1.26 এক্স 1.30 এক্স 1.42 ইঞ্চি<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;ওজনঃ 13.5gm<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;অনুপাতঃ 16:9<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;ব্যাটারিঃ 240 Mah<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;ব্যাটারী লাইফ টাইম ঃ ১ ঘন্টা ভিডিও ধারন করা যাবে <br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;ভোল্টেজঃ ডিসি 5 Volt<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;32 GB মেমোরী সাপোর্ট করবে <br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;ডুয়েলওয়ে অডিও সিষ্টেম <br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;সাথে থাকবে <br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;১ টি মিনি ক্যামেরা <br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;১ক্যাবল<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;১ স্ট্রিপ<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;১ ম্যানুয়াল<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Softwere : HD WI -Fi PRO Cam 
               
               ` 
            },
            {
               image:Gz2, prise:"$1450", ps:"0%" , code:"02", title:" Q7 KARAOKE Microphone ", stock:"Stock In" ,
               reproduct:`
             <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;   আপনার মোবাইল ফোন এবং এই মাইক্রোফোনের সাহায্যে বানিয়ে নিন হোম কারাওকে আর মাতুন বন্ধুদের সাথে।<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;★ মাইকের সাথে স্পিকার।<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;★ এবার বাসায় হবে পার্টি, DJ.<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;★ যে কোন পার্টি,  ছোট অনুষ্ঠান, টুরিস্ট গাড়িতে,  স্কুল ও গানের স্কুল, সহ যে কোন ঘরোয়া অনুষ্ঠানের জন্য Q7 Microphone Speaker হতে পারে অনন্য।<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;★ কোন প্রকার ভিন্ন মাইক বা স্পিকার এর প্রয়োজন নেই।<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;★ যে কোন জায়গায় সহজে বহন করা যাবে।<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;★ Bluetooth কানেকশন এর মাধ্যমে ও শোনা যাবে। যেমনঃ মোবাইল ফোন, কম্পিউটার, সাউন্ড সিস্টেম।<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;★ Reachargeable.<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;★ প্রয়োজনে বড় স্পিকার এর সাথে কানেক্ট করা যাবে।
            
               `
            },
            {
               image:Gz3, prise:"$499", ps:"34%" , code:"03", title:"Multifunctional Cleaning Tools Brush Kit ", stock:" Stock In" ,
               reproduct:`
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; 1. Multifunctional cleaning set: Flocking sponge can clean the dust in the wireless charging box of the headset. The high-density brush can clean the dirt on the sound outlet of the headset. The nib can clean stubborn dust <br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; 2. Split double head design: the computer cleaning set is equipped with nylon bristles, flocking sponges, high-density brushes, pen tips and key CAP pullers. The double head concealed design meets a variety of cleaning needs <br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; 3. Soft brush does not hurt the keyboard: select nylon brush with moderate soft and hard, high pore strength, good elasticity, good stiffness, dense and labor-saving friction<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; 4. Convenient and labor-saving, easy key pulling: with a simple key puller, it is no longer laborious to replace the key CAP, and the key CAP can be disassembled more thoroughly<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; 5. Easily respond to various cleaning needs: four kinds of cleaning heads, one machine for multiple purposes, deeply clean every corner of the keyboard and headset, so that there is no place for dust to hide. Compatible with Beats Fit Pro, for AirPods 3 2021, for AirPods 1/2, for AirPods 1/2 Pro, for Samsung Galaxy Buds 2, for SONY WF-1000XM4, and most wireless Bluetooth-compatible headsets on the market. Handset, microphone, computer, digital camera, etc. are also applicable.       `
            },
            {
               image:Gz4 ,prise:"$1990", ps:"15%" , code:"04" , title:"ফেরারি গাড়ি মোবাইল ফোন ", stock:" Stock In", 
               reproduct:` 
              <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; এটি একটি sophisticated সোফা <br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Model No. NEWMIND F15<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Dimensions 102*47*21.8mm<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Net Weight 95g<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Service Provide Unlocked<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Style Flip<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Shell Material Plastic<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Band GSM850/900/1800/1900MHz; GPRS<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Sim Card Dual SIM card dual standby<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Screen 1.77 inch QCIF TFT LCD hard screen, 160*128px<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Platform RDA8851CL<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Phonebook 100<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Input Keypad<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Message SMS<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Ringtones Type Polyphonic/MP3<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Camera Single 0.08MP back camera, up to 320*240px<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; FM Radio Yes, need plug in earphone<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Memory Support TF card up to 8GB max<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Audio File Format MP3/MIDI/WAV/AMR<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Video File Format AVI,3GP,MP4<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Earphone Port 12PIN Micro USB<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Bluetooth Yes, support<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Standby Time up to 200 hours<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Other Features Tasks, alarm, calender, E-book, sound recorder etc.<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Languages English, French, Portuguese, Russian, Arabic, Indian, Persian.<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Color Black, yellow, red, golden, green, white, blue<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Accessories 1 x 800mAh battery(BL-4C)<br />
    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; 1 x Charger      `
            },
            {
               image:Gz5, prise:"$490", ps:"50%", code:"05" , title:"Musical LED Spinning Top", stock:"Stock In",
               reproduct:`
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; 1. Gyroscope top surface there are two lights, front with three lights plus an infrared laser light, and wonderful music<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; 2. Top launcher clockwise three times, click, rapid rotation, issued a colorful light, very beautiful (usually slidably tens of seconds).<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; 3. Principle: gyroscope or spinning top is a toy, called Chien. It can rotate about a central axis, the gyro tip the balance in a point.<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; 4. Product name:Kid's simulation wood luminous music gyro<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; 5. Material:Security plastic<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; 6. Ages:3 years old<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; 7. Size: Gyro about 8 * 6.5cm /3.15*2.6 inch (emission of about 5 * 7.5cm/1.97*2.95 inch)<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; 8. Power: 6 Piece AG10 button batteries (Not Include)<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; 9. Package Included<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; 10. 1 X Kid's wood luminous music gyro      
               `
            },
            {
               image: Gz6, prise:"$450", per:"5%" , code:"06", title:"Music Learning Phone" , stock:"Stock In" , 
               reproduct:`
           
                 <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Package Size : 14*8*3 cm<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;Material : Plastic<br />
               `
            },
        
          
          ];

          const deta6 = [

            {
               image: W1, prise:"$ 2200", ps:"0%", code:"  01" , title:"MEIBIN Purple Dial Square Women Watches(1631)", stock:"Stock in" ,
               reproduct:`  <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;  Dial Window Material Type: Hardlex <br />
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;   Dial Diameter: 26mm <br />
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;   Case Thickness: 9mm <br />
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;   Band Length: 18cm <br />
       <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;    Band Width: 6mm <br />
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;   Band Material Type: Stainless Steel <br />
         <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;   Feature: Shock Resistant,<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;  Water Resistant Style: Fashion & <br />
           <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Casual Water Resistance Depth: 3Bar <br />
           <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Clasp Type: Bracelet Clasp <br />
           <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Case Material: Alloy Movement: Quartz <br />
           <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Package included: -1 * Watch -1 * Gift Box<br />
    
     <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;1 Year offical warrenty
        `  
            
            },
            
            {
                     image:W2, prise:"$ 2350", ps:"42%", code:"02" , title:"Stylish Stone Bracelet Womens Watch(1629)", stock:"stock in",
                     reproduct: `
                   <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;  Brand Name: MEIBIN<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Case Diameter: 32 mm<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Case Thickness: 11mm<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Band Width: 13 mm<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Band Length: 22.6 cm<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Band Material: Stainless Steel<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Case Material: Alloy<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Movement: Japan Quartz<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Mirror Material: Hardlex<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Waterproof: 3 ATM<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Components Included:1×Watch , Gift Box 
    
     `
              },
            {
                     image:W3, prise:"$ 1150", ps:"11%" , code:"03",  title:"Bestwin Fashion Mens Watch Silver(1634)", stock:"stock in",
                     reproduct:`
                 <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Waterproof: yesDisplay <br />
                 <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; type: pointerMovement <br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; type: QuartzBrand Be
                   `
            },
            {
                    image:W4, prise:"$550", ps:"15%",  code:"04" , title:"Meibin Green Dial Luxury Dimond clock watch(1633)" , stock:" Stock In", 
                    reproduct:`
                   <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;  Dial Window Material Type: Hardlex <br />
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;   Dial Diameter: 26mm <br />
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;   Case Thickness: 9mm <br />
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;   Band Length: 18cm <br />
       <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;    Band Width: 6mm <br />
        <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;   Band Material Type: Stainless Steel <br />
         <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;   Feature: Shock Resistant,<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;  Water Resistant Style: Fashion & <br />
           <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Casual Water Resistance Depth: 3Bar <br />
           <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Clasp Type: Bracelet Clasp <br />
           <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Case Material: Alloy Movement: Quartz <br />
           <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Package included: -1 * Watch -1 * Gift Box<br />
    
     <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;1 Year offical warrenty
       
                    
                    `
            },
            {
                     image:W5, prise:"$1850", ps:"51%", code:"05" ,title:"Women's Watch chak Belt Luxury Square (Labaoli-1637)" , stock:"Stock In", 
                     reproduct:`
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Style: Women's<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Waterproof: yes<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Display type: pointer<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Movement type: Quartz<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Brand Labaoli<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;1 year official warrenty 
                        
                     
                     `
            },
            {
                     image:W6, prise:"$1590", ps:"31%", code: "06", title: "Starry Women's Stainless Steel Watch(1639)" , stock: "Stock  In", 
                     reproduct:`
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;  We take pride in our products as we believe they are amazing. However, <br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; we understand that buying things online can be daunting, especially for the first time, so we offer a 100% satisfaction guarantee.<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;If you don't have a positive experience for any reason, we will do whatever it takes to make sure you are 100% satisfied with your purchase.<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Choose the color : White : Blue<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Watch mirror Mineral strengthened flower glass<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Movement Original quartz movement Strap material Stainless steel strap<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Clasp Steel buckle water proof 30m life waterproof Watch case Alloy case<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;1 year warrenty <br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;Brand :(Bellaes by Malaysia )
          `
            
            },
            {
                     image:W7, prise:"$1650", ps:"31%", code: "07", title:" Jewelry Bracelet Fashion Green Quartz Watch for Women-1647" , stock:"Stock In",
                     reproduct:`
                 
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Brand Name: MEIBIN <br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Style: Luxury <br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Feature: Repeater<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Origin: mainland china<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Movement: quartz<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Case Thickness: 10mm<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Band Length: 18.2cm<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Dial Diameter: 25mm<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Band Width: 6mm<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Clasp Type: hook buckle<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; 1 year official warrenty       
    
    `
                     
            },
            {
                     image:W8, prise:"$1499", ps:"0%" , code: "08", title:" BINBONO Casual Metal Watch-Silver", stock:"Stock In" ,
                     reproduct:`
                  
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  Brand : Binbono<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  Waterproof: Yes<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  Waterproof performance: 30M<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  Dial diameter: 42mm<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  Mirror material: coated glass<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  Clasp style: Mesh belt buckle<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  Buckle material: stainless steel<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  Strap material: stainless steel<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  Dial shape: round<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  Case material: metal<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp;  Warrenty-6 month         
                  `
            },
            {
                     image:W9, prise:"$1890", ps:"10%",   code:"09", title:"Arabic Calligraphy Watch ",  stock:"Stock In" ,
                     reproduct:`
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Stainless steel case with mineral dial window<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Unique round dial with retro carving decorative pattern<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Tattoo Pattern Carved stainless steel bracelet, fold-over clasp with double push-button<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Case Diameter: 42 mm/1.65 in, Case Thickness: 12 mm/0.47 in,<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Band Width: 20 mm/ 0.79 in, Max Band Perimeter (adjustable): 210 mm/8.27 in      
                  
                  `
            },
            {
                     image:W10, prise:"$2290", ps:"51%" , code:"10", title:"crystal fashion women's quartz watch -1646 ", stock:"Stock In" , 
                     reproduct:`
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; arameter (Approx):<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; rand Name: MEIBIN<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; ase Diameter: 32 mm<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; ase Thickness: 11mm<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; and Width: 13 mm<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; and Length: 22.6 cm<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; and Material: Stainless Steel<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; ase Material: Alloy<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; ovement: Japan Quartz<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; irror Material: Hardlex<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; aterproof: 3 ATM<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; omponents Included:<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; ×Watch , Gift Box        
                                    `
                    
            },
            {
                     image:W11, prise:"$2550", ps:"15%", code:"11", title:" New Fashion Steel Band Women's Watch (Labaoli -1638)", stock:"Stock In" ,
                     reproduct:`
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Brand Name: MEIBIN<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Case Diameter: 32 mm<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Case Thickness: 11mm<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Band Width: 13 mm<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Band Length: 22.6 cm<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Band Material: Stainless Steel<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Case Material: Alloy<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Movement: Japan Quartz<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Mirror Material: Hardlex<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Waterproof: 3 ATM<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Components Included:<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; 1×Watch , Gift Box   
                                `
            },
            {
                     image:W12, prise:"$1790", ps:"22%", code:"12", title:"MEIBIN Purple Dial Women Watches (1630) ", stock:"Stock In",
                     reproduct:`
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Dial Window Material Type: Hardlex<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Dial Diameter: 26mm Case <br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Thickness: 9mm Band <br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Length: 18cm <br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Band Width: 6mm <br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Band Material Type: Stainless Steel <br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Feature: Shock Resistant,<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Water Resistant Style: Fashion & Casual <br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Water Resistance Depth: 3Bar <br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Clasp Type: Bracelet Clasp <br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Case Material: Alloy <br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Movement: Quartz <br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Package included: -1 * Watch -1 * Gift Box<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; 1 Year offical warrenty 
                            `
                    
            },
            {
              image:W13, prise:"$1790", ps:"22%", code:"13", title:"Watch Women's Bracelet Fashion-1641 ", stock:"Stock In",
              reproduct:`
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Style: Women's<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Waterproof: yes<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Display type: pointer<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Movement type: Quartz<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; Brand Gucci<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i> &nbsp;&nbsp; 1 year official warrenty 
    
                  `
             
     }
    
            
            
            ];


            const deta7 = [

              {
                 image: Wi1, prise:"$ 550", ps:"0%", code:"  01" , title:"Winter Warm Face Masks With Goggles", stock:"Stock in" ,
                 reproduct:` 
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Men & Women One Size<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Country/Region of Manufacture China<br />
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Cooler : Black.Red.Ash.Sky<br />
                 `
      
              },

              {
                image: Wi2, prise:"$ 3200", ps:"0%", code:"  02" , title:"Two in One Pillow Blanket", stock:"Stock in" ,
                reproduct:`  
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ২ ইন ১ পিললো ব্লাঙ্কেট (আমরা ফ্রি অর্ডার বুকিং নিচ্ছি) যা অর্ডার কনফার্ম করার ১০/১২ দিনের মধ্যে আমরা আপনার কাছে ডেলিভারি দিবো !<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; বিঃদ্রঃ অর্ডার কনফার্ম করে রাখতে আপনাকে অবশ্যই ৫০০ টাকা অগ্রিম পেমেন্ট করতে হবে<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Size: 40X40cm Open 105X145<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Color: Pink.Ash<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Whight 1.30kg<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Thick Sun Shade Blanket, Living Room, Children's Bedroom Decoration<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Made In Chaina
                `
     
             },
             {
              image: Wi3, prise:"$ 550", ps:"0%", code:"  03" , title:"Baby Ultra-Soft Fluffy Fleece Receiving Blanket", stock:"Stock in" ,
              reproduct:`  
              <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; * Item Fabric: Cotton/Fleece<br />
              <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; * Item Color: Milk white/ Pink/ Blue<br />
              <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; * Item Condition:100% Brand New<br />
              <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; * Item Description: Baby Sets Casual<br />
              <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; * Size: 3M = 84cm (width) *70 (length) cm, 6M= 90 (width) *78 cm (length)<br />
                            `
   
           },
           {
            image: Wi4, prise:"$ 250", ps:"0%", code:"  04" , title:"স্টাইলিস টুপি সেট মেরুন কালার", stock:"Stock in" ,
            reproduct:` 
              <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; একটি গলায় ব্যবহারের জন্য আরেকটি মাথায়।<br />
              <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ছেলে মেয়ে উভয়েই ব্যবহার করতে পারবে।<br />
              <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; টুপি সেট দুই পার্ট ,দুইটা মিলে একটি সেট।<br />
                          `
 
         },

         {
          image: Wi5, prise:"$ 2500", ps:"0%", code:"  05" , title:"H-TEC Hot Shawar", stock:"Stock in" ,
          reproduct:`  
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;এখন অনেকের গোসলের নাম শুনলেই ভয় হয়।<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;অনেকে তো শীতের দিনে গোসলই করতে চায় না।<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;শীতকে ভয় পাওয়ার দিন শেষ। এখন থেকে গোসল হবে ঝর্ণার গরম পানিতে, বিদ্যুৎ সাশ্রয়ী ইনস্ট্যান্ট হট ওয়াটার শাওয়ার এর মাধ্যমে!<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;খুবই সাশ্রয়ী মূল্যে ও ঝামেলামুক্ত ভাবে আপনার বাথরুমে লাগিয়ে ফেলুন একটি ইনস্ট্যান্ট হট ওয়াটার শাওয়ার।<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;-ব্রাজিলিয়ান টেকনোলজিতে তৈরি অটোমেটিক হট -ওয়াটার সাপ্লাই,<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;কম্প্যাক্ট ডিজাইন<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;-ব্যবহার করা অত্যন্ত সহজ<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;-৩টি টেম্পারেচার কন্ট্রোল: হট, ওয়ার্ম ও কোল্ড<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;-ইলেকট্রিক শাওয়ারটি ৭৫% পর্যন্ত বিদ্যুৎ সাশ্রয়ী -ইন্সট্যান্ট গরম পানি<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;-নিরাপদ ব্যবহার যোগ্য এবং ১০০% অটোমেটিক<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;-ভোল্টেজ: 220v<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;স্পেসিফিকেশনঃ<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;-১০০% নতুন এবং হাই কোয়ালিটি<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;-ওয়াটার সাপ্লাই, কম্প্যাক্ট ডিজাইন<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;-বডি ম্যাটেরিয়াল: কপার, সিলভার, উন্নতমানের প্লাস্টিক<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;-অ্যালয় হিটিং ম্যাটেরিয়াল<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp;-৯৫% থার্মাল
                      `

       },

       {
        image: Wi6, prise:"$ 1500", ps:"0%", code:"  06" , title:"ইলেক্ট্রিক রুম হিটার", stock:"Stock in" ,
        reproduct:`  
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; এই শীতে আপনার ঘরের উষ্নতা বজায় রাখতে ব্যবহার করুন রুম হিটার<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; নরমাল ফ্যান/ওয়ার্ম/হট এয়ার সিস্টেম<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; অ্যাডজাস্টেবল ফ্যান স্পিড এন্ড থার্মোস্ট্যাট ২টি হিটিং পাওয়ার (1000/2000W)<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; হাই কোয়ালিটি<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ব্র্যান্ড নিউ প্রোডাক্ট<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ব্র্যান্ড: Nova
                    `

     },

              ];



              const deta8 = [

                {
                   image: S1, prise:"$ 11600", ps:"0%", code:"  01" , title:"Dahua Brand এর ৪ ক্যামেরা প্যাকেজ", stock:"Stock in" ,
                   reproduct:` 
                     
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; 2MP (1080) FULL HD ক্যামেরা সাথে পাচ্ছেন ১ বছরের ওয়ারেন্টি <br />
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; আমাদের প্যাকেজ সুমহ :<br />
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; 4 Camera package =11,500 Taka.<br />
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; 8 camera package =19,500 Taka.<br />
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; N.B : আমাদের প্যাকেজ গুলো মনিটর ছাড়া।<br />
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ৪ ক্যামেরা 500GB & ৮ ক্যামেরা প্যাকেজ 1000GB।
                                          
                      `
        
                },
                {
                  image: S2, prise:"$ 14500", ps:"0%", code:"  02" , title:"PTZ বাল্ব সিস্টেম ওয়াইফাই আইপি ক্যামেরা", stock:"Stock in" ,
                  reproduct:`  
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Bulb Security Camera,E27 PTZ HD Infrared Night Vision Two Way Talk Baby Monitor Auto Tracking for Home Security<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ওয়াইফাই কানেকশন করে যেকোন যায়গা থেকেই লাইভ ভিডিও দেখা যাবে। কথা বলা ও শুনা যাবে।<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; High Definition: 1080P(Full-HD)<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Lens (mm): 3.6mm<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Style: Mini Camera<br />
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; 1 year warrenty   
                                    
                     `
       
               },
               {
                image: S3, prise:"$ 890", ps:"0%", code:"  03" , title:"A9 রিচার্জেবল মিনি ম্যাগনেট ক্যামেরা", stock:"Stock in" ,
                reproduct:` 
                  
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; নাইট ভিশন ক্যামেরাটি রাতের অন্ধকারেও স্পষ্ট ভিডিও ধারণ করতে সক্ষম। <br/>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ক্যামেরাটি ২৪ ঘন্টা ভিডিও ধারণ ক্ষমতা রাখে।<br/>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; বিদুৎ চলে যাওয়ার পর wifi বিচ্ছিন্ন হলে ১ ঘন্টা পর্যন্ত ক্যামেরাটি তে অফলাইন ভিডিও রের্কড হবে।<br/>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ক্যামেরাটি ৬৪ জিবি মেমোরি কার্ড সাপোর্টেডম্যাগনেট ওয়াল মাউন্টশার্ট ক্লিপক্যামেরা টি মোবাইলের অ্যাপ দ্বারা নিয়ন্ত্রনযোগ্য ।<br/>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ভিডিও রেজুলেশন ঃ 720 P- 1080P <br/>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; পরিমাপঃ  32 x 33 x 36 মিমি / 1.26 এক্স 1.30 এক্স 1.42 ইঞ্চি<br/>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ওজনঃ 13.5gm<br/>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; অনুপাতঃ 16:9<br/>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ব্যাটারিঃ 240 Mah<br/>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ব্যাটারী লাইফ টাইম ঃ ১ ঘন্টা ভিডিও ধারন করা যাবে <br/>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ভোল্টেজঃ ডিসি 5 Volt<br/>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; 32 GB মেমোরী সাপোর্ট করবে <br/>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ডুয়েলওয়ে অডিও সিষ্টেম <br/>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; সাথে থাকবে <br/>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ১ টি মিনি ক্যামেরা <br/>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ১ক্যাবল<br/>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ১ স্ট্রিপ<br/>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ১ ম্যানুয়াল<br/>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Softwere : HD WI -Fi PRO Cam 
                                    
                   `
     
             },
             {
              image: S4, prise:"$ 1500", ps:"0%", code:"  04" , title:"ভিডিও কলম ৩২ জিবি", stock:"Stock in" ,
              reproduct:` 
                
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; গোপনে কোন বিষয় বা কাজের ভিডিও করতে চান,<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; কেউ জানতেও পারবেনা যে আপনি ভিডিও করছেন ।<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; আমরা অনেকেই হয়ত বাস্তবে দেখেছি অথবা সিনেমায় দেখেছি, কলম এর মধ্যে লুকানো ক্যামেরা ।<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; এবার আমরা দিচ্ছি স্পাই কলম ক্যামেরা ।<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; আপনি চাইলে Pen Drive হিসাবেও ব্যবহার করতে পারবেন মেমরি 32 জিবি।<br />
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; 8MP ক্যামেরা সহ অনেক ফিচার।
                              
                 `
   
           },
           {
            image: S5, prise:"$ 1450", ps:"0%", code:"  05" , title:"Batton ক্যামেরা-৩২-জিবি", stock:"Stock in" ,
            reproduct:` 
              
              <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; এই ডিভাইসটি আপনি পেনড্রাইভ হিসাবে ও ব্যবহার করতে পারবেন .<br />
              <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; গোপনে কোন বিষয় বা কাজের ভিডিও করতে চান,<br />
              <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; কেউ জানতেও পারবেনা যে আপনি ভিডিও করছেন।<br />
              <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; আমরা অনেকেই হয়ত বাস্তবে দেখেছি অথবা সিনেমায় দেখেছি, কলম এর মধ্যে লুকানো ক্যামেরা ।<br />
              <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; এবার আমরা দিচ্ছি স্পাই batton ক্যামেরা ।<br />
              <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; আপনি চাইলে Pen Drive হিসাবেও ব্যবহার করতে পারবেন<br />
              <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; মেমরি 32 জিবি।<br />
              <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; 8MP ক্যামেরা সহ অনেক ফিচার 
                          
               `
 
         },
         {
          image: S6, prise:"$ 6500", ps:"0%", code:"  06" , title:"নাইট ভিশন Hidden ক্যামেরা", stock:"Stock in" ,
          reproduct:` 
            
          <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Strong Function: This hidden mini camera Supports real-time video recording, night vision, snapshot.<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Night Vision Camera: 6pcs black LED around the lens, it’s an ideal portable home security camera.<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Motion Detection: When object moves on the front of the obscure lens, motion detection will be activated and the device will start recording automatically.<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Easy To Operate: Video recording, take photos and infrared light all can be achieved by this mufti-functional item.<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Moreover, they can be enabled with the simple touch of a button.<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Portable size and lightweight makes it easy to wear and carry.<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Note:<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; 1. Please read manual before using this product!<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; 2. Please charging camera 3-5 hours at first time.<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Main Specifications:<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; 1. Video Format ：AVI<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; 2. Video Resolution: 1920*1080P<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; 1280*720P 640*480P 25fps 3. Cycle Record : 5 minutes per section.<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; 4. The working temperature is -10℃-55℃.The battery is >-20℃.please use the camera in a suitable temperature.<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; 5. Battery capacity: 3.7V/500 mAH Lithium Battery<br />
          <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; 6. Recording last time: 70 minutes
                    
             `

       },



              ];
  

              const deta9 = [

                {
                   image: C1, prise:"$ 350", ps:"0%", code:"  01" , title:"Bioaqua Pink Magic Nenhong Cream 30g", stock:"Stock in" ,
                   reproduct:` 
                     
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Maid In China
                     
                      
                      `
        
                },
                {
                  image: C2, prise:"$ 500", ps:"0%", code:"  02" , title:"Intensive UV Sunblock Cream SPF 50+", stock:"Stock in" ,
                  reproduct:` 
                    
                     <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Made In China 
                    
                     
                     `
       
               },
               {
                image: C3, prise:"$ 1290", ps:"0%", code:"03" , title:"Neutrogena TGel Therapeutic Shampoo (250ml)", stock:"Stock in" ,
                reproduct:` 
                  
                   <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Made In china 
                  
                   
                   `
     
             },
             {
              image: C4, prise:"$ 1100", ps:"0%", code:"  04" , title:"Palmer’s Cocoa Butter Formula Stretch Marks Massage Lotion (250ml)", stock:"Stock in" ,
              reproduct:` 
                
                 <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Made in china 
                
                 
                 `
   
           },
           {
            image: C5, prise:"$ 580", ps:"0%", code:"  05" , title:"Boots Rose Facial Wash 150ml", stock:"Stock in" ,
            reproduct:` 
              
               <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Madde In china
              
               
               `
 
         },
         {
          image: C6, prise:"$ 550", ps:"0%", code:"  06" , title:"ফুড ফ্রেশ-কিপিং সিলা (২-পিস)", stock:"Stock in" ,
          reproduct:` 
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Tightly sealing the bag and longer preserving the foods.<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Premium material,Made of plastic and spring, durable and light weight.<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Fit for most of the slim bag, specially good for those very thin and flimsy bags like bread bags, sandwich and salad bags.<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Material: ABS<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Size: 6.2*1.2cm<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Color: Pink/Blue/Green/white(random color)<br />
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Weight: 10g
                        
             `

       },

              ];

              const deta10 = [

                {
                   image: E1, prise:"$ 2600", ps:"0%", code:"  01" , title:"ড্রিল মেশিন সেট (১২০ পিছ)", stock:"Stock in" ,
                   reproduct:` 
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; প্যাকেটে আছে: <br/ >
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ১ পিস ড্রিল (৫০০ ওয়ার্ট)<br/ >
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ১ পিস ড্রিল মেশিনের কার্বন<br/ >
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ১ পিস হ্যামার হ্যান্ডেল<br/ >
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ১ পিস হাতুড়ি<br/ >
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ১ পিস স্ক্রু ড্রাইভার<br/ >
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ১ পিস কম্বিনেশন প্লাস<br/ >
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ১ পিস সিলাই রেন্জ<br/ >
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ১ পিস কেবল কাটার<br/ >
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ১ পিস মেজারিং টেপ<br/ >
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ৯ পিস সকেট রেন্জ (গুটি সেট)<br/ >
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ১২ পিস স্ক্রু সেট (১২ রকমের)<br/ >
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ১৫ পিস ড্রিল বিট<br/ >
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ৫০ পিস রয়েল প্লাগ<br/ >
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ১ পিস টুল বক্স
                                          
                      `
        
                },
                {
                  image: E2, prise:"$ 850", ps:"0%", code:"  02" , title:"Electronic Bug Mosquito Killer", stock:"Stock in" ,
                  reproduct:` 
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; মশার যন্ত্রনা? ব্যবহার করুন এ গ্যাজেটটি। মশা মরবেই। <br/>
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ইলেকট্রনিক Mosquito কিলার এর সাহায্যে এখন মশার হাত থেকে বাঁচুন,<br/>
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; মশা ছাড়াও অন্যান্য পোকামাকড় ধ্বংস করে,<br/>
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; কোনো রাসায়নিক ধোঁয়া বা গন্ধ নেই; তাই মানব শরীরের জন্য ক্ষতিকর নয়,<br/>
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; একটি শক্তিশালী আলোর সাহায্যে পতঙ্গকে আকৃষ্ট করে এবং ইলেক্ট্রিক Fan দিয়ে ধ্বংস করে দেয়।
                     
                     `
       
               },
               {
                image: E3, prise:"$ 390", ps:"0%", code:"  03" , title:"মস্কুইটো কিলার র‍্যাকেট ব্যাট", stock:"Stock in" ,
                reproduct:` 
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ইলেকট্রনিক Mosquito কিলার এর সাহায্যে এখন মশার হাত থেকে বাঁচুন <br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; মশা ছাড়াও অন্যান্য পোকামাকড় ধ্বংস কর<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; কোনো রাসায়নিক, ধোঁয়া বা গন্ধ নেই<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; তাই মানব শরীরের জন্য ক্ষতিকর নয়
                                  
                   `
     
             },
             {
              image: E4, prise:"$ 1400", ps:"0%", code:"  04" , title:"4 IN 1 পোর্টেবল সুইং মেশিন", stock:"Stock in" ,
              reproduct:` 
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; পরিশ্রম ছাড়াই ঝটপট ভালো সেলাই করতে নিয়ে এসেছি মিনি ফোর ইন ওয়ান পোর্টেবল সেলাই মেশিন। <br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; এই মেশিন দিয়ে আপনি অনেক কিছু সেলাই করতে পারবেন একদম বড় মেশিনের মত।<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; এটি মিনি সাইজ, হালকা এবং সহজে বহনযোগ্য , ব্যাগে বহন করতে পারবেন।<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; চারটি AA ব্যাটারিতে চলে অথবা বিদ্যুৎ -এ অ্যাডাপটার ব্যবহার করে চালাতে পারবেন ।<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ইজি ফুট কন্ট্রোলের জন্য প্যাডেল তাই পা দিয়েও চালাতে পারবেন।<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ২টি স্পিড কন্ট্রোল। AC/DC অপারেশন। প্রি- থ্রেডেড এবং রেডি টু ইউজ।<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; সেলাই সুবিধার জন্য মেশিনের হেড-এ রয়েছে একটি লাইট যা আপনার সেলাইয়ের সময় অতিরিক্ত আলো দিবে।<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; ৩টি মেটাল ববিন।১টি ফুট প্যাডেল। ১টি নিডল। ১টি নিডল থ্রেডার।<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; আমাদের মেশিনটি অরিজিনাল তাই রয়েছে এক বছরের গ্যারান্টি।
                                
                 `
   
           },
           {
            image: E5, prise:"$ 580", ps:"0%", code:"  05" , title:"LED Football Lamp 40 watts", stock:"Stock in" ,
            reproduct:` 
              
               
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Color Temperature:(5500-7000K) <br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; LED Chip Model: 2835<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Occasion: living room<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Voltage: AC 85-265V<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Luminous Flux: 1000 - 1999 Lumens<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Shape: Globe<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Average Life (hrs): 20000<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Length: 150MM<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Item Type: LED Bulbs<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Led Bulb Type: Bubble Ball Bulb<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; LED Chip Brand: Epistar<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Certification: ROHS<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Beam Angle(°): 360°<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Base Type: E27<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Power Tolerance: 1%<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Type: LED folding bulb<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Bulb: LED Light Bulb<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; LED: LED Light<br/>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Watts: AC 85-265V
                              
               `
 
         },
         {
          image: E6, prise:"$ 350", ps:"0%", code:"  06" , title:"স্টেইনলেস স্টিল ইলেকট্রিক কেটলি", stock:"Stock in" ,
          reproduct:` 
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Made from high-quality food grade stainless steel, it is safe to use. <br/>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; With 1500 watts, this electric kettle boils water faster than other kettle.<br/>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; With non-slip grip, soft touch, comfortable angle, to prevent the hand sliding.<br/>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; The auto shut-off function helps keep the kettle from boiling dry.<br/>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Large capacity and easy to clean.<br/>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Descriptions:<br/>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Designed with safe and convenient base heating<br/>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; It is compact and looks great on the counter.<br/>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>&nbsp;&nbsp; Secure and nice looking, great for home use.
             
             `

       },


              ];



  

  return (
    <ShareDeta.Provider value={{deta, deta1, deta2, deta3, deta4, deta5, deta6, deta7, deta8 , deta9, deta10}}>
      {children}
    </ShareDeta.Provider>
  );
};
