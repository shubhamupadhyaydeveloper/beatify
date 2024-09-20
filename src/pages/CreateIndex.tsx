import { View, Text } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native'
import { CreateNavigationTypes, LibraryNavigationTypes } from 'src/types/navigationProps'
import Library from 'src/homepage/Library'
import LikedSong from 'src/homepage/LikedSong'
import Create from 'src/homepage/Create'
import Test from './Test'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const CreateIndex = () => {
  const Stack = createNativeStackNavigator<CreateNavigationTypes>()
  return (
    <Stack.Navigator initialRouteName='CreateIndex'>
        <Stack.Screen
          name='CreateIndex'
          component={Create}
          options={{headerShown : false}}
        />
    </Stack.Navigator>
  )
}

export default CreateIndex;