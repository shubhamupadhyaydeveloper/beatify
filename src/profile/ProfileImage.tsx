import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  Vibration,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

type props = {
  image: string;
  onClose: () => void;
};

const ProfileImage = ({image, onClose}: props) => {
  const {width: ScreenWidth, height: ScreenHeight} = useWindowDimensions();
  const offset = useSharedValue({x: 0, y: 0});
  const savedOffset = useSharedValue({x: 0, y: 0});

  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);

  const pinchGesture = Gesture.Pinch()
    .onUpdate(e => {
      scale.value = savedScale.value * e.scale;
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });

  const ImageAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: scale.value},
        {translateX: offset.value.x},
        {translateY: offset.value.y},
      ],
    };
  });

  const panGesture = Gesture.Pan()
    .onBegin(() => {
      scale.value = withSpring(0.8);
    })
    .onUpdate(e => {
      offset.value = {
        x: e.translationX + savedOffset.value.x,
        y: e.translationY + savedOffset.value.y,
      };
    })
    .onEnd(() => {
      savedOffset.value = {
        x: offset.value.x,
        y: offset.value.y,
      };
    })
    .onFinalize(() => {
      scale.value = withSpring(1);
   
    });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <GestureDetector gesture={pinchGesture}>
        <View
          className=" items-center justify-center flex"
          style={{
            width: ScreenWidth,
            height: ScreenHeight,
            backgroundColor: 'rgba(0,0,0,0.9)',
          }}>
          <Animated.View style={[ImageAnimationStyle]}>
            <Image
              source={{uri: image}}
              style={{width: ScreenWidth * 0.7, height: ScreenHeight * 0.4}}
              className="rounded-sm"
            />
          </Animated.View>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default ProfileImage;
