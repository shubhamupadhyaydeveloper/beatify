import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import useGlobalState from './store/globalState';
import StackNavigator from './navigation/stack';
import {Text} from 'react-native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Notification from './notification/Notification';
import ShowNotification from './notification/Notification';

function App(): React.JSX.Element {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Wait for hydration to complete
    const unsub = useGlobalState.persist.onFinishHydration(() => {
      setIsReady(true);
    });

    // Clean up the subscription
    return () => {
      unsub?.();
    };
  }, []);

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
