import React from 'react'
import { useState } from 'react'

export default function faqs() {
    const [show, useShow] = useState(false)

    const showAns = () => {
        let queStatus = document.getElementById("que-icon")
        useShow(!show)
        show ? queStatus.classList.remove("rotate-45") : queStatus.classList.add("rotate-45");
    }
    
    const [qna, seQna] = useState([
        {que:"", ans: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"},
    ])




  return (
    <div><div className="w-full border-b-8 border-gray-600">
              <div className="max-w-screen-lg mx-auto px-5 lg:px-0">
                  <div className="w-full my-10">
                      <div className="w-full flex flex-col items-center">
                          <div className="w-full">
                          <h2 className="font-semibold text-5xl text-white text-center leading-tight">Frequently Asked Questions</h2>
                          <div className="max-w-screen-md mx-auto mt-10 p-5 bg-gray-700" onClick ={()=>{showAns()}}>
                              <div className="flex items-center justify-between">
                              <p className="font-medium text-2xl text-white text-left">
                                  What is Netflix?
                              </p>
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" id="que-icon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">

                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                              </div>
                              {show && <div>
                              <p className="font-medium text-2xl text-white text-left border-t-3 border-black pt-10">
                                  Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                              </p>
                              <p className="font-medium text-2xl text-white text-left pt-5">
                                 You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                              </p></div>}
                          </div>
                          
                              
                          </div>
                      </div>
                  </div>
              </div>
      </div>
      </div>
  )
}
