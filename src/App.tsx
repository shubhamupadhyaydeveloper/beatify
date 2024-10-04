import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, Platform} from 'react-native';
import StackNavigator from './navigation/stack';
import {Text} from 'react-native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ShowNotification from './notification/Notification';
import { requestPermission } from './notification/nofitcationPermission';
import '../src/notification/notificatonListener'
import { setCategory } from './notification/NotificationInitial';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import { mmkyStroage } from './store/mmkv';
import { getUserDetail } from './api/inappapi';

function App(): React.JSX.Element {
  const [isReady, setIsReady] = useState(false);

  GoogleSignin.configure({
    webClientId:
      '258676774788-5k7ipu9prkpjuv6jdmgq5nohfd3i4e3b.apps.googleusercontent.com',
      forceCodeForRefreshToken : true
  });

  useEffect(() => {
      requestPermission()
      setCategory()
  },[])

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <StackNavigator />
        <ShowNotification />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

export default App;
