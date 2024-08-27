
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RouteProp, useRoute} from '@react-navigation/native';
import {HomepageNavigationProp} from 'src/types/navigationProps';
import LinearGradient from 'react-native-linear-gradient';
import CustomTouchableOpacity from '@shared/TouchableOpacity';
import {secondaryColor} from 'src/constant/color';

const Artist = () => {
  const route = useRoute<RouteProp<HomepageNavigationProp>>();
  const data = route.params?.data;
  const {width, height} = useWindowDimensions();



  return (
    <View>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0.4)"
        barStyle="default"
      />
      <Image
        source={{uri: data?.img}}
        style={{width, height: height * 0.38}}
        className="absolute top-0"
      />
      <View style={{zIndex: 10, width}}>
        <ScrollView>
          <View style={{height: height * 0.274}} />
          <Text
            style={{paddingLeft: 20}}
            className="text-white font-[RadioCanadaBig-Bold] items-center text-[50px]">
            {data?.name}
          </Text>
          <View className="">
            <LinearGradient
              style={{height: height * 0.15}}
              colors={['skyblue', 'rgba(17, 17, 19, 1)']}>
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
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Artist;
