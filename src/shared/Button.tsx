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
        height: height * 0.07,
        borderRadius: radius ?? 15,
        backgroundColor: bgColor ?? '#62CD5D',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isSubmitting ? (
        <ActivityIndicator color={textColor ?? 'white'} />
      ) : (
        <Text style={{ color: textColor ?? 'white', fontWeight: 'bold', fontSize: textSize ?? 17 }}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default SharedButton;
