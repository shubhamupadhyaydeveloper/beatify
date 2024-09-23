import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';

const Followers = () => {
  const options = ['help', 'manage', 'station', 'profile', 'detail', 'home'];
  const circleRadius = 120;
  const angleStep = (Math.PI * 2) / options.length;
  const intialRender = useSharedValue(0);

  useEffect(() => {
    intialRender.value = withTiming(1, {duration: 500});
  }, []);

  return (
    <SafeAreaView className="self-center mt-[10vh]">
      <View
        style={{
          width: circleRadius * 2 + 70,
          height: circleRadius * 2 + 70,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
        {options.map((item, index) => {
          const angle = angleStep * index;
          const y = circleRadius * Math.sin(angle);
          const x = circleRadius * Math.cos(angle);
          const buttonAnimationStyle = useAnimatedStyle(() => {
            return {
              opacity: withDelay(
                150 * index, 
                withTiming(intialRender.value, {duration: 1000}),
              ),
              transform: [
                {
                  translateX: withDelay(
                    150 * index,
                    withTiming(
                      interpolate(
                        intialRender.value,
                        [0, 1],
                        [0, x],
                        Extrapolation.CLAMP,
                      ),
                      {duration: 1000},
                    ),
                  ),
                },
                {
                  translateY: withDelay(
                    150 * index,
                    withTiming(
                      interpolate(
                        intialRender.value,
                        [0, 1],
                        [0, y],
                        Extrapolation.CLAMP,
                      ),
                      {duration: 1000},
                    ),
                  ),
                },
              ],
            };
          });
          return (
            <Animated.View
              style={[
                {
                  position: 'absolute',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                buttonAnimationStyle,
              ]}
              key={index}
              className="bg-white w-[70px] h-[70px] rounded-full items-center justify-center">
              <Text className="text-black font-[RadioCanadaBig-Bold]">
                {item}
              </Text>
            </Animated.View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Followers;
