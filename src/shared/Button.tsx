import { View, Text, useWindowDimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';

type Props = {
  text: string;
  bgColor?: string;
  radius?: number;
  onPress?: () => void;
  btnWidth?: number;
  textSize?: number;
  textColor?: string;
  isSubmitting?: boolean;
};

const SharedButton = ({
  text,
  radius,
  onPress,
  btnWidth,
  textSize,
  bgColor,
  textColor,
  isSubmitting,
}: Props) => {
  const { width, height } = useWindowDimensions();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={isSubmitting}
      style={{
        width: btnWidth ?? width * 0.8,
        height: height * 0.065,
        borderRadius: radius ?? 15,
        backgroundColor: bgColor ?? '#21c856',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
     <Text
          style={{color: textColor ?? 'white', fontFamily: 'OpenSans-Bold'}}>
          {isSubmitting ? <ActivityIndicator size="large" color="#fff" /> :  text}
        </Text>
    </TouchableOpacity>
  );
};

export default SharedButton;
