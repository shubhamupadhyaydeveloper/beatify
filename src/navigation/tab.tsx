import {View, Text, StyleSheet, useWindowDimensions, Image} from 'react-native';
import React, {useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ExploreIndex from '../homepage/ExploreIndex';
import LibraryIndex from '../pages/LibraryIndex';
import CustomDrawerContent from '../pages/DrawerContent';
import HompageIndex from 'src/homepage/HompageIndex';
import CreateIndex from 'src/pages/CreateIndex';

// Move this function outside the component to avoid unnecessary re-renders
function GradientTabBar() {
  return (
    <LinearGradient
      colors={[
        'transparent',
        'rgba(0,0,0,0.4)',
        'rgba(0,0,0,0.9)',
        'rgba(0, 0, 0, 1)',
      ]}
      style={{position: 'absolute', left: 0, right: 0, top: 0, height: '100%'}}
    />
  );
}

// Memoize CustomDrawerContent to avoid re-renders
const MemoizedCustomDrawerContent = React.memo(props => {
  return <CustomDrawerContent props={{...props}}/>;
});

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        lazy: true,
        tabBarBackground: () => <GradientTabBar />,
        tabBarStyle: {
          zIndex: 5,
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 0,
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
        name="Library"
        component={LibraryIndex}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <View>
              {focused ? (
                <Image
                  source={require('../../assets/images/library.png')}
                  style={{width: 25, height: 25, tintColor: color}}
                />
              ) : (
                <Image
                  source={require('../../assets/images/music-album.png')}
                  style={{width: 25, height: 25, tintColor: color}}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateIndex}
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
    </Tab.Navigator>
  );
};

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <MemoizedCustomDrawerContent {...props} />} 
      screenOptions={{
        drawerType: 'slide',
        overlayColor: 'rgba(0, 0, 0, 0.6)',
        drawerStyle: {
          backgroundColor: '#2E2E2E',
          width: width * 0.9,
        },
      }}>
      <Drawer.Screen
        name="MainTabs"
        component={TabNavigation}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
