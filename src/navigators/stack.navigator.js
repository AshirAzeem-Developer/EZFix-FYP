import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import Splash from '../screens/Auth/Splash';

import Home from '../screens/App/Home';

//bottom tab
import {BottomNavigator} from './bottom.navigator';
import SelectService from '../screens/Auth/SelectService';
import Signin from '../screens/Auth/Signin';
import SignUp from '../screens/Auth/SignUp';
import ForgetPass from '../screens/ForgetPass';
import ResetPass from '../screens/ResetPass';
import Congrats from '../screens/CongratsScreen';
const Stack = createNativeStackNavigator();

export const RootNavigator = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="Congrats"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SelectService" component={SelectService} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Forget" component={ForgetPass} />
      <Stack.Screen name="Reset" component={ResetPass} />
      <Stack.Screen name="Congrats" component={Congrats} />

      {/* BOTTOM TAB */}
      <Stack.Screen name="Home" component={BottomNavigator} />
    </Stack.Navigator>
  );
};
