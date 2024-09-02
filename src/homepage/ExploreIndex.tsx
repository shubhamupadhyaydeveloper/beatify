import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ExploreNavigationProp} from 'src/types/navigationProps';
import Explore from './Explore';
import Search from 'src/search/Search';
import Reels from 'src/pages/Reels';

const ExploreIndex = () => {
  const Stack = createStackNavigator<ExploreNavigationProp>();
  return (
    <Stack.Navigator>
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
        name="Reels"
        component={Reels}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ExploreIndex;
