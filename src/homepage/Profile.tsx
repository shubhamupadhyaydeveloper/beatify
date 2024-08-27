import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Video from 'react-native-video';

const Profile = () => {
  return (
    <SafeAreaView>
      <Text className="text-black font-[RadioCanadaBig-Bold]">Profile</Text>
      <Video
        source={{uri: 'https://youtu.be/BHfBNRst2cg'}} // Can be a URL or local file
        style={{width: '100%', height: 300}}
        controls={true} // Optional playback controls
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

export default Profile;
