import {
  View,
  Text,
  FlatList,
  Image,
  useWindowDimensions,
  ImageBackground,
  Dimensions,
  ViewToken,
} from 'react-native';
import React, {useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RouteProp, useRoute} from '@react-navigation/native';
import {
  CreateNavigationTypes,
  ExploreNavigationProp,
} from 'src/types/navigationProps';
import {reelsImages, reelsVideo} from 'src/constant/mockdata';
import {} from 'lodash';
import Video from 'react-native-video';

const {width, height:ScreenHeight} = Dimensions.get('window');

const Reels = () => {
  const route = useRoute<RouteProp<ExploreNavigationProp, 'Reels'>>();
  const {index} = route.params;
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const RenderReels = useCallback(
    ({item, index}: {item: any; index: number}) => {

      return (
        <Video
          // paused={currentIndex == index ? false : true}
          style={{width, height : ScreenHeight}}
          controls
          source={{uri : item}}
          resizeMode="cover"
          onBuffer={() => console.log('Buffering...')}  
          onError={error => console.log('Video Error:', error)}
        />
      );
    },
    [currentIndex],
  );

  const onViewableItemsChanged = useCallback(({viewableItems}:{viewableItems : ViewToken<any>[]}) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index as number);
    }
  }, []);
  

  return (
    <SafeAreaView style={{flex : 1}}>
      <FlatList
        data={[
         'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/2.mp4',
         'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/3.mp4',
         'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/4.mp4',
         'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/5.mp4',
         'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/1.mp4',
        ]}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({item, index}) => (
          <RenderReels item={item} index={index} />
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        pagingEnabled
        disableIntervalMomentum={true}
        initialNumToRender={3}
        onEndReachedThreshold={0.1}
        decelerationRate={'normal'}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        windowSize={2}
        
        // bounces={false}
      />
    </SafeAreaView>
  );
};

export default Reels;
