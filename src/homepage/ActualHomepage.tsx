import {
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Button,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  NavigationProp,
  useNavigation,
  DrawerActions,
  useTheme,
} from '@react-navigation/native';

import HomeTop from './HomeTop';
import Animated, {
  Extrapolation,
  interpolate,
  SharedTransition,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useScrollToTop} from '@react-navigation/native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {setNavColor} from '../hooks/NavColor';
import CustomTouchableOpacity from '../shared/TouchableOpacity';
import {artistsData, recentlyData} from '../constant/mockdata';
import {HomepageNavigationProp} from 'src/types/navigationProps';
import {ANIMATION_DURATION} from '@gorhom/bottom-sheet';
import LazyImage from '@shared/LazyImage';

const ActualHomepage = () => {
  setNavColor({color: '#000000'});
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;
  const [currentPage, SetCurrentPage] = useState('All');
  const navigation = useNavigation();
  const homeNavigation =
    useNavigation<NavigationProp<HomepageNavigationProp>>();
  const {dark} = useTheme();
  const scrollRef = React.useRef<any>(null);
  useScrollToTop(scrollRef);
  const scrollY = useSharedValue(0);

  const options: string[] = ['All', 'Latest', 'Liked'];

  const scrollTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({y: 0, animated: true});
    }
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollY.value = event.nativeEvent.contentOffset.y;
  };

  const topButtonStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(
        interpolate(scrollY.value, [100, 105], [0, 1], Extrapolation.CLAMP),
      ),
    };
  });

  const RenderItem = useMemo(
    () =>
      ({item, index}: {item: {img: string; name: string}; index: number}) =>
        (
          <CustomTouchableOpacity
            onPress={() =>
              homeNavigation.navigate('Artist', {
                data: item,
              })
            }>
            <Animated.View className="flex items-center">
              {/* <Image
                source={{uri: item.img}}
                style={{width: 150, height: 150}}
                className="rounded-full"
              /> */}
              <LazyImage
                image={item.img}
                width={150}
                height={150}
                style='rounded-full'
              />
              <Text className="text-white font-[RadioCanadaBig-Bold] text-[17px] mt-1">
                {item.name}
              </Text>
            </Animated.View>
          </CustomTouchableOpacity>
        ),
    [artistsData],
  );

  return (
    <SafeAreaView className=" mt-[3vh]">
      <View className="absolute right-[5vw] bottom-[17vh] z-20">
        <TouchableOpacity activeOpacity={0.85} onPress={scrollTop}>
          <Animated.View
            style={[topButtonStyle]}
            className="bg-white w-[40px] h-[40px] items-center justify-center rounded-full">
            <AntDesignIcon name="arrowup" color={'black'} size={25} />
          </Animated.View>
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor={'#000000'} />
      <View className="flex flex-row items-center mb-1 px-4 ">
        <CustomTouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <View
            className="items-center justify-center bg-[#21c856] rounded-full"
            style={{width: 35, height: 36}}>
            <Text className="text-black font-[RadioCanadaBig-Bold]">S</Text>
          </View>
        </CustomTouchableOpacity>
        <View className="flex flex-row ml-[2vw] ">
          {options.map(item => (
            <CustomTouchableOpacity
              key={item}
              onPress={() => SetCurrentPage(item)}>
              <View
                className={` px-3 h-[40px] ${
                  item === currentPage ? 'bg-[#21c856]' : 'bg-[#343434]'
                }  items-center justify-center rounded-full mr-3`}>
                <Text
                  className={`${
                    item === currentPage ? 'text-black' : 'text-white'
                  } font-[RadioCanadaBig-Bold]`}>
                  {item}
                </Text>
              </View>
            </CustomTouchableOpacity>
          ))}
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollRef}
        onScroll={handleScroll}>
        <View className="mb-[2vh] ">
          <Text className="text-white text-[22px] px-4 font-[RadioCanadaBig-Bold] ">
            Recently Played
          </Text>
          <View className="mt-[1.5vh]">
            <FlatList
              data={recentlyData}
              ListHeaderComponent={() => <View className="px-2" />}
              ListFooterComponent={() => <View className="px-2" />}
              horizontal
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{width: 15}}></View>}
              renderItem={({item}) => (
                <CustomTouchableOpacity
                  // onPress={() =>
                  //   homeNavigation.navigate('SongDetail', {data: item})
                  // }
                  >
                  <View className="flex" key={item.name}>
                    <LazyImage
                      image={item.image}
                      width={width * 0.35}
                      height={height * 0.18}
                    />
                    <Text
                      style={{width: width * 0.25}}
                      className="text-white text-[11px] font-[RadioCanadaBig-Bold]">
                      {item.name}
                    </Text>
                  </View>
                </CustomTouchableOpacity>
              )}
            />
          </View>
        </View>

        <View className="">
          <Text className="text-white text-[22px] px-4 font-[RadioCanadaBig-Bold] mb-2 ">
            Your favorite artists
          </Text>
          <FlatList
            data={artistsData}
            ListHeaderComponent={() => <View className="px-2" />}
            ListFooterComponent={() => <View className="px-2" />}
            horizontal={true}
            keyExtractor={(item, index) => `artist-${index}`}
            initialNumToRender={3}
            ItemSeparatorComponent={() => <View className="w-[15px]" />}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <RenderItem index={index} item={item} key={index} />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActualHomepage;
