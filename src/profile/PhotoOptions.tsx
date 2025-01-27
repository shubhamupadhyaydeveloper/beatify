import {View, Text, useWindowDimensions, TouchableOpacity, Platform, PermissionsAndroid} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  interpolateColor,
  Extrapolation,
  interpolate,
  withSequence,
  FadeInUp,
  FadeOutDown,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import IconIcons from 'react-native-vector-icons/Ionicons';
import CustomTouchableOpacity from '@shared/TouchableOpacity';
import ImagePicker from 'react-native-image-crop-picker';

type prop = {
  onClose: () => void;
  setImage : (value : string) => void;
  handleImagePress : () => void;
};

const PhotoOptions = ({onClose,setImage,handleImagePress}: prop) => {
  const scale = useSharedValue(0);
  const {width: ScreenWidth, height: ScreenHeight} = useWindowDimensions();
  const [visible, setVisible] = useState(false);
  const boxLayout = useRef({x: 0, y: 0, width: 0, height: 0});
  const optionScale = useSharedValue(0.9);


  useEffect(() => {
    scale.value = withTiming(50, {duration: 400});
    optionScale.value = withSequence(
      withTiming(1.05, {duration: 150}),
      withTiming(1, {duration: 150}),
    );
  }, []);

  const closeBox = () => {
      scale.value = withTiming(0, {duration: 400});
      setTimeout(() => {
        onClose();
      }, 400);
  }

  const revelAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  const tapGesture = Gesture.Tap()
    .onEnd(e => {
      const {x, y} = e;
      const {x: boxX, y: boxY, width, height} = boxLayout.current;
      const isOutsideBox =
        x < boxX || x > boxX + width || y < boxY || y > boxY + height;

      if (isOutsideBox) {
         closeBox()
      }
    })
    .runOnJS(true);

  const optionAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scale.value, [0, 50], [0, 1], Extrapolation.CLAMP),
      transform: [{scale: optionScale.value}],
    };
  });

  const handleRemoveImage = () => {
     closeBox()
     setImage('')
  }

  const handleChooseImage = () => {
     closeBox()
     handleImagePress()
  }

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'This app needs access to your camera',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Camera permission denied');
          return false;
        } else {
          console.log('you can use the camera')
        }
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  const takeImage = useCallback(async () => {
    await requestCameraPermission()
    const response = await ImagePicker.openCamera({
      width: 300, 
      height: 400, 
      cropping: false,
    });
    setImage(response.path)
  },[])


  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={tapGesture}>
        <View
          className="relative "
          style={{
            width: ScreenWidth,
            height: ScreenHeight,
            backgroundColor: 'rgba(0,0,0,0)',
          }}>
          <View
            className="self-center overflow-hidden rounded-[15px]"
            style={{
              marginTop: ScreenHeight * 0.25,
              width: ScreenWidth * 0.85,
              height: ScreenHeight * 0.42,
            }}
            onLayout={event => {
              const {x, y, width, height} = event.nativeEvent.layout;
              boxLayout.current = {x, y, width, height};
            }}>
            <Animated.View
              style={[revelAnimationStyle]}
              className="absolute bg-hero top-[-3vh] self-center w-[20px] h-[20px] rounded-full"
            />

            <View className="flex flew-row flex-wrap self-center mt-[2vh]">
              <CustomTouchableOpacity onPress={handleChooseImage}>
                <Animated.View
                  style={[optionAnimationStyle]}
                  className="items-center">
                  <View className=" w-[90px] h-[90px] border-[.5px] border-secondary  bg-black mt-4 rounded-[15px] items-center justify-center">
                    <IconIcons color={'#FDB827'} name="image" size={50} />
                  </View>
                  <Text className="text-white font-[RadioCanadaBig-Bold] mt-1">
                    Choose Image
                  </Text>
                </Animated.View>
              </CustomTouchableOpacity>

              <CustomTouchableOpacity onPress={takeImage}>
                <Animated.View
                  style={[optionAnimationStyle]}
                  className="items-center">
                  <View className=" w-[90px] h-[90px] border-[.5px] border-secondary  bg-black mt-4 rounded-[15px] items-center justify-center">
                    <IconIcons color={'#1EAFED'} name="camera" size={50} />
                  </View>
                  <Text className="text-white font-[RadioCanadaBig-Bold] mt-1">
                    Take Image
                  </Text>
                </Animated.View>
              </CustomTouchableOpacity>

              <CustomTouchableOpacity onPress={handleRemoveImage}>
                <Animated.View
                  style={[optionAnimationStyle]}
                  className="ml-[30px] items-center">
                  <View className=" w-[90px] h-[90px] border-[.5px] border-secondary  bg-black mt-4 rounded-[15px] items-center justify-center">
                    <IconIcons
                      color={'#F96D00'}
                      name="close-circle"
                      size={50}
                    />
                  </View>
                  <Text className="text-white font-[RadioCanadaBig-Bold] mt-1">
                    Remove Image
                  </Text>
                </Animated.View>
              </CustomTouchableOpacity>
            </View>
          </View>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default PhotoOptions
