import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationProp} from '@react-navigation/native';
import {HomepageNavigationProp} from 'src/types/navigationProps';
import ActualHomepage from './ActualHomepage';
import Profile from './Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';

const HompageIndex = () => {
  const Stack = createStackNavigator<HomepageNavigationProp>();
  const Drawer = createDrawerNavigator<HomepageNavigationProp>();
  return (
    <Drawer.Navigator
      initialRouteName="ActualPage"
      screenOptions={{
        drawerType: 'slide', 
        overlayColor : "transparent"
      }}>
      <Stack.Screen
        name="ActualPage"
        component={ActualHomepage}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default HompageIndex;
