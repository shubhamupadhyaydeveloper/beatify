import { useEffect } from "react"
import SystemNavigationBar from 'react-native-system-navigation-bar';

type prop = {
  color? : string
}

export const setNavColor = ({color}:prop) => {
  useEffect( () => {
    SystemNavigationBar.setNavigationColor(color ?? "#252323");
},[])
}