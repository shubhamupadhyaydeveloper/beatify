import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import {mmkyStroage} from './mmkv';

type globleStateTypes = {
  userId: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  setToken: (accessToken: string, refreshToken: string, userId?: string) => void;
};

const useGlobalState = create<globleStateTypes>()(
  persist(
    set => ({
      userId: null,
      accessToken: null,
      refreshToken: null,
      setToken: (accessToken, refreshToken, userId) =>
        set({
          accessToken: accessToken,
          refreshToken: refreshToken,
          userId: userId,
        }),
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => mmkyStroage),
    },
  ),
);

export default useGlobalState;
