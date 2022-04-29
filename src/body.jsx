import React from 'react'
import tv from './images/tv.png'
import phone from './images/phone.png'
import kids from './images/kids.png'


export default function body() {
  return (
      <div>
          <div className="w-full border-y-8 border-gray-600">
              <div className="max-w-screen-lg mx-auto px-5 lg:px-0">
                  <div className="w-full my-10">
                      <div className="w-full flex flex-col lg:flex-row items-center">
                          <div className="w-full md:w-1/2">
                              <h2 className="font-semibold text-5xl text-white text-left leading-tight">Enjoy on your TV.</h2>
                              <p className="font-medium text-2xl text-white text-left mt-5">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                          </div>
                          <div className="w-full md:w-1/2"><img src={tv} alt="tv-image" className="w-full" /></div>
                      </div>
                  </div>
                  
              </div>
          </div>
          <div className="w-full border-b-8 border-gray-600">
              <div className="max-w-screen-lg mx-auto px-5 lg:px-0">
                  <div className="w-full my-10">
                      <div className="w-full flex flex-col lg:flex-row items-center">
                          <div className="w-full md:w-1/2"><img src={phone} alt="tv-image" className="w-full" /></div>
                          <div className="w-full md:w-1/2">
                              <h2 className="font-semibold text-5xl text-white text-left leading-tight">Download your shows to watch offline.</h2>
                              <p className="font-medium text-2xl text-white text-left mt-5">Save your favorites easily and always have something to watch.</p>
                          </div>
                          
                      </div>
                  </div>
                  
              </div>
          </div>
          <div className="w-full border-b-8 border-gray-600">
              <div className="max-w-screen-lg mx-auto px-5 lg:px-0">
                  <div className="w-full my-10">
                      <div className="w-full flex flex-col lg:flex-row items-center">
                    
                          <div className="w-full md:w-1/2">
                              <h2 className="font-semibold text-5xl text-white text-left leading-tight">Watch anywhere.</h2>
                              <p className="font-medium text-2xl text-white text-left mt-5">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                          </div>
                          
                      </div>
                  </div>
                  
              </div>
          </div>
          <div className="w-full border-b-8 border-gray-600">
              <div className="max-w-screen-lg mx-auto px-5 lg:px-0">
                  <div className="w-full my-10">
                      <div className="w-full flex flex-col lg:flex-row items-center">
                          <div className="w-full md:w-1/2"><img src={kids} alt="tv-image" className="w-full" /></div>
                          <div className="w-full md:w-1/2">
                              <h2 className="font-semibold text-5xl text-white text-left leading-tight">Create profiles for kids.</h2>
                              <p className="font-medium text-2xl text-white text-left mt-5">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                          </div>
                          
                      </div>
                  </div>
                  
              </div>
          </div>
      </div>
  )
}
