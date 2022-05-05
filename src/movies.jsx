import axios from "axios"
import { useEffect, useState } from "react"
const apikey = "f489443c1aa8276f912ac60f1c1d9fd4"
const urlnew =`https://api.themoviedb.org/3/movie/550?api_key=f489443c1aa8276f912ac60f1c1d9fd4`

const movies = () => {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        axios.get(urlnew).then((res) => {
            //console.log(res)
            setMovie({
                title: res.data.title,
                backdrop: res.data.backdrop_path
            })
        })
        //console.log(movie)
    },[])

    return (
        
        <div>
            <div className="w-full bg-gray-700 h-36" ><img src={movie.backdrop} alt="" /></div>
        </div>
    )
}

export default movies