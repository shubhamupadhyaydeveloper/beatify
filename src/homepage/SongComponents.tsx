import {Image, View} from 'react-native';

type SingerImageProps = {
  singerImage: string | string[];
};

export const SingerImageComponent = ({singerImage}: SingerImageProps) => {
  if (typeof singerImage === 'string') {
    return (
      <View className={`relative w-[25px] h-[25px]`}>
        <Image
          source={{uri: singerImage}}
          className={`w-full h-full rounded-full`}
        />
      </View>
    );
  } else if (Array.isArray(singerImage)) {
    return <View></View>;
  }
};

export const SingerImageComponentBottom = ({singerImage}: SingerImageProps) => {
  if (Array.isArray(singerImage)) {
    return (
      <View className='flex gap-3'>
        {singerImage.map(item => (
          <Image source={{uri: item}} className="w-[50px] h-[50px] rounded-full" />
        ))}
      </View>
    );
  } else {
    return (
      <View className={`relative w-[50px] h-[50px]`}>
        <Image
          source={{uri: singerImage}}
          className={`w-full h-full rounded-full`}
        />
      </View>
    );
  }
};
