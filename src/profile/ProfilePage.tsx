import { View, Text, useWindowDimensions, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { primaryColor, tertiaryColor } from 'src/constant/color';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import CustomTouchableOpacity from '@shared/TouchableOpacity';
import { HomepageNavigationProp } from 'src/types/navigationProps';

const ProfilePage = () => {
 const {width:ScreenWidth ,height : ScreenHeight} = useWindowDimensions()
 const navigation = useNavigation<NavigationProp<HomepageNavigationProp>>()
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0.5)"
        barStyle="default"
      />

      <LinearGradient
        colors={[primaryColor, 'rgba(17, 17, 19, 1)']}
        style={{
          width: ScreenWidth,
          height: ScreenHeight * 0.45,
        }}>
        <TouchableOpacity
          style={{left: 13, marginTop: ScreenHeight * 0.06}}
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <AntDesignIcon name="arrowleft" color={'white'} size={30} />
        </TouchableOpacity>
        <View
          className="flex flex-row items-center mx-4"
          style={{marginTop: ScreenHeight * 0.03}}>
          <TouchableOpacity activeOpacity={0.92}>
            <View
              style={{width: 100, height: 100}}
              className="bg-white rounded-full items-center justify-center flex">
              <Text className="text-black font-[RadioCanadaBig-Bold] text-[30px]">
                S
              </Text>
            </View>
          </TouchableOpacity>
          <View className="ml-4">
            <View style={{width: ScreenWidth * 0.5}}>
              <Text className="text-white font-[RadioCanadaBig-Bold] text-[25px] leading-tight">
                Shubham Upadhyay
              </Text>
            </View>
            <View className="flex flex-row gap-1 items-center ">
              <TouchableOpacity activeOpacity={0.75} onPress={() => navigation.navigate("Followers")}>
                <View className="flex flex-row gap-1">
                  <Text className="text-white font-[RadioCanadaBig-Bold]">
                    0
                  </Text>
                  <Text className="text-graycolor">followers</Text>
                </View>
              </TouchableOpacity>
              <View className="w-[5px] h-[5px] rounded-full bg-white" />
              <TouchableOpacity activeOpacity={0.75} onPress={() => navigation.navigate("Following")}>
                <View className="flex flex-row gap-1">
                  <Text className="text-white font-[RadioCanadaBig-Bold]">
                    0
                  </Text>
                  <Text className="text-graycolor">following</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{width: 70, height: 70, marginTop: ScreenHeight * 0.04}}
          className="mx-5">
          <CustomTouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
            <View className="px-4 py-2 border border-graycolor rounded-full items-center justify-center flex">
              <Text className="text-white font-[RadioCanadaBig-Bold]">
                Edit
              </Text>
            </View>
          </CustomTouchableOpacity>
        </View>
      </LinearGradient>

      <View className="mx-5">
        <Text className="text-white font-[RadioCanadaBig-Bold] text-[20px]">Playlists</Text>
        <Text className="text-graycolor font-[RadioCanadaBig-Bold] text-[15px] mt-2">no playlist yet ...😒</Text>
      </View>
    </>
  );
}

export default ProfilePage;