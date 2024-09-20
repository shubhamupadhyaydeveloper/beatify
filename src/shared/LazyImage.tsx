import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import FastImage from 'react-native-fast-image';

const LazyImage = ({
  image,
  width,
  height,
  style,
}: {
  image: string;
  width: number;
  height: number;
  style?: string;
}) => {
  const [loading, setLoading] = useState(true);
  return (
    <FastImage
      source={{uri: image}}
      style={{width, height}}
      className={style}
      onLoadStart={() => setLoading(true)}
      onLoadEnd={() => setLoading(false)}
      >
      {loading && (
        <View className="self-center justify-center h-full">
          <LottieView
            source={require('../../assets/gifs/loading.json')}
            style={{width: 200, height: 100}}
            loop
            autoPlay
          />
        </View>
      )}
    </FastImage>
  );
};

export default LazyImage;
