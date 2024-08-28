import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {HomepageNavigationProp} from 'src/types/navigationProps';
import LinearGradient from 'react-native-linear-gradient';
import CustomTouchableOpacity from '@shared/TouchableOpacity';
import {secondaryColor} from 'src/constant/color';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  interpolateColor,
  interpolate,
} from 'react-native-reanimated';


const Artist = () => {
  const route = useRoute<RouteProp<HomepageNavigationProp,'Artist'>>();
  const {data} = route.params
  const {width, height} = useWindowDimensions();
  const scrollY = useSharedValue(0);

  const navigation = useNavigation();

  const scrollHandler = useAnimatedScrollHandler(e => {
    scrollY.value = e.contentOffset.y;
  });

  const HeaderStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [140, 180],
        ['transparent', '#3C3D37'],
      ),
    };
  });

  const HeaderTextStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [140, 180], [0, 1]),
    };
  });

  const ImageStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 140], [1, 0]),
    };
  });

  const ArrowStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [140, 180],
        ['rgba(0, 0, 0, 0.3)', '#3C3D37'],
      ),
      transform: [{translateX: interpolate(scrollY.value, [0, 140], [7, 5])}],
    };
  });


  return (
    <View>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0.4)"
        barStyle="default"
      />
      <Animated.View style={[ImageStyle, {backgroundColor: '#3C3D37'}]}>
        <Image
          source={{uri: data?.img}}
          style={{width, height: height * 0.4}}
          className="absolute top-0"
        />
      </Animated.View>

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
          <Animated.View
            style={[ArrowStyle]}
            className="w-[43px] h-[43px] rounded-full items-center justify-center">
            <AntDesignIcon name="arrowleft" color={'white'} size={28} />
          </Animated.View>
        </TouchableOpacity>
        <Animated.View className="items-center" style={[HeaderTextStyle]}>
          <Text className="text-white font-[RadioCanadaBig-Bold] text-[16px] text-center">
            {data?.name}
          </Text>
        </Animated.View>
      </Animated.View>

      <View style={{zIndex: 10, width}}>
        <Animated.ScrollView
          onScroll={scrollHandler}
          showsVerticalScrollIndicator={false}>
          <View style={{height: height * 0.262}} />
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{overflow: 'scroll'}} // Optional; for visual clarity
          >
            <Text
              style={{paddingLeft: 15}}
              className="text-white font-[RadioCanadaBig-Bold] items-center text-[50px]">
              {data?.name}
            </Text>
          </ScrollView>

          <LinearGradient
            style={{height: height * 0.15}}
            colors={['#3C3D37', 'rgba(17, 17, 19, 1)']}>
            <View className="px-5 mt-[2vh]">
              <Text className="text-[13px] font-[RadioCanadaBig-Regular]">
                40.4M monthly listeners
              </Text>
              <CustomTouchableOpacity>
                <View
                  className="border-[1px] rounded-md  items-center px-2 py-1 mt-2"
                  style={{width: 70, borderColor: secondaryColor}}>
                  <Text className="font-[RadioCanadaBig-Bold] text-white">
                    Follow
                  </Text>
                </View>
              </CustomTouchableOpacity>
            </View>
          </LinearGradient>

          <View style={{width, backgroundColor: '#111113'}}>
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[18px] mb-2">
              this is scrollable
            </Text>
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[18px] mb-2">
              this is scrollable
            </Text>
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[18px] mb-2">
              this is scrollable
            </Text>
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[18px] mb-2">
              this is scrollable
            </Text>
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[18px] mb-2">
              this is scrollable
            </Text>
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[18px] mb-2">
              this is scrollable
            </Text>
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[18px] mb-2">
              this is scrollable
            </Text>
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[18px] mb-2">
              this is scrollable
            </Text>
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[18px] mb-2">
              this is scrollable
            </Text>
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[18px] mb-2">
              this is scrollable
            </Text>
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[18px] mb-2">
              this is scrollable
            </Text>
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[18px] mb-2">
              this is scrollable
            </Text>
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[18px] mb-2">
              this is scrollable
            </Text>
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[18px] mb-2">
              this is scrollable
            </Text>
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[18px] mb-2">
              this is scrollable
            </Text>
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[18px] mb-2">
              this is scrollable
            </Text>
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[18px] mb-2">
              this is scrollable
            </Text>
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[18px] mb-2">
              this is scrollable
            </Text>
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[18px] mb-2">
              this is scrollable
            </Text>
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[18px] mb-2">
              this is scrollable
            </Text>
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[18px] mb-2">
              this is scrollable
            </Text>
          </View>
        </Animated.ScrollView>
      </View>
    </View>
  );
};

export default Artist;
