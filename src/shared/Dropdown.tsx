import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {setNavColor} from 'src/hooks/NavColor';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {categoryData} from 'src/constant/mockdata';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {secondaryColor, tertiaryColor} from 'src/constant/color';

const CustomDropdown = ({
  options,
  onSelect,
}: {
  options: string[];
  onSelect: (value: string) => void;
}) => {
  const {width, height} = useWindowDimensions();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  if (isVisible) {
    SystemNavigationBar.setNavigationColor('#000000');
  }

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsVisible(true)}>
        <Text className="" style={{color : secondaryColor}}>
          {selectedOption || 'Select an option'}
        </Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}>
        <View className="h-full items-center justify-center bg-black/70">
          <TouchableOpacity
            onPress={() => setIsVisible(false)}
            activeOpacity={0.7}
            className="border-[3px] rounded-md border-green-600 mb-[1vh] relative"
            style={{left: width * 0.25}}>
            <FeatherIcon name="x" size={25} color={'white'} />
          </TouchableOpacity>
          <View className="w-[60vw] h-[30vh] bg-white rounded-xl">
            <ScrollView showsVerticalScrollIndicator={false}>
              {categoryData.map(option => (
                <TouchableOpacity
                  key={option}
                  style={styles.option}
                  onPress={() => handleSelect(option)}>
                  <Text className="text-black font-[RadioCanadaBig-Regular] text-[17px] -mb-2">
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    padding: 10,
    backgroundColor: tertiaryColor,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: secondaryColor,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    width: 300,
  },
  option: {
    padding: 10,
  },
});

export default CustomDropdown;
