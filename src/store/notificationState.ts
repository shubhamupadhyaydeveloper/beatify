import { DimensionValue } from 'react-native';
import {create} from 'zustand';

type notificationStateType = {
  position : DimensionValue,
  notification: string | null;
  textColor : string | null;
  bgColor: string | null;
  showNofitication: (message: string,Color? : string,Text? : string | null,bottom? : DimensionValue) => void;
  removeNofitication: () => void;
};

export const notificationState = create<notificationStateType>((set, get) => ({
  position : 0,
  textColor : null,
  bgColor: null,
  notification: null,
  showNofitication: (value,Color,Text,bottom) => {
    const {notification} = get();
    if (notification) return;
    set({notification: value,bgColor : Color ?? "white",textColor : Text,position : bottom});
  },
  removeNofitication: () => set({notification: null}),
}));
