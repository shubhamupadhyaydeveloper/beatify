import {create} from 'zustand';
import {persist,createJSONStorage } from 'zustand/middleware';
import { mmkyStroage } from './mmkv';

type globleStateTypes = {
  loggedIn: boolean;
  setLoggenIn: (value: boolean) => void;

};

const useGlobalState = create<globleStateTypes>()(
  persist(
    set => ({
      loggedIn: false,
      setLoggenIn: value => set({loggedIn: value}),
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => mmkyStroage),
    },
  ),
);

export default useGlobalState;
