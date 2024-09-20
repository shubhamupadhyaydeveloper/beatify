import React from 'react';

import {ExploreNavigationProp} from 'src/types/navigationProps';
import Explore from './Explore';
import Search from 'src/search/Search';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchSong from 'src/pages/SearchSong';

const ExploreIndex = () => {
  const Stack = createNativeStackNavigator<ExploreNavigationProp>();
  return (
    <Stack.Navigator screenOptions={{animation: 'slide_from_right'}}>
      <Stack.Screen
        name="ActualExplore"
        component={Explore}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchResults"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchSong"
        component={SearchSong}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ExploreIndex;
