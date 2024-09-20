import {View, Text, TouchableOpacity, useWindowDimensions, Linking} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {primaryColor, secondaryColor, tertiaryColor} from 'src/constant/color';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import useGlobalState from 'src/store/globalState';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HomepageNavigationProp } from 'src/types/navigationProps';
import { githubLink } from 'src/constant/text';

const CustomDrawerContent = ({props}: {props: any}) => {
  const {width, height} = useWindowDimensions();
  const {setLoggenIn} = useGlobalState()
  const navigation = useNavigation<NavigationProp<HomepageNavigationProp>>()

  const handleOpenUrl = () => {
     
  }

  return (
    <DrawerContentScrollView {...props}>
      <View style={{width, height: height * 0.98}} className="">
        <View className="flex flex-row gap-3 px-5 items-center mb-3  mt-1">
          <View className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-primary">
            <Text className="text-black font-[RadioCanadaBig-Bold] text-[16px]">
              S
            </Text>
          </View>
          <View>
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[20px]">
              Shubham Upadhyay
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              className=""
              onPress={() => navigation.navigate('ProfilePage')}>
              <Text className="font-[RadioCanadaBig-Regular] text-[12px] text-graycolor">
                View profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="border-[.5px] w-full bg-secondary" />

        <View className="flex items-start px-5 mt-[5vh]">
          <View className="flex flex-row gap-5 items-center">
            <MaterialCommunityIcon
              name="face-man"
              size={27}
              color={secondaryColor}
            />
            <TouchableOpacity activeOpacity={0.7} className="" onPress={() => setLoggenIn(false)}>
              <Text className="font-[RadioCanadaBig-Regular] text-[15px] text-white">
                Develper Info
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-row gap-5 mt-[1vh] items-center">
            <FontAwesomeIcon name="code" size={27} color={secondaryColor} />
            <TouchableOpacity onPress={() => Linking.openURL(githubLink)}>
              <Text className="font-[RadioCanadaBig-Regular] text-[15px] text-white">
                Code
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
