import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  TextInput,
  Modal,
  StyleSheet,
  Pressable,
  Image,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {HomepageNavigationProp} from 'src/types/navigationProps';
import {primaryColor, secondaryColor, tertiaryColor} from 'src/constant/color';
import DocumentPicker from 'react-native-document-picker';
import {
  useCameraPermission,
  useCameraDevice,
  Camera,
} from 'react-native-vision-camera';
import ProfileImage from './PanImage';
import {BlurView} from '@react-native-community/blur';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import PhotoOptions from './PhotoOptions';

const EditProfile = () => {
  const navigation = useNavigation<NavigationProp<HomepageNavigationProp>>();
  const {height: ScreenHeight, width: ScreenWidth} = useWindowDimensions();
  const [change, setChange] = useState<string>('Shubham upadhyay');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [image, setImage] = useState<string>('');
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);
  // const [photoUri, setPhotoUri] = useState<string | null>(null);

  const openImageModal = useCallback(() => {
    setIsImageModalVisible(true);
  }, []);
  const closeImageModal = useCallback(() => {
    setIsImageModalVisible(false);
  }, []);
  const closeModal = useCallback(() => {
    setIsVisible(false);
  }, []);
  const openModal = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleImagePress = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });

      if (res[0]?.uri) {
        setImage(res[0]?.uri);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled audio selection');
      }
    }
  };


  const handleSetImage = (value : string) => {
     setImage(value)
  }


  return (
    <SafeAreaView>
      <View className="flex flex-row justify-between items-center px-3">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <AntDesignIcon name="close" color={'white'} size={25} />
        </TouchableOpacity>
        <Text className="text-white font-[RadioCanadaBig-Bold] text-[20px]">
          Edit Profile
        </Text>
        <TouchableOpacity>
          <Text className="text-graycolor font-[RadioCanadaBig-Regular] text-[18px]">
            Save
          </Text>
        </TouchableOpacity>
      </View>
      <View
        className="relative self-center"
        style={{width: ScreenWidth * 0.3, marginTop: ScreenHeight * 0.05}}>
        {image ? (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              openImageModal();
            }}>
            <View className=" rounded-full items-center justify-center flex">
              <Image
                source={{uri: image}}
                style={{width: 100, height: 100}}
                className="rounded-full"
              />
            </View>
          </TouchableOpacity>
        ) : (
          <View
            style={{width: 100, height: 100}}
            className="bg-primary rounded-full items-center justify-center flex">
            <Text className="text-black font-[RadioCanadaBig-Bold] text-[30px]">
              S
            </Text>
          </View>
        )}

        <View className="absolute right-0 bottom-0">
          <TouchableOpacity activeOpacity={0.8} onPress={openModal}>
            <View className="w-[30px]  h-[30px] rounded-md bg-white items-center justify-center flex">
              <AntDesignIcon name="edit" color={'black'} size={20} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View
        className="mx-3 flex flex-row items-center"
        style={{marginTop: ScreenHeight * 0.05, width: ScreenWidth}}>
        <Text className="text-white font-[RadioCanadaBig-Bold] text-[17px] mr-[10vw]">
          Name
        </Text>
        <TextInput
          cursorColor={'white'}
          value={change}
          onChangeText={setChange}
          className="text-white font-[RadioCanadaBig-Regular] text-[17px]"
          placeholder="Your Name"
          placeholderTextColor={'#bdbdbc'}
        />
      </View>
      <View className="bg-graycolor w-full h-[1px]" />

      <Modal
        animationType="none"
        transparent={true}
        statusBarTranslucent={false}
        visible={isVisible}
        hardwareAccelerated>
        <PhotoOptions onClose={closeModal} setImage={handleSetImage} handleImagePress={handleImagePress} />
      </Modal>

      <Modal
        animationType="none"
        transparent={true}
        statusBarTranslucent={false}
        visible={isImageModalVisible}
        hardwareAccelerated>
        <ProfileImage image={image} onClose={closeImageModal} />
      </Modal>
    </SafeAreaView>
  );
};

export default EditProfile;
