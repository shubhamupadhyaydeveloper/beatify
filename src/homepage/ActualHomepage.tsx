import { View, Text, StatusBar, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { setNavColor } from 'src/hooks/NavColor';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppNavigationProp, HomeNavigationProp, TabNavigationProps } from 'src/types/navigationProps';

const ActualHomepage = () => {
  setNavColor({color : "#343434"})
  const {width , height} = useWindowDimensions()
  const navigation = useNavigation<NavigationProp<HomeNavigationProp>>()

  return (
    <SafeAreaView>
       <StatusBar backgroundColor={"#343434"} />
       <View className='flex flex-row'>
        <TouchableOpacity activeOpacity={.7} className='items-center' onPress={() => navigation.navigate("Profile")}>
          <View className='items-center justify-center bg-[#21c856] rounded-full' style={{width : 40, height : 40}}>
            <Text className='text-black font-[RadioCanadaBig-Bold]'>S</Text>
          </View>

        </TouchableOpacity>
       </View>
      <Text className='text-black'>ActualHomepage</Text>
    </SafeAreaView>
  )
}

export default ActualHomepage;