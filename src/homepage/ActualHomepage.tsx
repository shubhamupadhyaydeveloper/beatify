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
import {setNavColor} from 'src/hooks/NavColor';
import {
  NavigationProp,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import {HomepageNavigationProp} from 'src/types/navigationProps';
import {recentlyData} from 'src/constant/mockdata';
import {tertiaryColor} from 'src/constant/color';

const ActualHomepage = () => {
  setNavColor({color: '#000000'});
  const {width, height} = useWindowDimensions();
  const [currentPage, SetCurrentPage] = useState('All');
  const navigation = useNavigation();

  const options: string[] = ['All', 'Latest', 'Liked'];

  return (
    <SafeAreaView className="px-5 mt-[3vh]">
      <StatusBar backgroundColor={'#000000'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-row items-center ">
          <TouchableOpacity
            activeOpacity={0.7}
            className="items-center"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <View
              className="items-center justify-center bg-[#21c856] rounded-full"
              style={{width: 35, height: 36}}>
              <Text className="text-black font-[RadioCanadaBig-Bold]">S</Text>
            </View>
          </TouchableOpacity>
          <View className="flex flex-row gap-2 ml-[2vw] ">
            {options.map(item => (
              <TouchableOpacity
                key={item}
                activeOpacity={0.7}
                onPress={() => SetCurrentPage(item)}>
                <View
                  className={` px-3 h-[40px] ${
                    item === currentPage ? 'bg-[#21c856]' : 'bg-[#343434]'
                  }  items-center justify-center rounded-full`}>
                  <Text
                    className={`${
                      item === currentPage ? 'text-black' : 'text-white'
                    } font-[RadioCanadaBig-Bold]`}>
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* <View className="mt-[3vh]">
        <FlatList
          data={recentlyData}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{height: 10}}></View>}
          renderItem={item => (
            <View className="flex flex-row" style={{marginRight: width * 0.03}}>
              <Image
                source={{uri: item.item.image}}
                style={{
                  width: width * 0.18,
                  height: 60,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                }}
              />
              <View
                className="px-2 leading-tight items-center justify-center"
                style={{
                  backgroundColor: tertiaryColor,
                  width: width * 0.25,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                }}>
                <Text className="text-white font-[RadioCanadaBig-Bold] leading-tight text-[14px] ">
                  {item.item.name}
                </Text>
              </View>
            </View>
          )}
        />
      </View> */}

        <View>
          <Text className="text-white text-[22px] font-[RadioCanadaBig-Bold] ">
            Recently Played
          </Text>
          <View className="flex flex-row gap-2 mt-[1.5vh]">
            <FlatList
              data={recentlyData}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View className="w-[13px]"></View>}
              renderItem={item => (
                <View className="flex" key={item.item.name}>
                  <Image
                    source={{uri: item.item.image}}
                    style={{width: width * 0.25, height: height * 0.12}}
                  />
                  <Text
                    style={{width: width * 0.25}}
                    className="text-white text-[11px] font-[RadioCanadaBig-Bold]">
                    {item.item.name}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
    
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActualHomepage;
