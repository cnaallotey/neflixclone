import axios from "axios"
import { useEffect, useState } from "react"
const apikey = "f489443c1aa8276f912ac60f1c1d9fd4"
const urlnew = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`
const imageurl = "https://image.tmdb.org/t/p/original/"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const category = (props) => {
    const [lists, setLists] = useState([])
    const listmovies = lists.map(list =>
        ( <div className="" key={list.index} className=" flex flex-row">
        <img src={`${imageurl}${list.poster_path}`} className="w-1/2 h-full hover:-translate-y-2 transition-all duration-200" alt="" />
        <div className="p-2 flex flex-col justify-end transition-all duration-200">
            <p className="text-white text-xl font-medium mb-1 text-left">{list.title}</p>
            <p className="text-gray-300 text-sm text-left font-normal">Ratings: {list.vote_average}</p>
             <p className="text-gray-300 text-sm text-left font-normal">Year: {(list.release_date).substr(0, 4)}</p>
        </div>
                </div>)
        )



    useEffect(() => {
        axios.get(props.url).then(res => {
            setLists((res.data.results).filter((movie)=> (movie.release_date).substr(0, 4) == "2022"))
           // console.log(lists)
            //const mov = res.data.results
           // const flitered = mov.filter((movie)=> (movie.release_date).substr(0, 4) === "2022" || "2021")
            
       }) 
    },[])
    return (
        <div>
            <h2 className="font-semibold text-2xl text-white text-left mx-5 md:mx-10 mt-10 mb-5">{props.name}</h2>
            <div className="w-full overflow-hidden grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10  px-5 md:px-10 appearance-none mb-10">
              
             {listmovies}
                 
            </div>
        </div>
    )
}

export default category