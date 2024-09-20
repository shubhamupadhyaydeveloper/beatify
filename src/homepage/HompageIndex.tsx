import {View, Text} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {HomepageNavigationProp} from 'src/types/navigationProps';
import ActualHomepage from './ActualHomepage';
import Artist from './Artist';
import SongDetail from './SongDetail';
import ProfilePage from 'src/profile/ProfilePage';
import EditProfile from 'src/profile/EditProfile';
import Followers from 'src/profile/Followers';
import Following from 'src/profile/Following';
import UseCamera from 'src/profile/UseCamera';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileImage from '../profile/ProfileImage';

const HompageIndex = () => {
  const Stack = createNativeStackNavigator<HomepageNavigationProp>();
  return (
    <Stack.Navigator
      initialRouteName="ActualPage"
      screenOptions={{animation: 'slide_from_right', headerShown: false}}>
      <Stack.Screen name="ActualPage" component={ActualHomepage} />
      <Stack.Screen name="Artist" component={Artist} />
      <Stack.Screen name="SongDetail" component={SongDetail} />
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Followers" component={Followers} />
      <Stack.Screen name="Following" component={Following} />
      <Stack.Screen name="CameraPage" component={UseCamera} />
      <Stack.Screen
        name="ProfileImage"
        component={ProfileImage}
        options={{presentation: 'transparentModal',animation : "default"}}
      />
    </Stack.Navigator>
  );
};

export default HompageIndex;
