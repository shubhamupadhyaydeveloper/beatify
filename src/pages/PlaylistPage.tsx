import {
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {NavigationProp, RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {HomepageNavigationProp, LibraryNavigationTypes} from 'src/types/navigationProps';
import LinearGradient from 'react-native-linear-gradient';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  interpolateColor,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import {ScreenHeight, ScreenWidth} from 'src/hooks/ScreenDimension';
import CustomTouchableOpacity from '@shared/TouchableOpacity';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import CustomModal, {CustomModalRef} from '@shared/CustomModal';
import { navigate } from 'src/navigation/navigaionutils';

const PlaylistPage = () => {
  const {width, height} = useWindowDimensions();
 const navigation = useNavigation<NavigationProp<LibraryNavigationTypes>>();
  const scrollY = useSharedValue(0);

  const testref = useRef<CustomModalRef>(null);

  const scrollHandler = useAnimatedScrollHandler(e => {
    scrollY.value = e.contentOffset.y;
  });

  const HeaderStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [ScreenHeight * 0.17, ScreenHeight * 0.181],
        ['transparent', '#3C3D37'],
      ),
    };
  });

  const HeaderTextStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [ScreenHeight * 0.17, ScreenHeight * 0.181],
        [0, 1],
      ),
    };
  });

  const ImageStyle = useAnimatedStyle(() => {
    const scrollScale = interpolate(
      scrollY.value,
      [ScreenHeight * 0.06, ScreenHeight * 0.13],
      [1, 0.5],
      Extrapolation.CLAMP,
    );
    const scrollOpacity = interpolate(
      scrollY.value,
      [ScreenHeight * 0.13, ScreenHeight * 0.15],
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
      [ScreenHeight * 0.06, ScreenHeight * 0.19],
      [10, -ScreenHeight * 0.12],
      Extrapolation.CLAMP,
    );

    return {
      marginBottom: scrollMarginBottom,
    };
  });

  return (
    <View>
      <Animated.View
        style={[
          {
            position: 'absolute',
            paddingVertical: 10,
            zIndex: 30,
            width,
            paddingTop: height * 0.06,
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
            hello how are you
          </Text>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}>
        <StatusBar
          translucent
          backgroundColor="rgba(0,0,0,0.5)"
          barStyle="default"
        />
        <Animated.View style={[MarginBottomStyle]}>
          <LinearGradient
            colors={['#3C3D37', 'rgba(17, 17, 19, 1)']}
            style={{height: height * 0.38}}>
            <View style={{height: 80}} />
            <Animated.View
              style={[{width}, ImageStyle]}
              className="flex items-center">
              <Image
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2016/05/24/22/54/icon-1413583_640.png',
                }}
                style={{width: width * 0.5, height: height * 0.25}}
              />
            </Animated.View>
          </LinearGradient>
        </Animated.View>

        <View className="w-full px-4  ">
          <Text className="mb-[2vh] text-white font-[RadioCanadaBig-Bold] text-[20px]">
            My Playlist #1
          </Text>
          <View className="w-full flex flex-row justify-between items-center">
            <CustomTouchableOpacity>
              <View className="flex flex-row items-center ">
                <View className="w-[30px] h-[30px] bg-primary rounded-full items-center justify-center">
                  <Text className="font-[RadioCanadaBig-Bold] text-[13px] text-black">
                    S
                  </Text>
                </View>
                <Text className="text-white font-[RadioCanadaBig-Bold] text-[13px] ml-2">
                  Shubham Upadhyay
                </Text>
              </View>
            </CustomTouchableOpacity>
            <CustomTouchableOpacity
              onPress={() => testref.current?.toggleVisible()}>
              <EntypoIcon
                name="dots-three-vertical"
                color={'#bdbdbc'}
                size={20}
              />
            </CustomTouchableOpacity>
          </View>
        </View>

        <View className="self-center items-center gap-5 mt-[10vh]">
          <Text className="text-graycolor font-[RadioCanadaBig-Regular] text-[16px]">
            Lets start building your playlist.
          </Text>
          <View style={{width: ScreenWidth * 0.6}}>
            <CustomTouchableOpacity onPress={() => navigate('AddToPlaylist')}>
              <View className="  bg-white items-center justify-center flex py-2  rounded-full">
                <Text className="text-black font-[RadioCanadaBig-Bold] text-[16px]">
                  Add to this playlist
                </Text>
              </View>
            </CustomTouchableOpacity>
          </View>
        </View>

        <View
          style={{width: ScreenWidth * 0.7, marginTop: ScreenWidth * 0.1}}
          className="mx-auto">
          <Text className="text-white font-[RadioCanadaBig-Bold] text-[22px] text-center">
            Your liked songs will appear here
          </Text>
        </View>
        <View
          style={{width: ScreenWidth * 0.7, marginTop: ScreenWidth * 0.1}}
          className="mx-auto">
          <Text className="text-white font-[RadioCanadaBig-Bold] text-[22px] text-center">
            Your liked songs will appear here
          </Text>
        </View>
        <View
          style={{width: ScreenWidth * 0.7, marginTop: ScreenWidth * 0.1}}
          className="mx-auto">
          <Text className="text-white font-[RadioCanadaBig-Bold] text-[22px] text-center">
            Your liked songs will appear here
          </Text>
        </View>
        <View
          style={{width: ScreenWidth * 0.7, marginTop: ScreenWidth * 0.1}}
          className="mx-auto">
          <Text className="text-white font-[RadioCanadaBig-Bold] text-[22px] text-center">
            Your liked songs will appear here
          </Text>
        </View>
        <View
          style={{width: ScreenWidth * 0.7, marginTop: ScreenWidth * 0.1}}
          className="mx-auto">
          <Text className="text-white font-[RadioCanadaBig-Bold] text-[22px] text-center">
            Your liked songs will appear here
          </Text>
        </View>
        <View
          style={{width: ScreenWidth * 0.7, marginTop: ScreenWidth * 0.1}}
          className="mx-auto">
          <Text className="text-white font-[RadioCanadaBig-Bold] text-[22px] text-center">
            Your liked songs will appear here
          </Text>
        </View>
        <View
          style={{width: ScreenWidth * 0.7, marginTop: ScreenWidth * 0.1}}
          className="mx-auto">
          <Text className="text-white font-[RadioCanadaBig-Bold] text-[22px] text-center">
            Your liked songs will appear here
          </Text>
        </View>

        <CustomModal ref={testref} userSnapPoint={[200]}>
          <View className="px-4 mt-4">
            <CustomTouchableOpacity
              onPress={() => {
                navigation.navigate('EditPlaylist');
                testref.current?.toggleVisible();
              }}>
              <View className="flex flex-row items-center">
                <OcticonsIcon name="pencil" color={'#bdbdbc'} size={25} />
                <Text className="text-white text-[18px] font-[RadioCanadaBig-Regular] ml-5">
                  Edit Playlist
                </Text>
              </View>
            </CustomTouchableOpacity>
            <CustomTouchableOpacity>
              <View className="flex flex-row items-center mt-5">
                <AntDesignIcon name="close" color={'#bdbdbc'} size={25} />
                <Text className="text-white text-[18px] font-[RadioCanadaBig-Regular] ml-5">
                  Delete Playlist
                </Text>
              </View>
            </CustomTouchableOpacity>
            <CustomTouchableOpacity>
              <View className="flex flex-row items-center mt-5">
                <AntDesignIcon name="sharealt" color={'#bdbdbc'} size={25} />
                <Text className="text-white text-[18px] font-[RadioCanadaBig-Regular] ml-5">
                  Share
                </Text>
              </View>
            </CustomTouchableOpacity>
          </View>
        </CustomModal>
      </Animated.ScrollView>
    </View>
  );
};

export default PlaylistPage;