import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNavigationProps} from 'src/types/navigationProps';
import ActualHomepage from 'src/homepage/ActualHomepage';
import Profile from 'src/homepage/Profile';
import {BlurView} from '@react-native-community/blur';
import EncytoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons"
import IonIcons from 'react-native-vector-icons/Ionicons'
import Create from 'src/homepage/Create';
import Explore from 'src/homepage/Explore';
import Library from 'src/homepage/Library';


const TabNavigation = () => {
  const Tab = createBottomTabNavigator<TabNavigationProps>();


  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#343434',
          height: 60,
          paddingBottom : 5
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarLabelStyle: {
          fontFamily: 'RadioCanadaBig-Bold',
        },
        tabBarIconStyle : {
           marginTop : 5
        },
        
      }}>
      <Tab.Screen
        name="Home"
        component={ActualHomepage}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <View className={focused ? `bg-[#21c856] w-[60px] items-center py-1 rounded-full` : ""}>
              <MaterialCommunityIcon color={color} name={focused ? "home" : "home-outline"} size={25} />
            </View>
          ),
        }}
      />
        <Tab.Screen
          name="Search"
          component={Explore}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color}) => (
            <View className={focused ? `bg-[#21c856] w-[60px] items-center py-1 rounded-full` : ""}>
              <IonIcons color={color} name="search" size={25} />
            </View>
          ),}}
        />
        <Tab.Screen
          name="Create"
          component={Create}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color}) => (
            <View className={focused ? `bg-[#21c856] w-[60px] items-center py-1 rounded-full` : ""}>
              <IonIcons color={color} name={focused ? "add-circle" : "add-circle-outline"} size={25} />
            </View>
          ),}}
        />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
          <View className={focused ? `bg-[#21c856] w-[60px] items-center py-1 rounded-full` : ""}>
            <IonIcons color={color} name={focused ? "library" : "library-outline"} size={22} />
          </View>
        ),}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  iconContainer: {
    width: 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'transparent', // Default background color (transparent)
  },
  iconContainerActive: {
    backgroundColor: '#007BFF', // Background color for the active tab icon
  },
});