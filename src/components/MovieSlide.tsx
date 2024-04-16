import { useEffect } from 'react'
import useApi from '../hooks/useApi'
import useMovieOrTv from '../store/movieOrTv'

function MovieSlide({type}:{type:string}) {
    const { data } = useApi('movie/popular') 
    const {getMovieOrTv} = useMovieOrTv()
    useEffect(()=>{
        getMovieOrTv(data, type)
      },[data])
    
  return (
    <div>
        <h2>{type === 'movie' ? 'Films' : 'Tvs'}</h2>
        {
            data.map((movie:IMovieTv,index:number)=>{
                return <h2>{movie.title}</h2>
            })
        }
    </div>
  )
}

export default MovieSlide