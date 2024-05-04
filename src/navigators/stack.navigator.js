import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import Splash from '../screens/Auth/Splash';
import SelectService from '../screens/Auth/SelectService';
import Signin from '../screens/Auth/Signin';
import SignUp from '../screens/Auth/SignUp';

import ResetPassword from '../screens/Auth/ResetPassword';
import Congrats from '../screens/Auth/CongratsScreen';
import ForgetPassword from '../screens/Auth/ForgetPassword';
import OTP from '../screens/Auth/OTP';

//bottom tab

import DrawerNavigation from './DrawerNavigation';
import Main from '../screens/Seekers/Main';

const Stack = createNativeStackNavigator();

export const RootNavigator = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SelectService" component={SelectService} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Congrats" component={Congrats} />
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
      <Stack.Screen name="Main" component={Main} />




      {/* BOTTOM TAB */}
    </Stack.Navigator>
  );
};
