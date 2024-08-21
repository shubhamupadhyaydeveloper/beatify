import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import IonIcons from 'react-native-vector-icons/Ionicons'

const Search = () => {

  return (
    <SafeAreaView className='px-3 mt-[3vh]'>
       <Text className='text-black'>Searh</Text>
    </SafeAreaView>
  );
};

export default Search;
