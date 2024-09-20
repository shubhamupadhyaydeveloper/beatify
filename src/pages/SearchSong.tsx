import {View, Text} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ExploreNavigationProp} from 'src/types/navigationProps';
import Animated from 'react-native-reanimated';

const SearchSong = () => {
  const route = useRoute<RouteProp<ExploreNavigationProp, 'SearchSong'>>();
  const {image, searchKeyword, tagName} = route.params;
  return (
    <View>
      <Animated.Image
        source={{uri: image}}
        style={{width: '100%', height: 300}}
        sharedTransitionTag={tagName}
      />
    </View>
  );
};

export default SearchSong;
