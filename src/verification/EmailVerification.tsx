import {
  View,
  Text,
  useWindowDimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from 'src/pages/Header';
import LottieView from 'lottie-react-native';
import SharedButton from '@shared/Button';
import useGlobalState from 'src/store/globalState';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {AuthNavigationProps} from 'src/types/navigationProps';
import {port} from 'src/api/client';
import {notificationState} from 'src/store/notificationState';
import {primaryColor} from 'src/constant/color';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Animated from 'react-native-reanimated';

type prop = {
  email: string;
};

const EmailVerification = () => {
  const {showNofitication} = notificationState();
  const {width, height} = useWindowDimensions();
  const route = useRoute<RouteProp<AuthNavigationProps, 'EmailVerification'>>();
  const {email} = route.params;
  const navigation = useNavigation<NavigationProp<AuthNavigationProps>>();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: 6});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleCodeSubmit = async () => {
    try {
      const request = await fetch(`${port}/auth/verify-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          otp: value
        }),
      });

      if (request.ok) {
        const response = await request.json();
        console.log(response);
        showNofitication('email verified 👌', primaryColor, 'white', 5);
        navigation.navigate('SignIn');
      }
    } catch (error: any) {
      console.log(error?.message);
      showNofitication(error?.message, primaryColor, 'white', 5);
    } finally {
       setValue('')
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 ">
      <SafeAreaView className="bg-white h-full">
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <Header title="Verification" />
          <View className="items-center mt-[2vh]">
            <LottieView
              style={{width: width * 0.65, height: height * 0.37}}
              source={require('../../assets/gifs/otpemail.json')}
              autoPlay
              loop={false}
            />
          </View>
          <View className="items-center">
            <Text className="text-black font-[RadioCanadaBig-Regular] text-[17px] mb-2">
              Verification Code
            </Text>
            <Text className="text-[#DBDBDB] font-[RadioCanadaBig-Regular] text-[15px]">
              We have sent the code to
            </Text>
            <Text className=" text-black text-[12px]">{email}</Text>
          </View>
          <View className=" items-center">
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={6}
              rootStyle={{marginTop: 20}}
              // textContentType="none"
              autoComplete="off"
              importantForAutofill="no"
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              testID="my-code-input"
              renderCell={({index, symbol, isFocused}) => (
                <View
                  key={index}
                  className={`mr-2 w-[40px] h-[40px] border rounded-md`}
                  style={{
                    borderColor: primaryColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onLayout={getCellOnLayoutHandler(index)}>
                  <Text
                    style={{textAlign: 'center', fontSize: 20, color: 'black'}}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />

            <View className="mt-[3vh]">
              <SharedButton
                text="Submit"
                onPress={() =>
                  value.length === 6
                    ? handleCodeSubmit()
                    : showNofitication(
                        '6 digit code is required 😒',
                        primaryColor,
                        'white',
                        5,
                      )
                }
              />
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default EmailVerification;
