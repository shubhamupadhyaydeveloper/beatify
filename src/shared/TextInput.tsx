import React, {useState} from 'react';
import {KeyboardTypeOptions, Text,Dimensions} from 'react-native';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type props = {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  secureText?: boolean;
  keyboardType: KeyboardTypeOptions;
  errorText? : any
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
  errorText
}: props) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View>
      <Text style={{fontFamily: 'OpenSans-Bold'}} className="text-[15px] mb-2 text-black">
        {label}
      </Text>
      <View className="flex-row items-center bg-[#FAFAFA] rounded-md px-1" style={{height : height * .07}} >
        <TextInput
          className="flex-1 p-2 text-md text-black "
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
        />
  
        {secureText && (
          <TouchableOpacity onPress={togglePasswordVisibility} className=''>
           <Icon size={25} color="#B8B8B8" name={secureTextEntry === true ? "eye" : "eye-off"} />
          </TouchableOpacity>
        )}
      </View>
      <Text className='text-[10px] text-red-500'>{errorText}</Text>
    </View>
  );
};

export default SharedInput;
