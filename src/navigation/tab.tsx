import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import EncytoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';

import LinearGradient from 'react-native-linear-gradient';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ExploreIndex from '../homepage/ExploreIndex';
import Create from '../homepage/Create';
import LibraryIndex from '../pages/LibraryIndex';
import CustomDrawerContent from '../pages/DrawerContent';
import { TabNavigationProps } from 'src/types/navigationProps';
import HompageIndex from 'src/homepage/HompageIndex';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator<TabNavigationProps>();
  const {width, height} = useWindowDimensions();

  function GradientTabBar() {
    return (
      <LinearGradient
        colors={[
          'transparent',
          'rgba(0,0,0,0.4)',
          'rgba(0,0,0,0.9)',
          'rgba(0, 0, 0, 1)',
        ]}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '100%',
        }}></LinearGradient>
    );
  }
  const Drawer = createDrawerNavigator();

  function RenderTab() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          lazy: true,
          tabBarHideOnKeyboard: true,
          tabBarBackground: () => <GradientTabBar />,
          tabBarStyle: {
            zIndex : 5,
            position: 'absolute',
            borderTopWidth: 0, // Remove the white line
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0,
            height: 60,
          },
          tabBarActiveTintColor: '#ffffff',
          tabBarLabelStyle: {
            fontFamily: 'RadioCanadaBig-Bold',
          },
          tabBarIconStyle: {
            marginTop: 10,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HompageIndex}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color}) => (
              <View>
                <MaterialCommunityIcon
                  color={color}
                  name={focused ? 'home' : 'home-outline'}
                  size={30}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={ExploreIndex}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color}) => (
              <View>
                <IonIcons color={color} name="search" size={30} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Create"
          component={Create}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color}) => (
              <View>
                <IonIcons
                  color={color}
                  name={focused ? 'add-circle' : 'add-circle-outline'}
                  size={30}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={LibraryIndex}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color}) => (
              <View>
                <IonIcons
                  color={color}
                  name={focused ? 'library' : 'library-outline'}
                  size={25}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <Drawer.Navigator
      initialRouteName="Index"
      drawerContent={props => <CustomDrawerContent   props={props}/>}
      screenOptions={{
        drawerType: 'slide',
        overlayColor: 'rgba(0, 0, 0, 0.6)',
        drawerStyle : {
          backgroundColor : "#2E2E2E",
          width : width * .9
        }
      }}>
      <Drawer.Screen
        name="Index"
        component={RenderTab}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default TabNavigation;