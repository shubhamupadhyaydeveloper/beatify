import {
  View,
  Text,
  useWindowDimensions,
  StatusBar,
  Linking,
} from 'react-native';
import React, {useCallback, useEffect, useMemo} from 'react';
import {setNavColor} from 'src/hooks/NavColor';
import {resetAndNavigate} from 'src/navigation/navigaionutils';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {jwtDecode} from 'jwt-decode';
import {notificationState} from 'src/store/notificationState';
import {primaryColor} from 'src/constant/color';
import {extractTypeAndId} from 'src/hooks/extract';
import {getReelDataApi} from 'src/api/inappapi';
import {mmkyStroage} from 'src/store/mmkv';
import {refreshTokenapi} from 'src/api/loginapi';

type Decoded = {
  exp: number;
};

const SplashScreen = () => {
  const accessToken = mmkyStroage.getItem('accessToken');
  const refreshToken = mmkyStroage.getItem('refreshToken');
  const {width, height} = useWindowDimensions();
  setNavColor({color: '#111113'});
  const initialRender = useSharedValue(0);
  const {showNofitication} = notificationState();

  const checkToken = useMemo(
    () => () => {
      if (accessToken) {
        const decodedAccessToken = jwtDecode<Decoded>(accessToken);
        const decodedRefreshToken = jwtDecode<Decoded>(refreshToken!);

        const currentTime = Date.now() / 1000;

        if (decodedRefreshToken?.exp < currentTime) {
          resetAndNavigate('Auth');
          showNofitication(
            'Session Expiry,Please Login',
            primaryColor,
            'white',
          );
          return false;
        }

        if (decodedAccessToken?.exp < currentTime) {
          try {
            refreshTokenapi();
          } catch (error: any) {
            console.log('error in refresh token', error?.message);
            return false;
          }
        }
        resetAndNavigate('App');
        return true;
      } else {
        resetAndNavigate('Auth');
        return false;
      }
    },
    [],
  );
  const handleDeepLink = useCallback(async (event: any, deepLinkType: string) => {
    const tokenValid = checkToken();
    if (!tokenValid) return;

    const {url} = event;
    if (!url) {
      handleNoUrlCase(deepLinkType);
      return;
    }

    const {type, id} = extractTypeAndId(url);

    switch (type) {
      case 'song':
        await getReelDataApi(id, deepLinkType);
        break;
      default:
        handleDefaultCase(deepLinkType);
        break;
    }
  },[])

  const handleNoUrlCase = (deepLinkType: string) => {
    if (deepLinkType !== 'RESUME') {
      resetAndNavigate('BottomTab');
    }
  };

  const handleDefaultCase = (deepLinkType: string) => {
    if (deepLinkType !== 'RESUME') {
      resetAndNavigate('BottomTab');
    }
  };

  // useEffect(() => {
  //   Linking.getInitialURL().then(url => {
  //     handleDeepLink({url}, 'CLOSE');
  //   });

  //   Linking.addEventListener('url', event => handleDeepLink(event, 'RESUME'));
  // }, []);

  useEffect(() => {
    initialRender.value = withSpring(1, {
      mass: 0.5,
      stiffness: 200,
      damping: 10,
    });

    const timeOut = setTimeout(() => checkToken(), 2000);
    return () => clearTimeout(timeOut);
  }, []);

  const nameArray = ['B', 'e', 'a', 't', 'i', 'f', 'y'];

  return (
    <View
      style={{width, height}}
      className=" items-center justify-center bg-[#111113]">
      <StatusBar translucent backgroundColor="#111113" barStyle="default" />
      <View className="flex flex-row gap-[2.5px]">
        {nameArray.map((item, index) => {
          const animationStyle = useAnimatedStyle(() => {
            const translateY = interpolate(
              initialRender.value,
              [0, 1],
              [15, -15],
              Extrapolation.CLAMP,
            );

            const opacity = interpolate(
              initialRender.value,
              [0, 1],
              [0, 1],
              Extrapolation.CLAMP,
            );

            return {
              transform: [
                {
                  translateY: withDelay(
                    index * 200,
                    withTiming(translateY, {
                      duration: 800,
                    }),
                  ),
                },
              ],
              opacity: withDelay(
                index * 200,
                withTiming(opacity, {
                  duration: 800,
                }),
              ),
            };
          });

          return (
            <Animated.View style={[animationStyle]} key={item}>
              <Animated.Text
                style={[animationStyle]}
                className="text-primary text-[35px] font-[RadioCanadaBig-Bold]">
                {item}
              </Animated.Text>
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
};

export default SplashScreen;
