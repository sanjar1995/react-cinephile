import { create } from "zustand";


const useMovieTv = create<movieTvStore>((set)=>({
    movie:[],
    tv:[],
    getMovieTv:(data:IUpcoming[],type:string)=>{
        if(type === 'movie'){
            set({movie:data})
        }else{
            set({tv:data})
        }
    }
}))

export default useMovieTv