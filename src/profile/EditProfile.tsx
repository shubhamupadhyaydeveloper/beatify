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
import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {HomepageNavigationProp} from 'src/types/navigationProps';
import {primaryColor, secondaryColor, tertiaryColor} from 'src/constant/color';
import PhotoOption from './PhotoOption';
import DocumentPicker from 'react-native-document-picker';
import {
  useCameraPermission,
  useCameraDevice,
  Camera,
} from 'react-native-vision-camera';

const EditProfile = () => {
  const navigation = useNavigation<NavigationProp<HomepageNavigationProp>>();
  const {height: ScreenHeight, width: ScreenWidth} = useWindowDimensions();
  const [change, setChange] = useState<string>('Shubham upadhyay');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [image, setImage] = useState<string>('');
//   const {hasPermission} = useCameraPermission();
//   const [showCamera, setShowCamera] = useState(false);
//   const device = useCameraDevice('back');
//   const camera = useRef<Camera>(null);

  const onModalClose = () => {
    setIsVisible(false);
  };

  const openModal = () => {
    setIsVisible(true);
  };

  const handleImagePress = async () => {
    try {
      setIsVisible(false);
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
          <View className=" rounded-full items-center justify-center flex">
            <Image
              source={{uri: image}}
              style={{width: 100, height: 100}}
              className="rounded-full"
            />
          </View>
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
        <View
          style={{
            width: ScreenWidth,
            height: ScreenHeight,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View style={styles.modalContent}>
            <View className="bg-black w-full h-[5vh] flex flex-row justify-between px-2 items-center">
              <Text className="text-white  font-[RadioCanadaBig-Bold]"></Text>
              <TouchableOpacity activeOpacity={0.8} onPress={onModalClose}>
                <View className="border border-white rounded-md">
                  <AntDesignIcon name="close" color={primaryColor} size={25} />
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{width: 'auto', marginTop: ScreenHeight * 0.03}}
              className="self-center items-center">
              <PhotoOption
                icon="select1"
                label="Choose Photo"
                onPress={handleImagePress}
              />
              <PhotoOption icon="camerao" label="Take Photo" />
              <PhotoOption
                icon="close"
                label="Remove Current Photo"
                onPress={() => {
                  setIsVisible(false);
                  setImage('');
                }}
              />
            </View>
          </View>
        </View>
      </Modal>

 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    height: '40%',
    width: '100%',
    backgroundColor: tertiaryColor,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});

export default EditProfile;
