import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Controller, useForm, FieldValues} from 'react-hook-form';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {Platform} from 'react-native';
import Notification from '@shared/Notification';
import { primaryColor, secondaryColor, tertiaryColor } from '../constant/color';

const Search = () => {
  const [notification, SetNotification] = useState<string | null>('');
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  const {control} = useForm();
  const showAlert = (message: string) => {
    if (notification) return;
    SetNotification(message);
    setTimeout(() => {
      SetNotification(null);
    }, 3300);
  };

  return (
    <>
      {notification && <Notification message={notification} />}
          <SafeAreaView className="px-3 ">
            <View
              className="items-center flex flex-row absolute px-3 top-0"
              style={{backgroundColor: tertiaryColor, width}}>
              <TouchableOpacity
                className="flex mr-2"
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}>
                <AntDesignIcons name="arrowleft" color={'white'} size={27} />
              </TouchableOpacity>
              <Controller
                name="search"
                key="search"
                control={control}
                render={({field: {value, onBlur, onChange}}) => (
                  <TextInput
                    
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    placeholder="What do you want to listen to?"
                    selectionColor={primaryColor}
                    placeholderTextColor={secondaryColor}
                    style={{
                       fontFamily : "RadioCanadaBig-Regular",
                       fontSize : 16,
                       width : width * .7
                    }}
                  />
                )}
              />
            </View>
          </SafeAreaView>
    </>
  );
};

export default Search;
