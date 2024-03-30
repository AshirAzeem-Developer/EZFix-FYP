import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens

import splash from '../screens/Auth/Splash';
import UserLoginScreen from '../screens/Auth/UserLoginScreen';
import SignupEmail from '../screens/Auth/SignupEmail';
import OTP from '../screens/Auth/OTP';

const Stack = createNativeStackNavigator();

export const AuthStack = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="SelectService"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="splash" component={splash} />
      <Stack.Screen name="SelectService" component={SelectService} />

      <Stack.Screen name="UserLoginScreen" component={UserLoginScreen} />
      <Stack.Screen name="SignupEmail" component={SignupEmail} />
      <Stack.Screen name="OTP" component={OTP} />
    </Stack.Navigator>
  );
};
