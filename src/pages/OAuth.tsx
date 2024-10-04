import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {githubIcon, googleIcon} from 'src/constant/image';
import {primaryColor} from 'src/constant/color';
import {signInWithGoogle, signUpWithGoogle} from 'src/auth/GoogleSignin';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {notificationState} from 'src/store/notificationState';
import { resetAndNavigate } from 'src/navigation/navigaionutils';

type props = {
  NormalText: string;
  LinkText: string;
  onLinkPress: () => void;
  authType: 'Signin' | 'Signup';
};

const OAuth = ({NormalText, LinkText, onLinkPress, authType}: props) => {
  const {width, height} = useWindowDimensions();
  const {showNofitication} = notificationState();

  const handleAuthentication = async () => {
    if (authType === 'Signin') {
      const response = await signInWithGoogle();
      if (response) {
        showNofitication('user login success 🔥', primaryColor, 'white', 0);
        resetAndNavigate('App')
      } else {
        showNofitication('user not registered 😒', '#C80036', 'white');
      }
    } else if (authType === 'Signup') {
      const response = await signUpWithGoogle();
      if(response) {
        showNofitication('user signup success 🔥', primaryColor, 'white', 0);
      } else {
        showNofitication('user already registered 😒', '#C80036', 'white',0);
      }
    }
  };

  return (
    <View className="items-center">
      <View className="px-3 gap-2 flex flex-row items-center mt-[2vh]">
        <View className={`bg-black h-[1px] `} style={{width: width * 0.35}} />
        <Text className={`text-black`}>or</Text>
        <View className={`bg-black h-[1px]`} style={{width: width * 0.35}} />
      </View>

      <View className="flex flex-row  mt-[3vh]">
        <TouchableOpacity activeOpacity={0.8} onPress={handleAuthentication}>
          <View
            className="rounded-[15px]  flex flex-row items-center justify-center bg-primary"
            style={{width: width * 0.8, height: height * 0.06}}>
            <AntDesignIcon name="google" color={'black'} size={30} />
            <Text className="text-white font-[RadioCanadaBig-Bold] ml-2 text-[15px]">
              Google
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View className="flex flex-row gap-1 mt-[4vh]">
        <Text className={`text-black text-[12px]`}>{NormalText}</Text>
        <TouchableOpacity activeOpacity={0.7} onPress={onLinkPress}>
          <Text className={`text-[12px] `} style={{color: primaryColor}}>
            {LinkText}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OAuth;
