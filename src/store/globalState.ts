import {create} from 'zustand';

type globleStateTypes = {
  loggedIn: boolean;
  setLoggenIn: (value: boolean) => void;
};

const useGlobalState = create<globleStateTypes>(set => ({
  loggedIn: false,
  setLoggenIn: value => set({ loggedIn: value }),
}));

export default useGlobalState;
