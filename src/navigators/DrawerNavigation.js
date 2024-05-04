
import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Bottom from '../screens/Seekers/Bottom'
const Drawer= createDrawerNavigator()
const DrawerNavigation = () => {
  return (
  <>
  <Drawer.Navigator>
    <Drawer.Screen  name='Bottom' component={Bottom}/>
  </Drawer.Navigator>
  </>
  )
}

export default DrawerNavigation