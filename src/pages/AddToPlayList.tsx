import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Animated, {
  FadeInRight,
  FadeOutRight,
  LinearTransition,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
  JumpingTransition,
  SequencedTransition,
  FadeOutLeft,
  LayoutAnimationConfig,
} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import { primaryColor, tertiaryColor } from 'src/constant/color';

const AddToPlayList = () => {
  const {width: ScreenWidth, height: ScreenHeight} = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const _spacing = 10;
  const bgInActive = '#2d2b2b';
  const bgActive = primaryColor;
  const textActive = '#ffffff';
  const textInActive = '#343434';

  type Datalable = {
    icon: string;
    label: string;
  };

  const options: Datalable[] = [
    {
      icon: 'tag',
      label: 'Tag',
    },
    {
      icon: 'smile-circle',
      label: 'Smile',
    },
    {
      icon: 'play',
      label: 'Play',
    },
    {
      icon: 'star',
      label: 'Star',
    },
  ];

  const selectedValue = useSharedValue(0); // Initialize shared value for animation

  const handlePress = (index: number) => {
    setCurrentIndex(index);
    selectedValue.value = withTiming(index, {duration: 500}); // Animate background on index change
  };

  return (
    <SafeAreaView className="px-5 mt-3">
      <View className=" flex flex-row gap-[5px]">
        {options.map((item, index) => {
          const isSelected = index === currentIndex;

          const animatedStyle = useAnimatedStyle(() => {
            const backgroundColor = interpolateColor(
              selectedValue.value === index ? 1 : 0,
              [0, 1],
              [bgInActive, bgActive],
            );
            return {backgroundColor};
          });

          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.85}
              onPress={() => handlePress(index)}>
              <Animated.View
                layout={isSelected ? SequencedTransition : undefined}
                key={index}
                className="flex flex-row"
                style={[
                  {
                    padding: _spacing,
                    gap: 2,
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: isSelected ? bgActive : bgInActive,
                  },
                ]}>
                <AntDesignIcon name={item.icon} color={isSelected ? "#000000" : "#ffffff"} size={20} />
                {isSelected && (
                  <Animated.Text
                    entering={FadeInRight.springify()
                      .damping(80)
                      .stiffness(200)}
                    exiting={FadeOutRight.springify()
                      .damping(80)
                      .stiffness(200)}
                    style={{color: isSelected ? textActive : textInActive}}
                    className="ml-1 text-[14px] font-[RadioCanadaBig-Bold] ">
                    {item.label}
                  </Animated.Text>
                )}
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </View>

      <LayoutAnimationConfig skipEntering>
        <Animated.View
          key={`tab-${currentIndex}`}
          entering={FadeInRight.springify().damping(80).stiffness(200)}
          exiting={FadeOutLeft.springify().damping(80).stiffness(200)}
          className="self-center"
          style={{
            borderRadius: 10,
            marginTop: 10,
            height: ScreenHeight * 0.82,
            width: ScreenWidth * 0.9,
            backgroundColor: '#2d2b2b',
          }}></Animated.View>
      </LayoutAnimationConfig>
    </SafeAreaView>
  );
};

export default AddToPlayList;
