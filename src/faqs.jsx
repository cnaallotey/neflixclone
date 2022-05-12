import React from 'react'
import { useState } from 'react'
//var qna =[ {que:" What is Netflix?", open:false, ans: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"},]

export default function faqs() {
    const [show, useShow] = useState(false)
    const [qna, setQna] = useState([
        { id: 1, que: " What is Netflix?", open: false, ans: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!" },
        { id: 2, que: "How much does Netflix cost?", open: false, ans: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from US$3.99 to US$11.99 a month. No extra costs, no contracts." },
        { id: 3, que: "Where can i watch?", open: false, ans: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere." },
        { id: 4, que: "How do i cancel?", open: false, ans: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." },
        { id: 2, que: "How much does Netflix cost?", open: false, ans: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from US$3.99 to US$11.99 a month. No extra costs, no contracts." },
        {id:2, que:"How much does Netflix cost?", open:false, ans: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from US$3.99 to US$11.99 a month. No extra costs, no contracts."},
    ])

    const showAns = (x) => {
        var temp_que = qna
        const found = qna.findIndex(obj => obj.id === x)
        let queStatus = document.getElementById("que-icon")
        temp_que[found].open = !temp_que[found].open
        temp_que.open ? queStatus.classList.remove("rotate-45") : queStatus.classList.add("rotate-45");
        setQna(qna=>([...temp_que]))
    }
    
    




  return (
    <div><div className="w-full border-b-8 border-gray-600">
              <div className="max-w-screen-lg mx-auto px-5 lg:px-0">
                  <div className="w-full my-10">
                      <div className="w-full flex flex-col items-center">
                          <div className="w-full">
                          <h2 className="font-semibold text-5xl text-white text-center leading-tight mb-10">Frequently Asked Questions</h2>
                          {qna.map((li)=>(<div className="max-w-screen-md mx-auto mb-2 p-5 bg-gray-700" key={li.id} onClick ={()=>{showAns(li.id)}}>
                              <div className="flex items-center justify-between">
                              <p className="font-medium text-2xl text-white text-left">
                                 {li.que}
                              </p>
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" id="que-icon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">

                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                              </div>
                              {li.open && <div>
                              <p className="font-medium text-2xl text-white text-left border-t-3 border-black pt-10">
                                  {li.ans}
                              </p>
                              <p className="font-medium text-2xl text-white text-left pt-5">
                                 You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                              </p></div>}
                          </div>))
                          }
                              
                          </div>
                      </div>
                  </div>
              </div>
      </div>
      </div>
  )
}
