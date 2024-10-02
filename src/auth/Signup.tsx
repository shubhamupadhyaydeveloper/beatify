import {
  View,
  Text,
  useWindowDimensions,
  Image,
  KeyboardTypeOptions,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback} from 'react';
import {primaryColor, secondaryColor} from 'src/constant/color';
import {SafeAreaView} from 'react-native-safe-area-context';
import {logo} from 'src/constant/image';
import AppIcon from 'src/pages/Icon';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm, Controller, FieldValues} from 'react-hook-form';
import {signupFields} from 'src/constant/auth';
import SharedInput from '@shared/TextInput';
import SharedButton from '@shared/Button';
import OAuth from 'src/pages/OAuth';
import {SignUpTypes} from 'src/types/signup';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthNavigationProps} from 'src/types/navigationProps';
import {port} from 'src/api/client';
import {notificationState} from 'src/store/notificationState';
import axios from 'axios';
import {escapeRegExp} from 'lodash';
import { signupApi } from 'src/api/loginapi';

const SignUp = () => {
  const {showNofitication} = notificationState();
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<AuthNavigationProps>>();
  const {
    control,
    formState: {errors, isSubmitting},
    reset,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(SignUpTypes),
  });

  const handleFormSubmit = useCallback(async (data: FieldValues) => {
    try {
      const response = await signupApi(data.username,data.email,data.password)
      if(response) {
        showNofitication('check your email 🔥', primaryColor, 'white', 5);
        navigation.navigate("EmailVerification",{email : data.email})
      }
    } catch (error: any) {
      console.log('error in signup',error.message)
      showNofitication('user already verified 😒', '#C80036', 'white', 5);
    } finally {
      reset();
    }
  }, []);

  const onLinkPress = () => {
    navigation.navigate('SignIn');
  };
  return (
    <SafeAreaView className=" bg-white h-full ">
      <View className="items-center">
        <AppIcon />
      </View>
      <View className="mt-[7vh]">
        <View style={{width: width * 0.85}} className="mx-auto">
          {signupFields.map(item => (
            <Controller
              key={item.name}
              name={item.name}
              control={control}
              render={({field: {value, onBlur, onChange}}) => (
                <View className="mt-2">
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
                  />
                </View>
              )}
            />
          ))}
        </View>
      </View>
      <View className="mt-[5vh] items-center">
        <SharedButton
          text="Sign Up"
          onPress={handleSubmit(handleFormSubmit)}
          isSubmitting={isSubmitting}
        />
      </View>
      <View>
        <OAuth
          authType='Signup'
          NormalText="Already a Member?"
          LinkText="Sign In"
          onLinkPress={onLinkPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
