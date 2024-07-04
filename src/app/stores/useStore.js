import { create } from 'zustand';

const useStore = create((set) => ({
  user: null,
  id: null,
  display_name: null,
  profile_pic: null,
  leagues: [],
  bets: [],
  setUser: (user) => set({
    user: user,  // Set the entire user object
    id: user.id,
    display_name: user.display_name,
    profile_pic: user.profile_pic
  }),
  addLeague: (league) => set((state) => ({ leagues: [...state.leagues, league] })),
  addBet: (bet) => set((state) => ({ bets: [...state.bets, bet] })),
}));

export default useStore;
