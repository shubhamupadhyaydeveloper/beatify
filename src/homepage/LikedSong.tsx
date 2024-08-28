import {
  View,
  Text,
  useWindowDimensions,
  ScrollView,
  TextInput,
  StatusBar,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useForm, Controller} from 'react-hook-form';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {secondaryColor, tertiaryColor} from 'src/constant/color';
import Animated, {
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {useNavigation, useTheme} from '@react-navigation/native';

const LikedSong = () => {
  const {dark} = useTheme();
  const {width, height} = useWindowDimensions();
  const {control} = useForm();
  const scrollY = useSharedValue(0);
  const navigation = useNavigation();

  const handleScroll = useAnimatedScrollHandler(e => {
    scrollY.value = e.contentOffset.y;
  });

  const HeaderStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [140, 180],
        ['transparent', 'rgba(138,43,226,1)', 'rgba(17, 17, 19, 1)'],
      ),
    };
  });

  const SearchStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [20, 50], [1, 0]),
    };
  });

  const HeaderTextStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [140, 180], [0, 1]),
    };
  });

  return (
    <View style={{height}} className="">
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
            paddingTop: 40,
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
          <AntDesignIcon name="arrowleft" color={'white'} size={30} />
        </TouchableOpacity>
        <Animated.View className="items-center" style={[HeaderTextStyle]}>
          <Text className="text-white font-[RadioCanadaBig-Bold] text-[16px] text-center ">
            Liked Song
          </Text>
        </Animated.View>
      </Animated.View>
      <Animated.ScrollView
        onScroll={handleScroll}
        showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={['rgba(138,43,226,1)', 'rgba(17, 17, 19, 1)']}
          className="px-3"
          style={{height: height * 0.45}}>
          <Animated.View
            style={[SearchStyle]}
            className="flex flex-row mt-[12vh]  mx-auto">
            <LinearGradient
              colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.1)']}
              className="mr-2 rounded-[5px]"
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <View
                style={{width: width * 0.75, height: 40}}
                className="flex flex-row items-center px-3">
                <IonIcons name="search" color={'white'} size={20} />
                <Controller
                  name="search"
                  key="search"
                  control={control}
                  render={({field: {value, onBlur, onChange}}) => (
                    <TextInput
                      className="text-[13px] font-[RadioCanadaBig-Bold] ml-2 "
                      placeholder="Find in Liked Songs"
                      placeholderTextColor={'white'}
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                    />
                  )}
                />
              </View>
            </LinearGradient>
            <LinearGradient
              colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.1)']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              className="px-3 rounded-[5px] items-center justify-center"
              style={{padding: 5}}>
              <TouchableOpacity activeOpacity={0.7}>
                <Text className="text-white font-[RadioCanadaBig-Bold]">
                  Sort
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </Animated.View>
          <View className="absolute bottom-[5vh] px-3">
            <Text className="text-white  font-[RadioCanadaBig-Bold] text-[22px]">
              Liked Songs
            </Text>
            <Text
              className="font-[RadioCanadaBig-Regular] text-[13px]"
              style={{color: secondaryColor}}>
              0 Songs
            </Text>
          </View>
        </LinearGradient>

        {/* // render songs here */}
        <View
          style={{width: width * 0.7, marginTop: height * 0.1}}
          className="mx-auto">
          <Text className="text-white font-[RadioCanadaBig-Bold] text-[22px] text-center">
            Your liked songs will appear here
          </Text>
        </View>
        <View
          style={{width: width * 0.7, marginTop: height * 0.1}}
          className="mx-auto">
          <Text className="text-white font-[RadioCanadaBig-Bold] text-[22px] text-center">
            Your liked songs will appear here
          </Text>
        </View>
        <View
          style={{width: width * 0.7, marginTop: height * 0.1}}
          className="mx-auto">
          <Text className="text-white font-[RadioCanadaBig-Bold] text-[22px] text-center">
            Your liked songs will appear here
          </Text>
        </View>
        <View
          style={{width: width * 0.7, marginTop: height * 0.1}}
          className="mx-auto">
          <Text className="text-white font-[RadioCanadaBig-Bold] text-[22px] text-center">
            Your liked songs will appear here
          </Text>
        </View>
        <View
          style={{width: width * 0.7, marginTop: height * 0.1}}
          className="mx-auto">
          <Text className="text-white font-[RadioCanadaBig-Bold] text-[22px] text-center">
            Your liked songs will appear here
          </Text>
        </View>
        <View
          style={{width: width * 0.7, marginTop: height * 0.1}}
          className="mx-auto">
          <Text className="text-white font-[RadioCanadaBig-Bold] text-[22px] text-center">
            Your liked songs will appear here
          </Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default LikedSong;
