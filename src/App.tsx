import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, Platform} from 'react-native';
import useGlobalState from './store/globalState';
import StackNavigator from './navigation/stack';
import {Text} from 'react-native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ShowNotification from './notification/Notification';
import { batteryOptimization, powerManager, requestPermission } from './notification/nofitcationPermission';
import '../src/notification/notificatonListener'
import { setCategory } from './notification/NotificationInitial';

function App(): React.JSX.Element {
  const [isReady, setIsReady] = useState(false);

  // useEffect(() => {

  //   const unsub = useGlobalState.persist.onFinishHydration(() => {
  //     setIsReady(true);
  //   });

  //   return () => {
  //     unsub?.();
  //   };
  // }, []);

  useEffect(() => {
      requestPermission()
      setCategory()
      // if(Platform.OS === 'android') {
      //    batteryOptimization()
      //   //  powerManager()
      // }
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
