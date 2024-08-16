import { View, Text, useWindowDimensions, Touchable } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AntDesignIcons from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native'


const Header = ({title}: {title : string}) => {
  const {width,height} = useWindowDimensions()
  const navigation = useNavigation()
  return (
    <View className='flex flex-row px-2 mt-2 items-center ' style={{width : width}}>
       <TouchableOpacity className='flex' activeOpacity={.5} onPress={() => navigation.goBack()}>
          <AntDesignIcons name='arrowleft' color={"black"} size={25}/>
       </TouchableOpacity>
       <View className='items-center flex justify-center' style={{width : width * .84}}>
       <Text className='text-black text-center font-[RadioCanadaBig-Regular] text-[19px]'>{title}</Text>
       </View>
    </View>
  )
}

export default Header;