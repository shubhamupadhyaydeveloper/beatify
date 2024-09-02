import {
  View,
  Text,
  useWindowDimensions,
  KeyboardTypeOptions,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from 'src/pages/Header';
import {useForm, Controller, FieldValues} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {ResetPasswordTypes} from 'src/types/signin';
import {resetPasswordFields} from 'src/constant/auth';
import SharedInput from '@shared/TextInput';
import SharedButton from '@shared/Button';
import LottieView from 'lottie-react-native';

const ResetPassword = () => {
  const {width, height} = useWindowDimensions();

  const {
    formState: {errors, isSubmitting},
    reset,
    handleSubmit,
    control,
  } = useForm({
    resolver: zodResolver(ResetPasswordTypes),
  });

  const handleFormSumbit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <SafeAreaView className="flex h-full bg-white">
      <Header title="Reset Password" />
      <View className="items-center mt-[2vh]">
        <LottieView
          style={{width: width * 0.75, height: height * 0.35}}
          source={require('../../assets/gifs/reset.json')}
          autoPlay
          loop={false}
        />
      </View>
      <View className="flex justify-center items-center ">
        <View className="" style={{width: width * 0.85}}>
          {resetPasswordFields.map(item => (
            <Controller
              name={item.name}
              key={item.name}
              control={control}
              render={({field: {value, onBlur, onChange}}) => (
                <View className="mt-2">
                  <SharedInput
                    placeholder={item.placeholder}
                    keyboardType={item.keyboardType as KeyboardTypeOptions}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    label={item.label}
                    errorText={errors[item.name]?.message}
                    secureText={item.secureText}
                  />
                </View>
              )}
            />
          ))}
          <Text className="text-red-500 text-[12px]">
            {errors['Confirm']?.message as string}
          </Text>
        </View>

        <View className="mt-[5vh]">
          <SharedButton
            text="Submit"
            onPress={handleSubmit(handleFormSumbit)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;
