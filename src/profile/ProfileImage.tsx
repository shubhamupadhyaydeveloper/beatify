import {View, Text, TouchableOpacity, useWindowDimensions, useAnimatedValue} from 'react-native';
import React, { useEffect } from 'react';
import Animated, { interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import {RouteProp, useRoute} from '@react-navigation/native';
import {HomepageNavigationProp} from 'src/types/navigationProps';
import {SafeAreaView} from 'react-native-safe-area-context';
import { sharedElementTransition } from 'src/helper/shared';

const ProfileImage = () => {
  const route = useRoute<RouteProp<HomepageNavigationProp, 'ProfileImage'>>();
  const {image, tagName} = route.params;
  const {width, height} = useWindowDimensions();
  const initialRender = useSharedValue(0);

  useEffect(() => {
    initialRender.value = withTiming(1, {duration: 500});
  }, []);

  const backgroundStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        initialRender.value,
        [0, 1],
        ['rgba(0,0,0,0)', 'rgba(0,0,0,0.3)'], 
      ),
    };
  });

  return (
    <Animated.View style={[{width, height}, backgroundStyle]}>
      <View className="mt-[100px] self-center">
        <Animated.Image
          sharedTransitionTag={tagName}
          source={{uri: image}}
          style={{width: 300, height: 300}}
        />

        <TouchableOpacity activeOpacity={0.85}>
          <View className="bg-hero py-2 px-4 flex items-center justify-center">
            <Text className="text-white">Edit profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default ProfileImage;
