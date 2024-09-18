import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, {useCallback, useMemo, useRef} from 'react';
import {useWatch} from 'react-hook-form';
import {
  View,
  Text,
  StyleSheet,
  Button,
  useWindowDimensions,
} from 'react-native';
import { tertiaryColor } from '../constant/color';

type Props = {
  bottomSheetRef: React.RefObject<BottomSheetModal>;
  children: React.ReactNode;
  backgroundColor?: string;
  customSnapPoints: string[];
};

const SharedModal = ({
  children,
  bottomSheetRef,
  backgroundColor,
  customSnapPoints,
}: Props) => {

  const {height} = useWindowDimensions();

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
    <BottomSheetModal
      backgroundStyle={{
        backgroundColor: backgroundColor ?? tertiaryColor,
      }}
      backdropComponent={renderBackdrop}
      snapPoints={customSnapPoints}
      enablePanDownToClose={true}
      ref={bottomSheetRef}
      index={0}
      handleIndicatorStyle={{
        display: 'flex',
        backgroundColor: '#bdbdbc',
        width: 30,
      }}>
      <BottomSheetView>{children}</BottomSheetView>
    </BottomSheetModal>
  );
};

export default SharedModal;
