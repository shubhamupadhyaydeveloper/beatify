import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import useGlobalState from './store/globalState';
import StackNavigator from './navigation/stack';
import Loader from '@shared/Loader';

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

  if (!isReady) {
    return (
      <Loader />
    );
  }

  return <StackNavigator />;
}

export default App;
