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
import Animated, {
  CurvedTransition,
  FadeInUp,
  FadeOutUp,
  FadingTransition,
  JumpingTransition,
  LinearTransition,
  ZoomIn,
  ZoomOut,
} from 'react-native-reanimated';
import LottieView from 'lottie-react-native';

const Search = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchResults, setSearchResults] = useState<recentType[]>([]);
  const [cache, setCache] = useState<recentType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {width: ScreenWidth, height: ScreenHeight} = useWindowDimensions();
  const navigation = useNavigation();

  const getSearchResuts = useCallback(
    debounce((value: string) => {
      setIsLoading(true);
      const regex = new RegExp(value, 'i');
      const filteredValues = recentlyData.filter(
        item => regex.test(item.name) || regex.test(item.singer),
      );
      setSearchResults(filteredValues);
      setIsLoading(false);
    }, 100),
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
      <SafeAreaView className="">
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

        <View style={{width: ScreenWidth}}>
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

          {isLoading ? (
            <View className='h-full w-full items-center justify-center'>
              <LottieView
                style={{width: ScreenWidth * 0.9, height: ScreenHeight * 0.35}}
                source={require('../../assets/gifs/loading.json')}
                autoPlay
                loop
              />
            </View>
          ) : (
            searchResults.length === 0 && (
              <View className="h-full w-full items-center justify-center">
                <Text className="text-white font-[RadioCanadaBig-Bold] text-[18px]">
                  {searchInput.length > 0 && searchResults.length === 0
                    ? `No result ${searchInput}`
                    : 'Play what you love'}
                </Text>
              </View>
            )
          )}

          {searchResults.length > 0 && (
            <View className="mt-[10vh]" style={{width: ScreenWidth}}>
              <Animated.FlatList
                itemLayoutAnimation={JumpingTransition}
                data={searchResults}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <CustomTouchableOpacity>
                    <Animated.View
                      entering={FadeInUp.delay(50 * index)}
                      exiting={FadeOutUp.delay(50 * index)}
                      layout={JumpingTransition}
                      style={{width: ScreenWidth * 0.95}}
                      className="flex flex-row justify-between items-center self-center w-full">
                      <View className="flex flex-row items-center">
                        <Image
                          source={{uri: item.image}}
                          className="w-[60px] h-[60px]"
                        />
                        <View className="ml-3">
                          <Text className="text-white font-[RadioCanadaBig-Regular] text-[15px]">
                            {item.name}
                          </Text>
                          <Text className="text-graycolor font-[RadioCanadaBig-Regular] text-[13px] mt-1">
                            {item.singer.slice(0, 30)}...
                          </Text>
                        </View>
                      </View>
                      <CustomTouchableOpacity
                        onPress={() => console.log('option click')}>
                        <EntypoIcon
                          name="dots-three-vertical"
                          color={'#bdbdbc'}
                          size={20}
                        />
                      </CustomTouchableOpacity>
                    </Animated.View>
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
