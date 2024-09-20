import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Vibration,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

type prop = {
  image: string;
  onClose: () => void;
};

type options = {
  color: string;
  name: string;
};

const PhotoProfile = ({image, onClose}: prop) => {
  const {width: ScreenWidth, height: ScreenHeight} = useWindowDimensions();
  const boxWidth = 200;
  const side = (ScreenWidth + boxWidth) / 2;
  const SNAP_POINTS: number[] = [-side, 0, side];

  const bgColorProgress = useSharedValue(0);
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const savedoffset = useSharedValue({x: 0, y: 0});
  const scale = useSharedValue(1);
  const saveScale = useSharedValue(0);
  const [visible, setVisible] = useState(true);

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
      setVisible(false);
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
      y.value = withSpring(dest, {velocity: e.velocityY});
      x.value = withSpring(0, {velocity: e.velocityX});

      if (dest === 506) {
        setTimeout(() => {
          onClose();
        }, 100);
      }
      setVisible(true);
    })
    .runOnJS(true);

  const pinchGesture = Gesture.Pinch()
    .onBegin(() => {
      saveScale.value = scale.value;
      setVisible(false);
    })
    .onUpdate(e => {
      scale.value = e.scale * saveScale.value;
    })
    .onEnd(e => {
      if (scale.value < 1) {
        scale.value = withSpring(1, {velocity: e.velocity});
        Vibration.vibrate(100);
      }
      setVisible(true);
    })
    .runOnJS(true);

  const panAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: x.value},
        {translateY: y.value},
        {scale: Math.max(scale.value, 0.7)},
      ],
    };
  });

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={Gesture.Simultaneous(panGesture, pinchGesture)}>
        <Animated.View
          style={[backgroundStyle, {width: ScreenWidth, height: ScreenHeight}]}
          className="items-center justify-center flex">
          <Animated.View
            style={[panAnimationStyle]}
            className="w-full  items-center justify-center">
            <Image
              className="w-full h-[250px]"
              source={{
                uri: image,
              }}
            />
          </Animated.View>
        </Animated.View>
      </GestureDetector>
      {visible && (
        <View
          className="absolute top-[3vh] right-[3vw] self-center items-center
        ">
          <View
            className="w-[80px] h-[40px] bg-white rounded-full  flex flex-row justify-center items-center
        ">
            <Text className="text-black -mt-1">close</Text>
            <AntDesignIcon name="arrowdown" color={'black'} size={20} />
          </View>
        </View>
      )}
    </GestureHandlerRootView>
  );
};

export default PhotoProfile;
