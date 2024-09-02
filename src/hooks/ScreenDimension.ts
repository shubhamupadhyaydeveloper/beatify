import { useWindowDimensions } from "react-native";

export const {width:ScreenWidth,height:ScreenHeight} = useWindowDimensions()
export const isLandscape = ScreenWidth > ScreenHeight