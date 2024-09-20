import { View, Text } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native'
import { LibraryNavigationTypes } from 'src/types/navigationProps'
import Library from 'src/homepage/Library'
import LikedSong from 'src/homepage/LikedSong'
import SelectArtist from 'src/artists/SelectArtist'
import PlaylistPage from './PlaylistPage'
import CreatePlaylist from './CreatePlaylist'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddSongs from 'src/homepage/AddSongs'
import EditPlaylist from 'src/homepage/EditPlaylist'

const LibraryIndex = () => {
  const Stack = createNativeStackNavigator<LibraryNavigationTypes>()
  return (
    <Stack.Navigator initialRouteName='Index' screenOptions={{animation : "slide_from_right"}}>
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
        <Stack.Screen
         name='CreatePlaylist'
         component={CreatePlaylist}
         options={{headerShown : false}}
        />
        <Stack.Screen
         name='PlaylistPage'
         component={PlaylistPage}
         options={{headerShown : false}}
        />
        <Stack.Screen
         name='AddSongs'
         component={AddSongs}
         options={{headerShown : false}}
        />
        <Stack.Screen
         name='EditPlaylist'
         component={EditPlaylist}
         options={{headerShown : false}}
        />
    </Stack.Navigator>
  )
}

export default LibraryIndex;