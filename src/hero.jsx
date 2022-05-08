import React, { useEffect, useState } from 'react'
  var words = ['Movies' , "TV Series", "and more"],
    //part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 150;
 
export default function hero() {
     const [part ,setPart] = useState()
    
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    setPart(words[i].substr(0, offset));
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    //document.getElementsByClassName('.word').text(part);
  },speed);
     };
     useEffect(() => {
         wordflick()
     },[])


   return (
       <div><div className=" w-full">
           <div className="max-w-screen-md mx-auto px-5 lg:px-0 py-40">
               <div>
                   <h1 className="text-7xl font-bold text-white text-center">
                       Unlimited <span className="word">{part}</span>.
                   </h1>
                   <p className="text-3xl font-semibold text-white text-center mt-5">Watch anywhere. Cancel anytime.</p>
                   <p className=" text-lg font-normal text-white text-center mt-5">Ready to Watch? Enter your email to create or restart your membership</p>
                   <div className="flex w-full mt-5">                       <input type="text" className="px-3 text-2xl font-normal flex flex-1 py-3 focus:outline-none" placeholder="Enter email" />
                       <button className="px-5 font-normal text-2xl bg-red-600 h-auto text-white flex items-center">
                           <span>Get Started</span>
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <                             path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg></button>
                   </div>
               </div>
           </div>
       </div>
       </div>
   )
 }
 