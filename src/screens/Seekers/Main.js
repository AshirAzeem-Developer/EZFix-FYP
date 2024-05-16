import { View, Text } from 'react-native'
import React from 'react'
import DrawerNavigation from '../../navigators/DrawerNavigation'

const Main = () => {
  return (
    <View style={{flex:1}}>
     <DrawerNavigation/>
    </View>
  )
}

export default Main