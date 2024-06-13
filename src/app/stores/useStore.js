
import { create } from 'zustand';

const useStore = create((set) => ({
  user: null,
  leagues: [],
  bets: [],
  setUser: (user) => set({ user }),
  addLeague: (league) => set((state) => ({ leagues: [...state.leagues, league] })),
  addBet: (bet) => set((state) => ({ bets: [...state.bets, bet] })),
}));

export default useStore;
