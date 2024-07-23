import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import Splash from '../screens/Auth/Splash';
import OnBoarding from '../screens/Auth/Swipe';
import SignIn from '../screens/Auth/SignIn';
import ForgotPassword from '../screens/Auth/ForgetPassword';
import OTPVerification from '../screens/Auth/OTPVerification';
import ChangePassword from '../screens/Auth/ChangePassword';
import SignUpMobileNo from '../screens/Auth/SignUpMobileNo';
import SingUpPersonalInfo from '../screens/Auth/SingUpPersonalInfo';

//bottom tab

import SignUpCheckPhone from '../screens/Auth/SignUpCheckPhone';
import CreateNewPassword from '../screens/Auth/CreateNewPassword';
import SignUpRoleSelect from '../screens/Auth/SignUpRoleSelect';

const Stack = createNativeStackNavigator();

export const AuthStack = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="SignUpCheckPhone" component={SignUpCheckPhone} />
      <Stack.Screen name="SingUpPersonalInfo" component={SingUpPersonalInfo} />
      <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
      <Stack.Screen name="SignUpRoleSelect" component={SignUpRoleSelect} />

      {/* BOTTOM TAB */}
      {/* <Stack.Screen name="BottomNavigator" component={BottomNavigator} /> */}
    </Stack.Navigator>
  );
};
