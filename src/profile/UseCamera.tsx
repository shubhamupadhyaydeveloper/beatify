import React, {useCallback, useEffect, useState} from 'react';
import {View, Button, Image, StyleSheet, Alert, TouchableOpacity, Text} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const UseCamera: React.FC = () => {
  const pickImage = useCallback(() => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  },[]);
  return (
    <View>
       <TouchableOpacity onPress={pickImage}>
         <Text>Choose Image</Text>
       </TouchableOpacity>
    </View>
  );
};

export default UseCamera;
