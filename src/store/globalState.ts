import {create} from 'zustand';
import {persist,createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      name: 'user-auth',
      storage : createJSONStorage(() => AsyncStorage)
    },
  ),
);

export default useGlobalState;
