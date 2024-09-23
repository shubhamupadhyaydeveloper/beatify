import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {displayNotification} from 'src/notification/NotificationInitial';

const Following = () => {
  return (
    <View className="h-full w-full justify-center items-center flex">
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() =>
          displayNotification({
            message: 'ritik prasad code',
            title: 'test message',
            categoryId: 'see-profile',
            image:
              'https://plus.unsplash.com/premium_photo-1682125196952-a37ba95ee650?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
          })
        }>
        <View className="bg-white py-2 px-4 rounded-md">
          <Text className="text-black">click me for notification</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Following;
 