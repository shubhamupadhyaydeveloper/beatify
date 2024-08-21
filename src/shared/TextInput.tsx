import React, {useState} from 'react';
import {KeyboardTypeOptions, Text,Dimensions} from 'react-native';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';


type props = {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  secureText?: boolean;
  keyboardType: KeyboardTypeOptions;
  errorText? : any;
  inputWidth?: number;
  multiline?: boolean;
  labelColor?: string
};

const {height} = Dimensions.get('window')

const SharedInput = ({
  label,
  placeholder,
  value,
  onBlur,
  onChange,
  secureText,
  keyboardType,
  errorText,
  inputWidth,
  multiline,
  labelColor
}: props) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const transformValue = useSharedValue(0);

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const sakeUi = () => {
    transformValue.value = withSequence(
      withTiming(-3, {duration : 10}),
      withSpring(0,{
        damping : 1,
        mass : .3,
        stiffness : 600,
        restDisplacementThreshold : .01
      })
    )
 };

 const inputStyle = useAnimatedStyle(() => {
   return {
     transform: [{translateX: transformValue.value}],
   };
 });

 if(errorText) {
  sakeUi(  )
 }


  return (
    <Animated.View style={inputStyle}>
    <View style={{width : inputWidth}}>
      <Text style={{fontFamily: 'RadioCanadaBig-Bold', color : labelColor ?? "#000000"}} className="text-[15px] mb-2 ">
        {label}
      </Text>
      <View className="flex-row items-center bg-[#FAFAFA] rounded-md px-1"  >
        <TextInput
          className="flex-1 px-2 text-md text-black  w-[90vw]"
          style={{fontFamily: 'OpenSans-Bold'}}
          placeholder={placeholder}
          placeholderTextColor="gray"
          secureTextEntry={secureTextEntry}
          onChangeText={onChange}
          value={value}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={keyboardType}
          onBlur={onBlur}
          numberOfLines={multiline ? 3 : 1}
        />
  
        {secureText && (
          <TouchableOpacity onPress={togglePasswordVisibility} className=''>
           <Icon size={25} color="#B8B8B8" name={secureTextEntry === true ? "eye" : "eye-off"} />
          </TouchableOpacity>
        )}
      </View>
      <Text className='text-[10px] text-red-500'>{errorText}</Text>
    </View>
    </Animated.View>
  );
};

export default SharedInput;
