import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type prop = {
  children: React.ReactNode;
  onPress?: () => void;
};

const CustomTouchableOpacity = ({onPress, children}: prop) => {
  const scale = useSharedValue(1);

  const animateStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(0.98, {stiffness: 150});
  };
  const handlePressOut = () => {
    scale.value = withSpring(1, {stiffness: 150});
  };

  return (
    <TouchableOpacity
    activeOpacity={.8}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <Animated.View style={[animateStyle]}>{children}</Animated.View>
    </TouchableOpacity>
  );
};

export default CustomTouchableOpacity;
