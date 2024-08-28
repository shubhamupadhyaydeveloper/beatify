import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationProp } from '@react-navigation/native'
import { LibraryNavigationTypes } from 'src/types/navigationProps'
import Library from 'src/homepage/Library'
import LikedSong from 'src/homepage/LikedSong'
import SelectArtist from 'src/artists/SelectArtist'

const LibraryIndex = () => {
  const Stack = createStackNavigator<LibraryNavigationTypes>()
  return (
    <Stack.Navigator initialRouteName='Index'>
        <Stack.Screen
          name='Index'
          component={Library}
          options={{headerShown : false}}
        />
        <Stack.Screen
          name='LikedSong'
          component={LikedSong}
           options={{headerShown : false}}
        />
        <Stack.Screen
          name='SelectArtist'
          component={SelectArtist}
          options={{headerShown : false}}
        />
    </Stack.Navigator>
  )
}

export default LibraryIndex;