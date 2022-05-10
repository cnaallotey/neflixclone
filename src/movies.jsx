import axios from "axios"
import Category from "./category"
import Idlist from "./idlist"
import { useEffect, useState } from "react"
const apikey = "f489443c1aa8276f912ac60f1c1d9fd4"
const urlnew = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`
const imageurl = "https://image.tmdb.org/t/p/original/"
const getlist = "https://api.themoviedb.org/3/genre/movie/list?api_key=f489443c1aa8276f912ac60f1c1d9fd4&language=en-US"





const movies = () => {
    const [movie, setMovie] = useState([])
    const [movielist, setMovielist] = useState([])
    useEffect(() => {
        axios.get(urlnew).then((res) => {
            //console.log(res.data)
            
            const randomMax = res.data.results.length;
            const rand = Math.floor(Math.random() * (randomMax - 0) + 0);
            //console.log(res.data.results[rand])
            setMovie({
                title: res.data.results[rand].title,
                backdrop: `${imageurl}${res.data.results[rand].backdrop_path}`,
                //genre: res.data.results[rand].genres.name,
                overview: res.data.results[rand].overview,
                rating: res.data.results[rand].vote_average,
                year: (res.data.results[rand].release_date).substr(0, 4)
            })
        })
        axios.get(getlist).then(res => {
            setMovielist(res.data.genres)
            console.log(res.data.genres)
        })
        //console.log(movie)
    },[])

    return (
        
        <div>
            <div className="w-full bg-gray-700 relative h-[45rem]">
                <img src={movie.backdrop} className="w-full h-full object-cover" alt="" />
                <div class="absolute top-0 h-full w-full bg-gradient-to-r from-black">
                    <div className="h-full flex flex-col justify-center items-start pl-5 md:pl-10">
                        <h2 className="text-6xl text-white text-left font-bold">{movie.title}</h2>
                        <div className="text-xl mt-4 font-semibold flex flex-row space-x-4 text-white">
                            <p className=" text-green-500">{movie.rating} ratings</p>
                            <p className=" text-white">{movie.year}</p>
                            <p className="hidden white">2 Seasons</p>
                        </div>
                        <p className="text-lg text-gray-300 font-normal max-w-2xl mt-4 text-left">{movie.overview}</p>
                        <div className=" mt-5 flex flex-row space-x-4 items-center">
                            <button className="text-xl font-medium text-black bg-white rounded-md px-5 py-4 flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-black" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                                </svg>Watch</button>
                            <button className="text-xl font-medium text-gray-200 border-2 border-gray-300 rounded-md px-5 py-4 flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-200 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>My list</button>
                        </div>
                        <p className="text-lg text-gray-300 font-normal max-w-2xl mt-4 text-left">Genre : {movie.genre}</p>
                    </div>
                </div>
            </div>
            <Category name="New Additions" url="https://api.themoviedb.org/3/movie/popular?api_key=f489443c1aa8276f912ac60f1c1d9fd4&language=en-US&page=1" />

            {movielist.map((list) => (
                <Idlist name={list.name} key={list.id} url={`https://api.themoviedb.org/3/list/${list.id}?api_key=f489443c1aa8276f912ac60f1c1d9fd4&language=en-US`}/>
            ))}
            

        </div>
    )
}

export default movies