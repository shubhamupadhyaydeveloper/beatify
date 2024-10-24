import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  ExploreNavigationProp,
  LibraryNavigationTypes,
} from 'src/types/navigationProps';
import { SafeAreaView } from 'react-native-safe-area-context';

const EditPlaylist = () => {
  const navigation = useNavigation<NavigationProp<LibraryNavigationTypes>>();

  return (
    <SafeAreaView>
      <Text>hello</Text>
    </SafeAreaView>
  );
};

export default EditPlaylist;
