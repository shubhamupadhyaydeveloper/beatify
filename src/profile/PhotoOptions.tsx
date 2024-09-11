import {View, Text, useWindowDimensions, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {rotateX, snapPoint} from 'react-native-redash';
import {clamp} from 'lodash';

type prop = {
  setImage: (value: string) => void;
  onClose: () => void;
};

const PhotoOptions = ({setImage, onClose}: prop) => {
  const {width: ScreenWidth, height: ScreenHeight} = useWindowDimensions();
  const boxWidth = 200;
  const side = (ScreenWidth + boxWidth) / 2;
  const SNAP_POINTS: number[] = [-side, 0, side];

  const bgColorProgress = useSharedValue(0);
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const savedoffset = useSharedValue({x: 0, y: 0});
  const scale = useSharedValue(0)
  const saveScale = useSharedValue(0)
  const visible =  useSharedValue(true)

  useEffect(() => {
    bgColorProgress.value = withTiming(1, {duration: 250});
  }, []);

  const backgroundStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        bgColorProgress.value,
        [0, 1],
        ['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.9)'],
      ),
    };
  });

  const panGesture = Gesture.Pan()
    .onStart(() => {
      savedoffset.value = {
        x: x.value,
        y: y.value,
      };
    })
    .onUpdate(e => {
      (x.value = e.translationX + savedoffset.value.x),
        (y.value = e.translationY + savedoffset.value.y);
    })
    .onEnd(e => {
      const dest = snapPoint(y.value, e.velocityY, [
        0,
        Math.floor((ScreenHeight + 300) / 2),
      ]);

      //   console.log("this is dest",dest)
      console.log('this is x value', x.value);
      //   console.log("this is y value",y.value)
      //   console.log(ScreenWidth + 200)
      console.log('this is velocity x', e.velocityX);
      console.log(SNAP_POINTS);
      //   console.log(dest)
      //   console.log("this is velocity y",e.velocityY)
      console.log(dest);

      y.value = withSpring(dest, {velocity: e.velocityY});
      x.value = withSpring(0, {velocity: e.velocityX});

      if (dest === 506) {
        setTimeout(() => {
          onClose();
        }, 200);
      }

      //   x.value = withSpring(dest,{velocity : e.velocityX})
      //   y.value = withSpring(0,{velocity : e.velocityY})
    })
    .runOnJS(true);

  const panAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });

  const visibleStyle = useAnimatedStyle(() => {
     return {
        opacity : visible.value === true ? 1 : 0
     }
  })

  const tapGesture = Gesture.Tap().onBegin(() => {
         visible.value = !visible.value
  })

  return (
    <GestureHandlerRootView>
        
      <Animated.View
        style={[backgroundStyle, {width: ScreenWidth, height: ScreenHeight}]}
        className="items-center justify-center flex">
        <GestureDetector gesture={panGesture}>
          <Animated.View
            style={[panAnimationStyle]}
            className="w-full h-[300px] bg-white items-center justify-center">
            <Text className="text-black">close</Text>
          </Animated.View>
        </GestureDetector>
      </Animated.View>
      <TouchableOpacity
        onPress={onClose}
        className="absolute top-0 self-center">
        <Text>close</Text>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
};

export default PhotoOptions;
