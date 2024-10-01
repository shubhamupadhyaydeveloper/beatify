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
} from 'react-native-reanimated';
import {
  SingerImageComponent,
} from './SongComponents';

const SongDetail = () => {
  const route = useRoute<RouteProp<HomepageNavigationProp, 'SongDetail'>>();
  const {data} = route.params;
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
    const scrollScale = interpolate(scrollY.value, [50, 150], [0.9, 0.5]);
    const scrollOpacity = interpolate(scrollY.value, [50, 150], [1, 0]);

    return {
      transform: [
        {scale: scrollScale},
        {translateY: interpolate(scrollY.value, [45, 50], [16, 20])},
      ],
      opacity: scrollOpacity,
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
            paddingTop: 38,
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
            {data?.name}
          </Text>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        scrollEventThrottle={16}
        stickyHeaderIndices={[2]}
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={['#3C3D37', 'rgba(17, 17, 19, 1)']}
          style={{height: height * 0.52}}>
          <View style={{height: 100}} />
          <Animated.View
            style={[{width}, ImageStyle]}
            className="mx-auto flex items-center">
            <Image
              className="sticky top-[5px] "
              source={{uri: data.image}}
              style={{width: width * 0.5, height: height * 0.25,}}
              
            />
          </Animated.View>
          <View className="px-5  mt-[2vh]">
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[25px]">
              {data?.name}
            </Text>
            <View className="flex flex-row items-center mt-[2vh]">
              <SingerImageComponent singerImage={data.singerImage!} />
              <Text className="text-white font-[RadioCanadaBig-Bold] text-[14px] ml-3">
                {data?.singer}
              </Text>
            </View>
          </View>
        </LinearGradient>

        <View className="mt-[3vh] px-5">
          <Text className="text-white font-[RadioCanadaBig-Regular] text-[18px] mb-[2vh]">
            {data?.released}
          </Text>

        </View>

        <View className="w-full p-3 bg-white mt-[1vh]">
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

export default SongDetail;
