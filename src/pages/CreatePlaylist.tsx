import {
  View,
  Text,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  StyleSheet,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StatusBar} from 'react-native';
import {primaryColor, secondaryColor, tertiaryColor} from 'src/constant/color';
import SharedButton from '@shared/Button';
import CustomTouchableOpacity from '@shared/TouchableOpacity';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {LibraryNavigationTypes} from 'src/types/navigationProps';
import {TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const CreatePlaylist = () => {
  const {width, height} = useWindowDimensions();
  const [text, setText] = React.useState('My playlist #1');
  const libraryNavigation =
    useNavigation<NavigationProp<LibraryNavigationTypes>>();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : -100}
      className="flex-1 ">
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <LinearGradient
          colors={['#7D7C7C', 'black']}
          style={{width, height}}
          className="">
          <StatusBar barStyle={'default'} backgroundColor={'rgba(0,0,0,0.1)'} />
          <View style={{marginTop: height * 0.3}}>
            <View style={{width: width * 0.7}} className="self-center">
              <Text className="text-white font-[RadioCanadaBig-Bold] text-[25px] text-center">
                Give your playlist a name
              </Text>
            </View>

            <View className=" relative mt-[5vh] ">
              <TextInput
                autoComplete="name"
                cursorColor={'gray'}
                keyboardAppearance="dark"
                className="self-center text-[30px] font-[RadioCanadaBig-Bold] text-white -mb-2"
                value={text}
                onChangeText={setText}
                selectionColor={primaryColor}
                underlineColorAndroid="transparent"
              />
              <View
                className=" h-[1px] self-center"
                style={{width: width * 0.8, backgroundColor: 'gray'}}
              />
            </View>

            <View
              className="flex flex-row items-center justify-center  mt-[8vh]"
              style={{width}}>
              <CustomTouchableOpacity
                onPress={() => libraryNavigation.navigate('Index')}>
                <View
                  className="bg-transparent border border-gray-400 items-center mr-5 justify-center py-3 rounded-full"
                  style={{width: width * 0.3}}>
                  <Text className="text-white font-[RadioCanadaBig-Bold] text-[15px]">
                    Cancel
                  </Text>
                </View>
              </CustomTouchableOpacity>
              <CustomTouchableOpacity
               onPress={() => libraryNavigation.navigate('PlaylistPage')}
              >
                <View
                  className={`bg-[${primaryColor}]  items-center justify-center py-[13px] rounded-full`}
                  style={{width: width * 0.3}}>
                  <Text className="text-black font-[RadioCanadaBig-Bold] text-[15px]">
                    Create
                  </Text>
                </View>
              </CustomTouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreatePlaylist;
