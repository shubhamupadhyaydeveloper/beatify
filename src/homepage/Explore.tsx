import {View, Text, TouchableOpacity, useWindowDimensions} from 'react-native';
import React from 'react';
import Search from 'src/search/Search';
import {SafeAreaView} from 'react-native-safe-area-context';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AppNavigationProp, ExploreNavigationProp,} from 'src/types/navigationProps';

const Explore = () => {
  const navigation = useNavigation<NavigationProp<ExploreNavigationProp>>();
  const {width, height} = useWindowDimensions();
  return (
    <SafeAreaView className="px-5 mt-[3vh]">
      <View className="flex flex-row items-center gap-2">
        <TouchableOpacity
          activeOpacity={0.7}
          className=""
          // onPress={() => navigation.navigate('Profile')}
          >
          <View
            className="items-center justify-center bg-[#21c856] rounded-full"
            style={{width: 35, height: 36}}>
            <Text className="text-black font-[RadioCanadaBig-Bold]">S</Text>
          </View>
        </TouchableOpacity>
        <Text className="text-black font-[RadioCanadaBig-Bold] text-[20px]">
          Search
        </Text>
      </View>
      <TouchableOpacity
        className="bg-[#343434] flex flex-row items-center py-2 rounded-md mt-[3vh]"
        activeOpacity={0.8}
        onPress={() => navigation.navigate('SearchResults')}
        >
        <View style={{marginRight: width * 0.02, marginLeft: width * 0.04}}>
          <IonIcons color={'#ffff'} name="search" size={25} />
        </View>
        <Text className="text-white font-[RadioCanadaBig-Regular] text-[16px] ">
          What do you want to listen to?
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Explore;
