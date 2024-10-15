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
import {ForgetPasswordTypes, SignInTypes} from 'src/types/signin';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthNavigationProps} from 'src/types/navigationProps';
import bottomSheet from '@gorhom/bottom-sheet';
import SharedModal from '@shared/Modal';

const ForgetPassword = () => {
  const bottomSheetRef = useRef<bottomSheet>(null);
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<AuthNavigationProps>>()

  const {
    control,
    formState: {errors, isSubmitting},
    reset,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(ForgetPasswordTypes),
  });

  const handleForgetPassword = (data: FieldValues) => {
    console.log(data);
    try {
        // navigation.navigate("EmailVerification")
    } catch (error:any) {
        console.log(error?.message)
    } finally {
        reset()
    }
  };


  return (
    <View >
        <View>
          <Text className="text-black text-center font-[RadioCanadaBig-Regular] text-[18px]">
            Forget Password
          </Text>
          <Text className="text-[#AEAEAE] text-center mt-[2vh] text-[13px] font-[RadioCanadaBig-Regular] ">
            Enter your Email for Restore Password
          </Text>
        </View>
        <View className="px-3 mt-[6vh] mx-auto" style={{width: width * 0.85}}>
          <Controller
            name="forgetemail"
            key="forgetemail"
            control={control}
            render={({field: {value, onBlur, onChange}}) => (
              <SharedInput
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                label="Forget Email"
                placeholder="Enter your email"
                keyboardType="email-address"
                errorText={errors['forgetemail']?.message}
                secureText={false}
                
              />
            )}
          />
          <View className="items-center mt-[3vh]">
            <SharedButton
              text="Send Code"
              onPress={handleSubmit(handleForgetPassword)}
              isSubmitting={isSubmitting}
            />
          </View>
        </View>
    </View>
  );
};

export default ForgetPassword;
