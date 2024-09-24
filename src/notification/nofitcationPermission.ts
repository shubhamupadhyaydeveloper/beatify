import notifee from '@notifee/react-native';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';

export const requestPermission = async () => {
  await notifee.requestPermission();
  await notifee.setBadgeCount(0);
  await messaging().registerDeviceForRemoteMessages();
  const token = await messaging().getToken();
  console.log('this is token', token);
};
