import { create } from "zustand";


const useUpcoming = create<StoreState>((set)=>({
    upcoming:[],
    getUpcoming:(data:IUpcoming[])=>{
        set({upcoming:data})
    }
}))

export default useUpcoming