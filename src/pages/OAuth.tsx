import {View, Text, Image, TouchableOpacity, useWindowDimensions} from 'react-native';
import React from 'react';
import {githubIcon, googleIcon} from 'src/constant/image';
import {primaryColor} from 'src/constant/color';

type props = {
   NormalText : string,
   LinkText : string,
   onLinkPress : () => void;
}

const OAuth = ({NormalText,LinkText,onLinkPress}:props) => {
  const {width,height} = useWindowDimensions()
  return (
    <View className='items-center'>
      <View className="px-3 gap-2 flex flex-row items-center mt-[4vh]">
        <View className={`bg-black h-[1px] `} style={{width: width * 0.35}} />
        <Text className={`text-black`}>or</Text>
        <View className={`bg-black h-[1px]`} style={{width: width * 0.35}} />
      </View>

      <View
        className="flex flex-row justify-between items-center mt-[.5vh]"
        style={{width: width * 0.4}}>
        <Image source={googleIcon} />
        <Image source={githubIcon} className="w-[10vw] h-[5vh]" />
      </View>

      <View className="flex flex-row gap-1 mt-[4vh]">
        <Text className={`text-black text-[12px]`}>{NormalText}</Text>
        <TouchableOpacity activeOpacity={0.7} onPress={onLinkPress}>
          <Text className={`text-[12px] `} style={{color: primaryColor}}>
           {LinkText}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OAuth;
