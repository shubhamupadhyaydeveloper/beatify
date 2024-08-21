import {View, Text, TouchableOpacity, Image, KeyboardTypeOptions, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CustomDropdown from '@shared/Dropdown';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm, Controller, FieldValues} from 'react-hook-form';
import { createSongFields } from 'src/constant/createsong';
import { CreateSongSchema } from 'src/types/create';
import SharedInput from '@shared/TextInput';

const Create = () => {
  const [imgUrl, SetImgUrl] = useState<string>("");
  const {formState : {errors,isSubmitting}, reset,control,handleSubmit} = useForm()
  const handlePress = async () => {
    await launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const imageUri = response.assets && response.assets[0]?.uri;
        if(imageUri) {
          SetImgUrl(imageUri as string)
        }
      }
    });
  };

  const options = ['Option 1', 'Option 2', 'Option 3'];
  const handleSelect = (selectedOption: string) => {
    console.log('Selected option:', selectedOption);
  };


  return (
    <SafeAreaView className='px-5 mt-[2vh]'>
      <ScrollView>

         <Text className='font-[RadioCanadaBig-Bold] text-[20px]'>Create Song</Text>

         {createSongFields.map((item) => (
            <Controller
             key={item.name}
             name={item.name}
             control={control}
             render={({field : {value , onBlur , onChange}}) => (
               <SharedInput 
                 value={value}
                 onBlur={onBlur}
                 onChange={onChange}
                 placeholder={item.placeholder}
                 label={item.label}
                 keyboardType={item.keyboardType as KeyboardTypeOptions}
                 errorText={errors[item.name]?.message}
                 secureText={item.secureText}
                 multiline={item.multiplelines}
                 labelColor={"#ffffff"}
               />
             )}
            />
         ))}
      
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
