import {
  View,
  Text,
  useWindowDimensions,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import Animated, {
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {tertiaryColor} from 'src/constant/color';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {snapPoint} from 'react-native-redash';

type prop = {
  userSnapPoint: number[];
  children: React.ReactNode;
};

export type CustomModalRef = {
  toggleVisible: () => void;
};

const CustomModal = forwardRef<CustomModalRef, prop>(
  ({userSnapPoint, children}, ref) => {
    const [visible, setVisible] = useState(false);
    const translateY = useSharedValue(0);
    const offsetY = useSharedValue(0);
    const initialRender = useSharedValue(0);
    const minSnapPoint = userSnapPoint[1]
      ? -userSnapPoint[1]
      : -userSnapPoint[0];
    const [customSnapPoint, setCustomSnapPoint] = useState([
      -userSnapPoint[0],
      0,
    ]);

    const handleSnapPoint = useCallback(() => {
      if (userSnapPoint[1]) {
        setCustomSnapPoint([-userSnapPoint[1], -userSnapPoint[0], 0]);
      } else {
        setCustomSnapPoint([-userSnapPoint[0], 0]);
      }
    }, []);

    const scrollTo = useCallback((value: number) => {
      'worklet';
      translateY.value = withTiming(value, {
        duration: 150,
      });
    }, []);

    const closeModal = useCallback((destination: number) => {
      if (destination === 0) {
        translateY.value = 0;
        setVisible(false);
      }
    }, []);

    const handleClose = useCallback(() => {
      scrollTo(0);
      setTimeout(() => {
        setVisible(false);
        initialRender.value = withTiming(0, {duration: 150});
      }, 150);
    }, []);

    const toggleVisible = () => {
      if (!visible) {
        handleSnapPoint();
        initialRender.value = withTiming(1, {duration: 150});
        setVisible(true);
        scrollTo(-userSnapPoint[0]);
      } else {
        handleClose();
      }
    };

    useImperativeHandle(ref, () => ({
      toggleVisible,
    }));

    const {width, height} = useWindowDimensions();

    const panGesture = Gesture.Pan()
      .onStart(() => {
        offsetY.value = translateY.value;
      })
      .onUpdate(e => {
        translateY.value = e.translationY + offsetY.value;
        translateY.value = Math.max(translateY.value, minSnapPoint);
      })
      .onEnd(e => {
        const dest = snapPoint(translateY.value, e.velocityY, customSnapPoint);
        scrollTo(dest);
        runOnJS(closeModal)(dest);
      });

    const tapGesture = Gesture.Tap()
      .onEnd(e => {
        const {y} = e;
        const boxHeight = Math.abs(translateY.value);
        const isOutsideBox = y < height - boxHeight;

        if (isOutsideBox) {
          handleClose();
        }
      })
      .runOnJS(true);

    const animatedBoxStyle = useAnimatedStyle(() => {
      return {
        transform: [{translateY: translateY.value}],
      };
    });

    const backgroundColorStyle = useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(
          initialRender.value,
          [0, 1],
          ['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)'],
        ),
      };
    });

    return (
      <Modal visible={visible} transparent={true} animationType="none">
        <GestureHandlerRootView>
          <GestureDetector
            gesture={Gesture.Simultaneous(panGesture, tapGesture)}>
            <Animated.View
              style={[{width, height}, backgroundColorStyle]}
              className="items-center justify-center flex">
              <Animated.View
                style={[
                  {
                    width,
                    height,
                    backgroundColor: tertiaryColor,
                    position: 'absolute',
                    top: height,
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                  },
                  animatedBoxStyle,
                ]}>
                <View className="h-[4px] w-[30px] mt-2 rounded-full self-center bg-graycolor" />
                {children}
              </Animated.View>
            </Animated.View>
          </GestureDetector>
        </GestureHandlerRootView>
      </Modal>
    );
  },
);

export default CustomModal;
