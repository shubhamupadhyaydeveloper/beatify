import {
  View,
  Text,
  useWindowDimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from 'src/pages/Header';
import LottieView from 'lottie-react-native';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm, Controller, FieldValues} from 'react-hook-form';
import {VerificationTypes} from 'src/types/signup';
import SharedInput from '@shared/TextInput';
import SharedButton from '@shared/Button';
import useGlobalState from 'src/store/globalState';

type prop = {
  email: string;
};

const EmailVerification = () => {
  const {width, height} = useWindowDimensions();
  const {setLoggenIn} = useGlobalState()

  const {
    formState: {errors, isSubmitting},
    handleSubmit,
    reset,
    control,
  } = useForm({
    resolver: zodResolver(VerificationTypes),
  });

  const handleCodeSubmit = (data: FieldValues) => {
    try {
      console.log(data);
      setLoggenIn(true);
      
    } catch (error:any) {
      console.log(error?.message) 
    } finally {
      reset()
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
            <Text className=" text-black text-[12px]">
              shubhamwork48@gmail.com
            </Text>
          </View>
          <View className=" items-center">
            <Controller
              name="code"
              key="code"
              control={control}
              render={({field: {value, onBlur, onChange}}) => (
                <SharedInput
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  placeholder="Enter code"
                  label=""
                  inputWidth={width * 0.8}
                  keyboardType="numeric"
                  errorText={errors['code']?.message}
                  secureText={true}
                />
              )}
            />
            <View className="mt-[3vh]">
              <SharedButton
                text="Submit"
                onPress={handleSubmit(handleCodeSubmit)}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default EmailVerification;
