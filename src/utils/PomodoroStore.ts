import { create } from "zustand";

type Store = {
    time: number;
    elapsedTime: number;
    setTime: (value: number) => void;
    setElapsedTime: (value: number) => void;
    resetElapsedTime: () => void;
};



const createTimeStore = (set: any, dft:number) => ({
    time: dft * 60,
    elapsedTime: dft * 60,
    // time: 10,
    // elapsedTime: 10,
    setTime: (value: number) => set({ time: value }),
    setElapsedTime: (value: number) => set({ elapsedTime: value }),
    resetElapsedTime: () => set(state => {console.log(state, set);return ({ elapsedTime: state.time})}),
})

const useWorkStore = create<Store>(set => createTimeStore(set, 30));
const useShortBreakStore = create<Store>(set => createTimeStore(set, 5));
const useLongBreakStore = create<Store>(set => createTimeStore(set, 10));

export {
    useWorkStore,
    useShortBreakStore,
    useLongBreakStore
}