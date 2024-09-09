import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { primaryColor } from 'src/constant/color';

const PhotoOption = ({label,icon,onPress} :{label : string,icon :string,onPress? : () => void}) => {
  return (
    <TouchableOpacity activeOpacity={.85} onPress={onPress}>
      <View className="flex flex-row bg-white py-2 px-4 rounded-full items-center mt-3">
        <AntDesignIcon name={icon} color={primaryColor} size={20} />
        <Text className="text-black font-[RadioCanadaBig-Regular] ml-2">
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default PhotoOption