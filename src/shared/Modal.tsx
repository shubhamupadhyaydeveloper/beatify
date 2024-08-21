import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


type Props = {
  bottomSheetRef: React.RefObject<BottomSheet>;
  children: React.ReactNode;
};

const SharedModal = ({ children, bottomSheetRef }: Props) => {
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );

  return (
    <BottomSheet
      backdropComponent={renderBackdrop}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      ref={bottomSheetRef}
      index={-1} // Initially hidden
      handleIndicatorStyle={{ display: 'none' }}
    >
      {children}
    </BottomSheet>
  );
};

export default SharedModal;
