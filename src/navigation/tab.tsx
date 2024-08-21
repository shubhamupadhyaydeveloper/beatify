import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNavigationProps} from 'src/types/navigationProps';
import ActualHomepage from 'src/homepage/ActualHomepage';
import Profile from 'src/homepage/Profile';
import {BlurView} from '@react-native-community/blur';
import EncytoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Create from 'src/homepage/Create';
import Explore from 'src/homepage/Explore';
import Library from 'src/homepage/Library';
import HompageIndex from 'src/homepage/HompageIndex';
import ExploreIndex from 'src/homepage/ExploreIndex';
import LinearGradient from 'react-native-linear-gradient';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator<TabNavigationProps>();

  function GradientTabBar() {
    return (
      <LinearGradient
      colors={['transparent', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.9)', 'rgba(0, 0, 0, 1)']}
      style={{
        position: 'absolute',
        left: 0, 
        right: 0,
        top: 0,
        height: '100%',
      }}
      >
      </LinearGradient>
    );
  }

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarBackground: () => (
          <GradientTabBar />
        ),
        tabBarStyle: {
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
            <View
           >
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
        component={Library}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <View>
              <IonIcons
                color={color}
                name={focused ? 'library' : 'library-outline'}
                size={27}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
