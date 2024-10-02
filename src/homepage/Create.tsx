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
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import DocumentPicker from 'react-native-document-picker';
import {useForm, Controller, FieldValues} from 'react-hook-form';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Audio from './Audio';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import AppLoader from '../shared/AppLoader';
import Notification from 'src/notification/Notification';
import {createSongFields} from '../constant/createsong';
import SharedInput from '../shared/TextInput';
import {primaryColor, secondaryColor, tertiaryColor} from '../constant/color';
import SharedButton from '../shared/Button';
import showNotification from 'src/notification/Notification';
import {notificationState} from 'src/store/notificationState';
import Animated, {
  FadeInDown,
  FadeInUp,
  FadeOutUp,
  interpolateColor,
  Layout,
  LinearTransition,
  SequencedTransition,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {categoryData} from 'src/constant/mockdata';

const Create = () => {
  const navigation = useNavigation();
  const [optionVisible, setOptionVisible] = useState(false);
  const {showNofitication} = notificationState();
  const dropDownHeight = useSharedValue(0);
  const [localState, SetLocalState] = useState({
    imgUrl: '',
    audioUrl: '',
    category: '',
  });
  const {width, height} = useWindowDimensions();
  const {
    formState: {errors, isSubmitting},
    reset,
    control,
    handleSubmit,
  } = useForm();

  const handlePress = useCallback(async () => {
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
  },[])

  const dropDownStyle = useAnimatedStyle(() => {
    return {
      height: dropDownHeight.value,
    };
  });

  const arrowBackground = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        dropDownHeight.value,
        [0, height * 0.35],
        ['white', '#CF0A0A'],
      ),
    };
  });

  const handleCategory = (category: string) => {
    SetLocalState(prev => ({...prev, category}));
    closeDropDown();
  };

  const handleFormSubmit = useMemo(
    () => (data: FieldValues) => {
      try {
        if (
          !data.title ||
          !data.description ||
          !data.singer ||
          !localState.audioUrl ||
          !localState.imgUrl ||
          !localState.category
        ) {
          showNofitication('All fields are required');
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
    },
    [],
  );

  const getAudioUrl = (value: string) => {
    SetLocalState(prev => ({...prev, audioUrl: value}));
  };

  const closeDropDown = () => {
    dropDownHeight.value = withTiming(0, {duration: 150});
    setTimeout(() => {
      setOptionVisible(false);
    }, 10);
  };

  const handleToggle = useCallback(() => {
    if (optionVisible) {
      closeDropDown();
    } else {
      dropDownHeight.value = withSpring(height * 0.35, {
        damping: 30,
        stiffness: 150,
      });
      setOptionVisible(true);
    }
  },[])

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView className="px-5 mt-[2vh] h-full ">
          <View className="flex flex-row items-center">
            <TouchableOpacity
              activeOpacity={0.7}
              className=""
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
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
            scrollEventThrottle={16}
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
                  <View className="mt-2">
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
                      bgColor={tertiaryColor}
                      isShake={false}
                      textColor="white"
                    />
                  </View>
                )}
              />
            ))}

            <View className="mb-2 mt-2">
              <Text className="text-white font-[RadioCanadaBig-Bold] mb-2">
                Category
              </Text>

              <TouchableWithoutFeedback onPress={handleToggle}>
                <Animated.View
                  style={{
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    borderBottomLeftRadius: optionVisible ? 0 : 5,
                    borderBottomRightRadius: optionVisible ? 0 : 5,
                  }}
                  className="w-full bg-tertiary flex flex-row justify-between items-center py-2 px-3 ">
                  <Text className="text-white font-[RadioCanadaBig-Bold] mb-2">
                    {localState.category ? localState.category : 'Select'}
                  </Text>
                  <Animated.View
                    style={[arrowBackground]}
                    className="w-[30px] flex items-center justify-center h-[30px] rounded-full">
                    <FeatherIcon
                      name={optionVisible ? 'chevron-down' : 'chevron-up'}
                      color={optionVisible ? 'white' : 'black'}
                      size={25}
                    />
                  </Animated.View>
                </Animated.View>
              </TouchableWithoutFeedback>

              {optionVisible && (
                <Animated.View
                  className="flex gap"
                  style={[dropDownStyle, {overflow: 'hidden'}]}>
                  <View
                    className="bg-tertiary px-3 gap-y-2 pb-3 "
                    collapsable={false}>
                    {categoryData.map((item, index) => (
                      <TouchableOpacity
                        activeOpacity={0.85}
                        key={item}
                        onPress={() => handleCategory(item)}>
                        <Text className="text-white font-[RadioCanadaBig-Regular] text-[15px]">
                          {item}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </Animated.View>
              )}
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
                  className="flex flex-row rounded-lg items-center justify-center bg-tertiary"
                  style={{
                    width: width * 0.885,
                    height: height * 0.15,
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
