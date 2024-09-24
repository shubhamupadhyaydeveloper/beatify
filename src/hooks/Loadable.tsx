import React, { Suspense } from 'react';
import { Text } from 'react-native';

const Loadable = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P) => (
    <Suspense fallback={<Text>Loading...</Text>}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
