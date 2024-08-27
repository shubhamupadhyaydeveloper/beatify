import {
  View,
  Text,
  FlatList,
  ImageBackground,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {recentlyData} from 'src/constant/mockdata';
import {tertiaryColor} from 'src/constant/color';

const HomeTop = () => {
  const {width} = useWindowDimensions();
  return (
    <View className="mt-[3vh]">
      <FlatList
        data={recentlyData}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        ItemSeparatorComponent={() => <View style={{height: 10}}></View>}
        renderItem={item => (
          <View className="flex flex-row" style={{marginRight: width * 0.03}}>
            <ImageBackground
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
    </View>
  );
};

export default HomeTop;
