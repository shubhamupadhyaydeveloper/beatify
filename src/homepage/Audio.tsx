import {View, Text, TouchableOpacity, useWindowDimensions} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import React from 'react';
import {secondaryColor, tertiaryColor} from 'src/constant/color';
import FeatherIcon from 'react-native-vector-icons/Feather';

type prop = {
    handleAudioUrl : (value:string) => void
}

const Audio = ({handleAudioUrl}:prop) => {
  const {width,height} = useWindowDimensions()
  const handleAudioSelect = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.audio],
      });

      if (res[0]?.uri) {
        handleAudioUrl(res[0]?.uri)
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled audio selection');
      } else {
        console.error('AudioPicker Error: ', err);
      }
    }
  };

  return (
    <View>
      <Text className="text-white font-[RadioCanadaBig-Bold] mb-2 mt-[1.5vh]">
        Upload Audio
      </Text>
      <TouchableOpacity
        onPress={handleAudioSelect}
        activeOpacity={0.7}
        className="flex flex-row rounded-lg items-center justify-center"
        style={{
          backgroundColor: tertiaryColor,
          width: width * 0.885,
          height: height * 0.1,
        }}>
        <View
          className=" ">
          <FeatherIcon name="music" color={'white'} size={25} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Audio;
