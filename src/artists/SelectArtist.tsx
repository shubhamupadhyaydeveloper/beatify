import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
  Vibration,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomTouchableOpacity from '@shared/TouchableOpacity';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
  useAnimatedScrollHandler,
  Extrapolation,
  interpolateColor,
} from 'react-native-reanimated';
import {artistsData} from 'src/constant/mockdata';
import IonIcons from 'react-native-vector-icons/Ionicons';

const SelectArtist = () => {
  const {width, height} = useWindowDimensions();
  const positionButton = useSharedValue(0);
  const scrollY = useSharedValue(0);
  const [selectedArtist, setSelectedArtist] = React.useState<string[]>([]);

  const handleToggleSelect = (name:string) => {
    Vibration.vibrate(100)
    setSelectedArtist(prevSelected => 
      prevSelected.includes(name)
        ? prevSelected.filter(itemname => itemname !== name)
        : [...prevSelected, name]
    );
  }

  const handleScroll = useAnimatedScrollHandler(e => {
    scrollY.value = e.contentOffset.y;
  });

  const buttonAnimation = () => {
    positionButton.value = withTiming(65, {duration: 400});
  };

  useEffect(() => {
    buttonAnimation();
  }, []);

  const ButtonStyle = useAnimatedStyle(() => {
    return {
      bottom: positionButton.value,
    };
  });

  const HeaderStyle = useAnimatedStyle(() => {
    const scrollOpacity = interpolate(
      scrollY.value,
      [10, 30],
      [1, 0],
      Extrapolation.CLAMP,
    );

    return {
      opacity: scrollOpacity,
    };
  });

  const HeaderText = useAnimatedStyle(() => {
    const scrollOpacity = interpolate(scrollY.value, [20, 60], [0, 1]);
    return {
      opacity: scrollOpacity,
    };
  });

  const BoxStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollY.value,
            [0, 60],
            [0, -35],
            Extrapolation.CLAMP,
          ),
        },
      ],
      marginBottom: interpolate(
        scrollY.value,
        [0, 60],
        [5, -20],
        Extrapolation.CLAMP,
      ),
    };
  });

  const AnimationContainerStyle = useAnimatedStyle(() => {
    return {};
  });

  return (
    <SafeAreaView>
      <View style={{height, width}}>
        <View
          style={{width}}
          className="absolute z-10 top-[2vh] self-center items-center justify-center">
          <Animated.View
            style={[HeaderText]}
            className="items-center w-full py-2">
            <Text className="text-white font-[RadioCanadaBig-Bold] text-[15px]">
              Choose more artists you like.
            </Text>
          </Animated.View>
        </View>

        <Animated.View style={[AnimationContainerStyle]}>
          <View style={{width}} className="">
            <Animated.View style={[HeaderStyle]} className="items-center">
              <Text className="text-white font-[RadioCanadaBig-Bold] text-[31px] leading-tight">
                Choose more artists you like.
              </Text>
            </Animated.View>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            className="mt-3 ">
            <Animated.View
              className=" items-center"
              style={[{width}, BoxStyle]}>
              <View
                className="bg-white py-2 px-2 rounded-md items-center flex flex-row"
                style={{width: width * 0.91}}>
                <IonIcons color={'black'} name="search" size={20} />
                <Text className="text-black font-[RadioCanadaBig-Bold] ml-2 ">
                  Search
                </Text>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>

        <Animated.FlatList
          onScroll={handleScroll}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="h-[25px]" />}
          numColumns={2}
          ListHeaderComponent={() => <View className="h-[15px]" />}
          data={artistsData}
          renderItem={({item}) => (
            <View
              style={{width: width * 0.5}}
              className="items-center relative">
              {selectedArtist.includes(item.name) && (
                <View
                  className="w-[30px] h-[30px] absolute z-[10] bg-white rounded-full items-center justify-center"
                  style={{right: width * 0.1}}>
                  <IonIcons name="checkmark-sharp" color={'black'} size={20} />
                </View>
              )}
              <CustomTouchableOpacity
                onPress={() => handleToggleSelect(item.name)}>
                <Image
                  style={{width: width * 0.4, height: height * 0.2}}
                  source={{uri: item.img}}
                  className="rounded-full"
                />
                <Text className="font-[RadioCanadaBig-Bold] text-white text-center mt-2">
                  {item.name}
                </Text>
              </CustomTouchableOpacity>
            </View>
          )}
        />

        <Animated.View
          className="absolute items-center self-center"
          style={[ButtonStyle]}>
          <CustomTouchableOpacity>
            <View className="w-[100px] bg-white h-[50px] items-center justify-center rounded-full">
              <Text className="text-black font-[RadioCanadaBig-Bold]">
                Done
              </Text>
            </View>
          </CustomTouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SelectArtist;
