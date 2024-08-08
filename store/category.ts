import { create } from 'zustand';


interface State { 
  activeId: number,
  setActiveId : (state : number) => void;
}

export const useCategory = create<State>((set) => ({
  activeId: 1,
  setActiveId: ((activeId : number) => set({activeId})),
}));
