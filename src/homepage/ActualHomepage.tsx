import {
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  NavigationProp,
  useNavigation,
  DrawerActions,
  useTheme,
} from '@react-navigation/native';

import HomeTop from './HomeTop';
import Animated from 'react-native-reanimated';

import {setNavColor} from '../hooks/NavColor';
import CustomTouchableOpacity from '../shared/TouchableOpacity';
import {artistsData, recentlyData} from '../constant/mockdata';
import {HomepageNavigationProp} from 'src/types/navigationProps';

const ActualHomepage = () => {
  setNavColor({color: '#000000'});
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height
  const [currentPage, SetCurrentPage] = useState('All');
  const navigation = useNavigation();
  const homeNavigation =
    useNavigation<NavigationProp<HomepageNavigationProp>>();
  const {dark} = useTheme();

  const options: string[] = ['All', 'Latest', 'Liked'];

  return (
    <SafeAreaView className="px-5 mt-[3vh]">
      <StatusBar backgroundColor={'#000000'} />
      <View className="flex flex-row items-center mb-1 ">
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
      <ScrollView showsVerticalScrollIndicator={false}>

        <View className="mb-[2vh]">
          <Text className="text-white text-[22px] font-[RadioCanadaBig-Bold] ">
            Recently Played
          </Text>
          <View className="flex flex-row gap-2 mt-[1.5vh]">
            <FlatList
              data={recentlyData}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{width : isLandscape ? 0 : 15}}></View>}
              renderItem={({item}) => (
                <CustomTouchableOpacity
                  onPress={() =>
                    homeNavigation.navigate('SongDetail', {data: item})
                  }>
                  <View className="flex" key={item.name}>
                    <Image
                      source={{uri: item.image}}
                      style={{width: isLandscape ? width * .22 : width * 0.35, height: isLandscape ? height * .38 :  height * 0.18}}
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

        <View className="gap-4 flex">
          <Text className="text-white text-[22px] font-[RadioCanadaBig-Bold] ">
            Your favorite artists
          </Text>
          <FlatList
            data={artistsData}
            horizontal={true}
            ItemSeparatorComponent={() => <View className="w-[15px]" />}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <CustomTouchableOpacity
                onPress={() => homeNavigation.navigate('Artist', {data: item})}>
                <View className="flex items-center">
                  <Image
                    source={{uri: item.img}}
                    style={{width:  width * 0.39, height: height * 0.2}}
                    className="rounded-full"
                  />
                  <Text className="text-white font-[RadioCanadaBig-Bold] text-[17px] mt-1">
                    {item.name}
                  </Text>
                </View>
              </CustomTouchableOpacity>
            )}
          />
        </View>

        <View className="mt-3">
          <Text
            className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]"
            style={{color: dark ? 'black' : 'white'}}>
            This is scrollable
          </Text>
          <Text
            className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]"
            style={{color: dark ? 'black' : 'white'}}>
            This is scrollable
          </Text>
          <Text
            className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]"
            style={{color: dark ? 'black' : 'white'}}>
            This is scrollable
          </Text>
          <Text
            className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]"
            style={{color: dark ? 'black' : 'white'}}>
            This is scrollable
          </Text>
          <Text
            className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]"
            style={{color: dark ? 'black' : 'white'}}>
            This is scrollable
          </Text>
          <Text
            className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]"
            style={{color: dark ? 'black' : 'white'}}>
            This is scrollable
          </Text>
          <Text
            className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]"
            style={{color: dark ? 'black' : 'white'}}>
            This is scrollable
          </Text>
          <Text
            className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]"
            style={{color: dark ? 'black' : 'white'}}>
            This is scrollable
          </Text>
          <Text
            className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]"
            style={{color: dark ? 'black' : 'white'}}>
            This is scrollable
          </Text>
          <Text
            className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]"
            style={{color: dark ? 'black' : 'white'}}>
            This is scrollable
          </Text>
          <Text
            className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]"
            style={{color: dark ? 'black' : 'white'}}>
            This is scrollable
          </Text>
          <Text
            className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]"
            style={{color: dark ? 'black' : 'white'}}>
            This is scrollable
          </Text>
          <Text
            className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]"
            style={{color: dark ? 'black' : 'white'}}>
            This is scrollable
          </Text>
          <Text
            className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]"
            style={{color: dark ? 'black' : 'white'}}>
            This is scrollable
          </Text>
          <Text
            className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]"
            style={{color: dark ? 'black' : 'white'}}>
            This is scrollable
          </Text>
          <Text
            className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]"
            style={{color: dark ? 'black' : 'white'}}>
            This is scrollable
          </Text>
          <Text
            className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]"
            style={{color: dark ? 'black' : 'white'}}>
            This is scrollable
          </Text>
          <Text
            className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]"
            style={{color: dark ? 'black' : 'white'}}>
            This is scrollable
          </Text>
          <Text
            className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]"
            style={{color: dark ? 'black' : 'white'}}>
            This is scrollable
          </Text>
          <Text
            className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]"
            style={{color: dark ? 'black' : 'white'}}>
            This is scrollable
          </Text>
          <Text
            className="mb-[2vh] font-[RadioCanadaBig-Bold] text-[17px]"
            style={{color: dark ? 'black' : 'white'}}>
            This is scrollable
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActualHomepage;
