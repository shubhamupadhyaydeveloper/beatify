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
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Controller, useForm, FieldValues} from 'react-hook-form';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {Platform} from 'react-native';
import {primaryColor, secondaryColor, tertiaryColor} from '../constant/color';
import {chain, debounce} from 'lodash';
import CustomTouchableOpacity from '@shared/TouchableOpacity';
import {recentlyData, recentType} from 'src/constant/mockdata';
import {FlatList} from 'react-native-gesture-handler';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const Search = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchResults, setSearchResults] = useState<recentType[]>([]);
  const [cache, setCache] = useState<recentType[]>([]);

  const {width: ScreenWidth, height: ScreenHeight} = useWindowDimensions();
  const navigation = useNavigation();

  const getSearchResuts = useCallback(
    debounce((value: string) => {
      const regex = new RegExp(value, 'i');
      const filteredValues = recentlyData.filter(item => regex.test(item.name));
      setSearchResults(filteredValues);
    }, 500),
    [],
  );

  useEffect(() => {
    if (searchInput) {
      getSearchResuts(searchInput);
    } else {
      setSearchResults([]);
    }
  }, [searchInput]);

  return (
    <>
      <SafeAreaView className="px-3 ">
        <View
          className="items-center flex flex-row absolute px-3 top-0"
          style={{backgroundColor: tertiaryColor, width: ScreenWidth}}>
          <TouchableOpacity
            className="flex mr-2"
            activeOpacity={0.5}
            onPress={() => navigation.goBack()}>
            <AntDesignIcons name="arrowleft" color={'white'} size={27} />
          </TouchableOpacity>
          <TextInput
            value={searchInput}
            onChangeText={setSearchInput}
            placeholder="What do you want to listen to?"
            selectionColor={primaryColor}
            placeholderTextColor={secondaryColor}
            style={{
              fontFamily: 'RadioCanadaBig-Regular',
              fontSize: 16,
              width: ScreenWidth * 0.8,
            }}
          />
        </View>

        <View style={{width : ScreenWidth}}>
          {cache?.length > 0 && searchResults.length === 0 && (
            <View className="items-center justify-center">
              <CustomTouchableOpacity>
                <View
                  className="items-center justify-center border-[1px] rounded-full py-1 px-2"
                  style={{
                    borderColor: secondaryColor,
                    width: ScreenWidth * 0.5,
                  }}>
                  <Text className="text-white font-[RadioCanadaBig-Bold] text-[12px] ">
                    Clear recent searches
                  </Text>
                </View>
              </CustomTouchableOpacity>
            </View>
          )}

          {cache?.length === 0 && searchResults.length === 0 && (
            <View
              style={{width: ScreenWidth, height: ScreenHeight}}
              className="items-center justify-center flex">
              <Text className="text-white font-[RadioCanadaBig-Bold] text-[18px]">
                Play what you love
              </Text>
              <Text className="text-[#A9A9A9]">Search for songs</Text>
            </View>
          )}

          {searchResults.length > 0 && (
            <View className="mt-[20vh]">
              <FlatList
                data={searchResults}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <CustomTouchableOpacity>
                    <View style={{width: ScreenWidth * 0.9}} className="flex flex-row justify-between">
                      <View className='flex flex-row'>

                      <Image
                        source={{uri: item.image}}
                        className="w-[30px] h-[30px]"
                      />
                      <Text className="text-white font-[RadioCanadaBig-Bold] text-[15px]">
                        {item.name}
                      </Text>
                      </View>
                      <CustomTouchableOpacity>
                        <EntypoIcon
                          name="dots-three-vertical"
                          color={secondaryColor}
                          size={25}
                        />
                      </CustomTouchableOpacity>
                    </View>
                  </CustomTouchableOpacity>
                )}
                scrollEventThrottle={16}
                ItemSeparatorComponent={() => <View className="h-[10px]" />}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Search;
