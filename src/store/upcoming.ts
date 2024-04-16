import { create } from "zustand";


const useUpcoming = create<upcomingStore>((set)=>({
    upcoming:[],
    getUpcoming:(data:IUpcoming[])=>{
        set({upcoming:data})
    }
}))

export default useUpcoming