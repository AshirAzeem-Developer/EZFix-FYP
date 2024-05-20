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

import {BottomNavigator} from './bottom.navigator';
import Categories from '../screens/App/Categories';

const Stack = createNativeStackNavigator();

export const RootNavigator = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="BottomNavigator"
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
      <Stack.Screen name="Categories" component={Categories} />

      {/* BOTTOM TAB */}
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
    </Stack.Navigator>
  );
};
