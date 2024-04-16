
import { create } from "zustand";


const useMovieOrTv = create<movieOrTvStore>((set)=>({
    movie:[],
    tv:[],
    getMovieOrTv:(data:IMovieTv[], type:String)=>{
        if(type ==='movie'){
            set({movie:data})
        }else {
            set({tv:data})
        }
    }
}))

export default useMovieOrTv