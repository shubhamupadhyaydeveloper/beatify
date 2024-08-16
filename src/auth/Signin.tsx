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
import {SignInTypes} from 'src/types/signin';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthNavigationProps} from 'src/types/navigationProps';
import bottomSheet from '@gorhom/bottom-sheet';
import SharedModal from '@shared/Modal';
import ForgetPassword from 'src/forgetpassword/ForgetPassword';

const SignIn = () => {
  const navigation = useNavigation<NavigationProp<AuthNavigationProps>>();
  const bottomSheetRef = useRef<bottomSheet>(null);
  const {width, height} = useWindowDimensions();

  const {
    control,
    formState: {errors, isSubmitting},
    reset,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(SignInTypes),
  });

  const handleFormSubmit = async (data: FieldValues) => {
    try {
    } catch (error: any) {
      console.log('error in signin Submit', error?.message);
    } finally {
      reset();
    }
  };

  const onLinkPress = () => {
    navigation.navigate('EmailVerification');
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
        {/* <Text className="text-black mb-[3vh] text-center font-[RadioCanadaBig-Bold] text-[18px]">
          Sign In
        </Text> */}
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

      <SharedModal bottomSheetRef={bottomSheetRef}>
         <ForgetPassword />
      </SharedModal>
    </SafeAreaView>
  );
};

export default SignIn;
