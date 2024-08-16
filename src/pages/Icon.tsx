import { View, Text, useWindowDimensions, Image } from 'react-native'
import React from 'react'
import { logo } from 'src/constant/image'

const AppIcon = () => {
    const {width,height} = useWindowDimensions()
  return (
    <View className="flex flex-row items-center gap-2 mt-3">
            <View
              style={{
                backgroundColor: '#62CD5D',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                width: width * 0.115,
                height: height * 0.055,
              }}>
              <Image
                source={logo}
                style={{width: width * 0.1, height: height * 0.05}}
              />
            </View>
            <Text className="font-[RadioCanadaBig-Bold] text-[#62CD5D] text-[20px]">
              Beatify
            </Text>
          </View>
  )
}

export default AppIcon;