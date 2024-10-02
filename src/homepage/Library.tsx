import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
  Button,
  Easing,
  LayoutChangeEvent,
  GestureResponderEvent,
} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import bottomSheet, {BottomSheetModal} from '@gorhom/bottom-sheet';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

import {primaryColor, secondaryColor, tertiaryColor} from '../constant/color';
import {filterOptions} from '../constant/mockdata';
import SharedModal from '../shared/Modal';
import {
  CreateNavigationTypes,
  LibraryNavigationTypes,
  TabNavigationProps,
} from 'src/types/navigationProps';

const Library = () => {
  const navigation = useNavigation<NavigationProp<TabNavigationProps>>();
  const libraryNavigation =
    useNavigation<NavigationProp<LibraryNavigationTypes>>();
  const createNavigation = useNavigation<NavigationProp<CreateNavigationTypes>>();
  const [filter, SetFilter] = useState<string>('');
  const {width, height} = useWindowDimensions();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const snapPoints = ['30%'];
  const sharedOpacity = useSharedValue(0);

  const filterStyle = useAnimatedStyle(() => {
    return {
      opacity: sharedOpacity.value,
    };
  });

  const runAnimation = useCallback(() => {
    sharedOpacity.value = withTiming(1, {duration: 300});
  },[]);
  const reverseAnimation = useCallback(() => {
    sharedOpacity.value = withTiming(0, {duration: 300});
  },[])

  return (
    <>
      <SafeAreaView className="mt-[2vh] h-full">
        <View className="flex px-5  flex-row items-center justify-between">
          <View className="flex flex-row">
            <TouchableOpacity
              activeOpacity={0.7}
              className=""
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <View
                className="items-center justify-center bg-[#21c856] rounded-full"
                style={{width: 35, height: 36}}>
                <Text className="text-black font-[RadioCanadaBig-Bold]">S</Text>
              </View>
            </TouchableOpacity>
            <Text className="font-[RadioCanadaBig-Bold] text-white ml-2 text-[20px]">
              Your Library
            </Text>
          </View>
          <View className="flex flex-row items-center">
            {/* <TouchableOpacity activeOpacity={0.7}>
            <IonIcons name="search" size={27} color={'white'} />
          </TouchableOpacity> */}
            <TouchableOpacity
              activeOpacity={0.7}
              className="ml-2"
              onPress={handlePresentModalPress}>
              <MaterialIcon name="add" size={35} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>

        {filter ? (
          <View className="flex flex-row gap-3 px-5 mt-[1vh] items-center ">
            <Animated.View style={[filterStyle]} className="">
              <TouchableOpacity
                onPress={() => {
                  SetFilter('');
                  reverseAnimation();
                }}
                activeOpacity={0.7}
                className=" w-[32px] h-[32px] rounded-full items-center justify-center "
                style={{backgroundColor: tertiaryColor}}>
                <FeatherIcon name="x" color={'white'} size={22} />
              </TouchableOpacity>
            </Animated.View>
            <View
              className="py-2 px-4 rounded-full items-center justify-center translate-all"
              style={[{backgroundColor: primaryColor}]}>
              <Text className="text-white font-[RadioCanadaBig-Regular]">
                {filter}
              </Text>
            </View>
          </View>
        ) : (
          <View className="flex flex-row px-5  gap-3 mt-[1vh] transition-all ">
            {filterOptions.map(item => (
              <TouchableOpacity
                onPress={event => {
                  SetFilter(item);
                  runAnimation();
                }}
                key={item}
                activeOpacity={0.7}
                className="py-2 px-4 rounded-full items-center justify-center"
                style={{backgroundColor: tertiaryColor}}>
                <Text className="text-white font-[RadioCanadaBig-Regular]">
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <View className="w-full border-[1.2px] border-tertiary mt-[3vh]" />

        <TouchableOpacity
          onPress={() => libraryNavigation.navigate('LikedSong')}
          activeOpacity={0.9}
          className="flex flex-row items-center px-5 mt-[5vh]">
          <LinearGradient
            style={{width: width * 0.2, height: 70}}
            className="items-center justify-center"
            colors={['rgba(138,43,226,1)', 'rgba(255,255,255,1)']}>
            <FontAwesomeIcon name="heart" color={'white'} size={30} />
          </LinearGradient>

          <View className="" style={{marginLeft: width * 0.03}}>
            <Text className="text-white font-[RadioCanadaBig-Regular] text-[15px]">
              Liked Songs
            </Text>
            <View className="flex flex-row gap-1 items-center">
              <Text
                className="text-[11px] font-[RadioCanadaBig-Regular]"
                style={{color: secondaryColor}}>
                Playlist
              </Text>
              <View
                className="w-[3px] h-[3px] rounded-full"
                style={{backgroundColor: 'white'}}
              />
              <Text className="text-[11px]">0 song</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View className="px-5 mt-[2vh]">
          <TouchableOpacity
            onPress={() => libraryNavigation.navigate('SelectArtist')}
            className="flex flex-row items-center gap-5"
            activeOpacity={0.8}>
            <View
              className="w-[65px] h-[65px] rounded-full items-center justify-center"
              style={{backgroundColor: tertiaryColor}}>
              <FeatherIcon name="plus" size={30} color={secondaryColor} />
            </View>

            <Text className="text-white font-[RadioCanadaBig-Regular] text-[15px]">
              Add artists
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <SharedModal
        bottomSheetRef={bottomSheetModalRef}
        customSnapPoints={snapPoints}>
        <View className="px-5 mt-2">
          <TouchableOpacity
            onPress={() => {
               libraryNavigation.navigate("CreatePlaylist")
               bottomSheetModalRef.current?.close()
            }}
            activeOpacity={0.7}
            className="flex flex-row items-center gap-4">
            <FeatherIcon name="music" color={secondaryColor} size={25} />
            <View>
              <Text className="text-white font-[RadioCanadaBig-Bold] text-[17px]">
                Playlist
              </Text>
              <Text
                style={{color: secondaryColor}}
                className="font-[RadioCanadaBig-Regular] text-[13px]">
                build a playlist with songs
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Create'),
                bottomSheetModalRef.current?.close();
            }}
            activeOpacity={0.7}
            className="flex flex-row items-center gap-4 mt-[3vh]">
            <FeatherIcon name="music" color={secondaryColor} size={25} />
            <View>
              <Text className="text-white font-[RadioCanadaBig-Bold] text-[17px]">
                Song
              </Text>
              <Text
                style={{color: secondaryColor}}
                className="font-[RadioCanadaBig-Regular] text-[13px]">
                Create your own song
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SharedModal>
    </>
  );
};

export default Library;
