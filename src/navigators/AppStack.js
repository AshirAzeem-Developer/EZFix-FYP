import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens

import bottomNavigator from './bottom.navigator';
import Home from '../screens/App/Home';
const Stack = createNativeStackNavigator();

const AppStack = ({}) => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={bottomNavigator} />
      </Stack.Navigator>
    </>
  );
};

export default AppStack;
