import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {
  NavigationProp,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';

import CustomTouchableOpacity from '../shared/TouchableOpacity';
import {
  ExploreNavigationProp,
} from 'src/types/navigationProps';
import {musicOptions} from 'src/constant/mockdata';

const Explore = () => {
  const navigation = useNavigation<NavigationProp<ExploreNavigationProp>>();
  const {width:ScreenWidth, height: ScreenHeight} = useWindowDimensions();

  return (
    <SafeAreaView className="px-5 mt-[3vh]">
      <View className="flex flex-row items-center gap-2">
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
        <Text className="text-white font-[RadioCanadaBig-Bold] text-[20px]">
          Search
        </Text>
      </View>
      <TouchableOpacity
        className="bg-white flex flex-row items-center py-2 rounded-md mt-[3vh]"
        activeOpacity={0.8}
        onPress={() => navigation.navigate('SearchResults')}>
        <View style={{marginRight: ScreenWidth * 0.02, marginLeft: ScreenWidth * 0.04}}>
          <IonIcons color={'black'} name="search" size={25} />
        </View>
        <Text
          className=" font-[RadioCanadaBig-Regular] text-[16px] "
          style={{color: 'black'}}>
          What do you want to listen to?
        </Text>
      </TouchableOpacity>

      <View className=''>
        <FlatList
          ItemSeparatorComponent={() => <View className='h-[10px]'/>}
          data={musicOptions}
          keyExtractor={(item, index) => index.toString()}
          scrollEventThrottle={16}
          numColumns={2}
          contentContainerStyle={{
            paddingHorizontal: ScreenWidth * 0.01,
            marginTop : 20
          }}
          renderItem={({item}) => (
            <CustomTouchableOpacity>

            <View
              style={{
                backgroundColor: item.color,
                width: ScreenWidth * 0.42,
                height: 80,
                marginRight: 10,
              }}
              className=" rounded-sm relative overflow-hidden">
              <View style={{width : ScreenWidth * .25}}>

              <Text className="text-white font-[RadioCanadaBig-Bold] mt-[1vh] ml-[2vw]">
                {item.name}
              </Text>
              </View>
              <View className='absolute bottom-0 right-[-2vw] rotate-[15deg]'>
                 <Image source={{uri : item.image}}  style={{width : 60 ,height : 60}} className='rounded-md'/>
              </View>
            </View>
            </CustomTouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Explore;
