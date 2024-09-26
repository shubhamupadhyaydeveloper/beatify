import {
  View,
  Text,
  useWindowDimensions,
  Image,
  KeyboardTypeOptions,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import {primaryColor, secondaryColor} from 'src/constant/color';
import {SafeAreaView} from 'react-native-safe-area-context';
import {logo} from 'src/constant/image';
import AppIcon from 'src/pages/Icon';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm, Controller, FieldValues} from 'react-hook-form';
import {signinFields} from 'src/constant/auth';
import SharedInput from '@shared/TextInput';
import SharedButton from '@shared/Button';
import OAuth from 'src/pages/OAuth';
import {loginApiType, SignInTypes} from 'src/types/signin';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthNavigationProps} from 'src/types/navigationProps';
import bottomSheet from '@gorhom/bottom-sheet';
import SharedModal from '@shared/Modal';
import ForgetPassword from 'src/forgetpassword/ForgetPassword';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import useGlobalState from 'src/store/globalState';
import ShowNotification from 'src/notification/Notification';
import { notificationState } from 'src/store/notificationState';
import { port } from 'src/api/client';
import axios from 'axios';
import { loginApi } from 'src/api/loginapi';

const SignIn = () => {
  const navigation = useNavigation<NavigationProp<AuthNavigationProps>>();
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const {width, height} = useWindowDimensions();
  const snapPoint = ['35%'];
  const {showNofitication} = notificationState()

  const {
    control,
    formState: {errors, isSubmitting},
    reset,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(SignInTypes)
  });

  const handleFormSubmit = async (data: FieldValues) => {
    try {
    const accessToken = await loginApi(data.email,data.password)
     if(accessToken) {
         showNofitication('user login success 🔥', primaryColor, 'white');
     }
    } catch (error: any) {
      showNofitication(error?.message, '#C80036', 'white', 5);
    } finally {
      reset();
    }
  };

  const onLinkPress = () => {
    navigation.navigate('EmailVerification',{email : "hello"});
  };

  const handlePress = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <SafeAreaView className=" bg-white h-full ">
      <View className="items-center">
        <AppIcon />
      </View>
      <View className="mt-[7vh]">
 
        <View style={{width: width * 0.85}} className="mx-auto">
          {signinFields.map(item => (
            <Controller
              key={item.name}
              name={item.name}
              control={control}
              render={({field: {value, onBlur, onChange}}) => (
                <View className="mt-3">
                  <SharedInput
                    keyboardType={item.keyboardType as KeyboardTypeOptions}
                    label={item.label}
                    placeholder={item.placeholder}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    errorText={errors[item.name]?.message}
                    secureText={item.secureText}
                    showError={true}
                    isShake={true}
                    isSubmitting={isSubmitting}
                  />
                </View>
              )}
            />
          ))}

          <TouchableOpacity
            activeOpacity={0.7}
            className="mt-[1vh]"
            onPress={handlePress}>
            <Text style={{color: primaryColor}} className="text">
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-[5vh] items-center">
        <SharedButton
          text="Sign In"
          onPress={handleSubmit(handleFormSubmit)}
          isSubmitting={isSubmitting}
        />
      </View>
      <View>
        <OAuth
          NormalText="Not a Member?"
          LinkText="Register Now"
          onLinkPress={onLinkPress}
        />
      </View>

      <SharedModal bottomSheetRef={bottomSheetRef} customSnapPoints={snapPoint}>
        <ForgetPassword />
      </SharedModal>
    </SafeAreaView>
  );
};

export default SignIn;
