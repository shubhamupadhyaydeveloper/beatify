import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const navigation = (routeName: string, params?: object) => {
  navigationRef.isReady();
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(routeName, params));
  }
};

export const resetAndNavigate = (routeName: string) => {
  navigationRef.isReady();
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: routeName}],
      }),
    );
  }
};
