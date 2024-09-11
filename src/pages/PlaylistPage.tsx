import {
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {HomepageNavigationProp} from 'src/types/navigationProps';
import LinearGradient from 'react-native-linear-gradient';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  interpolateColor,
  interpolate,
  Extrapolate,
  Extrapolation,
} from 'react-native-reanimated';

const PlaylistPage = () => {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(e => {
    scrollY.value = e.contentOffset.y;
  });

  const HeaderStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [220, 230],
        ['transparent', '#3C3D37'],
      ),
    };
  });

  const HeaderTextStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [220, 230], [0, 1]),
    };
  });

  const ImageStyle = useAnimatedStyle(() => {
    const scrollScale = interpolate(
      scrollY.value,
      [50, 100],
      [1, 0.5],
      Extrapolation.CLAMP,
    );
    const scrollOpacity = interpolate(
      scrollY.value,
      [100, 115],
      [1, 0],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{scale: scrollScale}],
      opacity: scrollOpacity,
    };
  });

  const MarginBottomStyle = useAnimatedStyle(() => {
    const scrollMarginBottom = interpolate(
      scrollY.value,
      [50, 150],
      [10, -90],
      Extrapolation.CLAMP,
    );

    return {
      marginBottom: scrollMarginBottom,
    };
  });

  return (
    <View>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0.5)"
        barStyle="default"
      />
      <Animated.View
        style={[
          {
            position: 'absolute',
            paddingVertical: 10,
            zIndex: 30,
            width,
            paddingTop: height * .06,
          },
          HeaderStyle,
          {
            display: 'flex',
            flexDirection: 'row',
            gap: width * 0.1,
            alignItems: 'center',
          },
        ]}>
        <TouchableOpacity
          style={{left: 13}}
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <AntDesignIcon name="arrowleft" color={'white'} size={28} />
        </TouchableOpacity>
        <Animated.View className="items-center" style={[HeaderTextStyle]}>
          <Text className="text-white font-[RadioCanadaBig-Bold] text-[16px] text-center">
            hello how are youdf
          </Text>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}>
        <Animated.View style={[MarginBottomStyle]}>
          <LinearGradient
            colors={['#3C3D37', 'rgba(17, 17, 19, 1)']}
            style={{height: height * 0.4}}>
            <View style={{height: 90}} />
            <Animated.View
              style={[{width}, ImageStyle]}
              className="mx-auto flex items-center">
              <View
                className=" bg-white"
                style={{width: width * 0.5, height: height * 0.25}}
              />
            </Animated.View>
          </LinearGradient>
        </Animated.View>

        <View className="w-full p-3 bg-white ">
          <Text className="text-black">This is fixed</Text>
        </View>

        <View>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
          <Text className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]">
            This is scrollable
          </Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default PlaylistPage;