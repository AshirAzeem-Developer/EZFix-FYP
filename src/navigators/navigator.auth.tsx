import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import Splash from '../screens/Auth/Splash';
import OnBoarding from '../screens/Auth/Swipe';
import SignIn from '../screens/Auth/SignIn';

import OTPVerification from '../screens/Auth/OTPVerification';
import ChangePassword from '../screens/Auth/ChangePassword';

import SingUpPersonalInfo from '../screens/Auth/SingUpPersonalInfo';

//bottom tab

import SignUpCheckPhone from '../screens/Auth/SignUpCheckPhone';
import CreateNewPassword from '../screens/Auth/CreateNewPassword';
import SignUpRoleSelect from '../screens/Auth/SignUpRoleSelect';
import SignUpCheckPhoto from '../screens/Auth/SignUpCheckPhoto';
import ForgetPassword from '../screens/Auth/ForgetPassword';
import SignUpSeekerProviderNICOrVerifyMember from '../screens/Auth/SignUpRefereeLicOrVerifyMember';
import SignUpPrivacyPolicy from '../screens/Auth/SignUpPrivacyPolicy';
import {AuthStackParamList} from './authStack';
import OrderSummary from '../screens/App/OrderSummary';
import ProfileDetail from '../screens/App/ProfileDetail';
import Approved from '../screens/App/Bookings/Approved';
import Pending from '../screens/App/Bookings/Pending';
import Cancel from '../screens/App/Bookings/Cancel';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Approved"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="SignUpCheckPhone" component={SignUpCheckPhone} />
      <Stack.Screen name="SingUpPersonalInfo" component={SingUpPersonalInfo} />
      <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
      <Stack.Screen name="SignUpRoleSelect" component={SignUpRoleSelect} />
      <Stack.Screen name="SignUpCheckPhoto" component={SignUpCheckPhoto} />
      <Stack.Screen name="OrderSummary" component={OrderSummary} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
      <Stack.Screen name="Approved" component={Approved} />
      <Stack.Screen name="Pending" component={Pending} />
      <Stack.Screen name="Cancel" component={Cancel} />




      <Stack.Screen
        name="SignUpSeekerProviderNICOrVerifyMember"
        component={SignUpSeekerProviderNICOrVerifyMember}
      />
      <Stack.Screen
        name="SignUpPrivacyPolicy"
        component={SignUpPrivacyPolicy}
      />
    </Stack.Navigator>
  );
};
