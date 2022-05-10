import axios from "axios"
const imageurl = "https://image.tmdb.org/t/p/original/"
import { useState, useEffect } from "react"





const idlist = (props) => {
    const [lists, setLists] = useState([])
    const [render, setRender] = useState(true)
    const listmovies = lists.map(list =>
        ( <div className="relative" key={list.index}>
        <img src={`${imageurl}${list.poster_path}`} className="w-full hover:-translate-y-2 transition-all duration-200" alt="" />
        <div className="p-2 w-full h-full absolute z-10 top-0 bg-gradient-to-t flex flex-col justify-end from-black transform opacity-0 hover:opacity-100 transition-all duration-200">
            <p className="text-white text-xl font-medium mb-1 text-left">{list.title}</p>
            <p className="text-gray-300 text-sm text-left font-normal">Ratings: {list.vote_average}</p></div>
                </div>)
        )



    useEffect(() => {
        axios.get(props.url).then(res => {
            console.log(res.data.items)
            setLists(res.data.items.sort(() => Math.random() - Math.random()).slice(0, 9))
            if (res.data.items.length === 0 || props.name === "Family" || props.name === "Romance") {
                setRender(false)
            }

            //console.log(lists)
            
        })
            
    }, [])
    return (
        <div>{render && <div>
            <h2 className="font-semibold text-2xl text-white text-left mx-5 md:mx-10 mt-10 mb-5">{props.name}</h2>
            <div className="w-full overflow-hidden grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-2  px-5 md:px-10 appearance-none mb-10">
              
             {listmovies}
                 
            </div></div>}
        </div>
    )
}


export default idlist;