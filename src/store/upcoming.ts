import {create} from 'zustand';



interface StoreState {
  upcoming: any[];
  getUpcoming: (data:any[]) => void;
}

const useStore = create<StoreState>((set) => ({
  upcoming: [],
  getUpcoming: (data:any[]) => {
    set({ upcoming: data });
  },
}));

export default useStore;