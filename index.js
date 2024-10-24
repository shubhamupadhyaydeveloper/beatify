/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import messaging from '@react-native-firebase/messaging';
import {displayNotification} from 'src/notification/NotificationInitial';

async function onMessageReceived(message) {
  const {title, description, imageUrl,category,actionTitle} = message.data;
  await displayNotification({
    title,
    message: description,
    image: imageUrl,
    categoryId: category,
    actionTitle : actionTitle
  });
}

messaging().onMessage(onMessageReceived);
messaging().setBackgroundMessageHandler(onMessageReceived);

AppRegistry.registerComponent(appName, () => App);
