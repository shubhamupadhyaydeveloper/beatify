import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationProp} from '@react-navigation/native';
import {HomepageNavigationProp} from 'src/types/navigationProps';
import ActualHomepage from './ActualHomepage';
import Profile from './Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Artist from './Artist';
import SongDetail from './SongDetail';

const HompageIndex = () => {
  const Stack = createStackNavigator<HomepageNavigationProp>();
  const Drawer = createDrawerNavigator<HomepageNavigationProp>();
  return (
    <Stack.Navigator
      initialRouteName="ActualPage">
      <Stack.Screen
        name="ActualPage"
        component={ActualHomepage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Artist"
        component={Artist}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='SongDetail'
        component={SongDetail}
        options={{headerShown : false}}
      />
    </Stack.Navigator>
  );
};

export default HompageIndex;
