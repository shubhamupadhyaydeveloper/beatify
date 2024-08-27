import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardTypeOptions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import DocumentPicker from 'react-native-document-picker';
import {useForm, Controller, FieldValues} from 'react-hook-form';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Audio from './Audio';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import AppLoader from '../shared/AppLoader';
import Notification from '@shared/Notification';
import { createSongFields } from '../constant/createsong';
import SharedInput from '../shared/TextInput';
import { primaryColor, secondaryColor, tertiaryColor } from '../constant/color';
import CustomDropdown from '../shared/Dropdown';
import SharedButton from '../shared/Button';

const Create = () => {
  const navigation = useNavigation()
  const [localState, SetLocalState] = useState({
    imgUrl: '',
    audioUrl: '',
    category: '',
  });
  const [errorMessage, SetErrorMessage] = useState<string | null>(null);
  const {width, height} = useWindowDimensions();
  const {
    formState: {errors, isSubmitting},
    reset,
    control,
    handleSubmit,
  } = useForm();

  const showAlert = (message: string) => {
    if (errorMessage) return;
    SetErrorMessage(message);
    setTimeout(() => {
      SetErrorMessage(null);
    }, 3200);
  };

  const handlePress = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });

      if (res[0]?.uri) {
        SetLocalState(prev => ({...prev, imgUrl: res[0]?.uri}));
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled audio selection');
      }
    }
  };

  const options = ['Option 1', 'Option 2', 'Option 3'];
  const handleSelect = (value: string) => {
    SetLocalState(prev => ({...prev, category: value}));
  };

  const handleFormSubmit = (data: FieldValues) => {
    try {
      if (
        !data.title ||
        !data.description ||
        !data.singer ||
        !localState.audioUrl ||
        !localState.imgUrl ||
        !localState.category
      ) {
        showAlert('All fields are required');
      }
    } catch (error: any) {
      console.log(error, 'error in create form submit');
    } finally {
      reset();
      SetLocalState(prev => ({
        ...prev,
        category: '',
        imgUrl: '',
        audioUrl: '',
      }));
    }
  };

  const getAudioUrl = (value: string) => {
    SetLocalState(prev => ({...prev, audioUrl: value}));
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {isSubmitting && <AppLoader />}
      {errorMessage && <Notification message={errorMessage} />}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView className="px-5 mt-[2vh] h-full ">
          <View className='flex flex-row items-center'>
          <TouchableOpacity
          activeOpacity={0.7}
          className=""
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <View
            className="items-center justify-center bg-[#21c856] rounded-full"
            style={{width: 35, height: 36}}>
            <Text className="text-black font-[RadioCanadaBig-Bold]">S</Text>
          </View>
        </TouchableOpacity>
          <Text className="font-[RadioCanadaBig-Bold] text-white ml-2 text-[20px]">
            Create Song
          </Text>
          </View>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps="handled"
            className="mt-[2vh]"
            showsVerticalScrollIndicator={false}>
            {createSongFields.map(item => (
              <Controller
                key={item.name}
                name={item.name}
                control={control}
                render={({field: {value, onBlur, onChange}}) => (
                  <View className='mt-2'>
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
                      labelColor={'#ffffff'}
                      bgColor={tertiaryColor  }
                      isShake={false}
                    />
                  </View>
                )}
              />
            ))}

            <View className="mb-2 mt-2">
              <Text className="text-white font-[RadioCanadaBig-Bold] mb-2">
                Category
              </Text>
              <CustomDropdown options={options} onSelect={handleSelect} />
            </View>

            {localState.imgUrl ? (
              <View className="items-center">
                <ImageBackground
                  className="mt-1"
                  source={{uri: localState.imgUrl}}
                  style={{
                    width: width * 0.65,
                    height: height * 0.3,
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() =>
                      SetLocalState(prev => ({...prev, imgUrl: ''}))
                    }>
                    <View
                      className=" w-[30px] items-center  rounded-md absolute top-1 left-1"
                      style={{backgroundColor: primaryColor}}>
                      <FeatherIcon name="x" color={'white'} size={25} />
                    </View>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            ) : (
              <View>
                <Text className="text-white font-[RadioCanadaBig-Bold] mb-2">
                  Song Thumbnail
                </Text>
                <TouchableOpacity
                  onPress={handlePress}
                  activeOpacity={0.7}
                  className="flex flex-row rounded-lg items-center justify-center"
                  style={{
                    backgroundColor: tertiaryColor,
                    width: width * 0.885,
                    height: height * 0.1,
                  }}>
                  <FeatherIcon name="upload" color={'white'} size={25} />
                  <Text
                    className="ml-2 font-[RadioCanadaBig-Regular]"
                    style={{color: secondaryColor}}>
                    Choose a file
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            <Audio handleAudioUrl={getAudioUrl} />

            <View className="items-center mt-[2vh] mb-[10vh]">
              <SharedButton
                text="Upload"
                onPress={handleSubmit(handleFormSubmit)}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Create;
