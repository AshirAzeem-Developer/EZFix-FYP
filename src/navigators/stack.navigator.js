import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import Splash from '../screens/Auth/Splash';

import Home from '../screens/App/Home';

//bottom tab
import {BottomNavigator} from './bottom.navigator';
import SelectService from '../screens/Auth/SelectService';

const Stack = createNativeStackNavigator();

export const RootNavigator = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SelectService" component={SelectService} />

      {/* BOTTOM TAB */}
      <Stack.Screen name="Home" component={BottomNavigator} />
    </Stack.Navigator>
  );
};
