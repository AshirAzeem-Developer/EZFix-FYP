import React, {useState} from 'react';

// react navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// navigation imports
import ServiceProvider from './navigator.provider';
import {AuthStack} from './navigator.auth';
import {useUserSelector} from '../store/reducer/user';

import ServiceSeeker from './navigator.seeker';
import {Role} from '../constants/enums/applicationRoleEnums';
// import CustomSplash from './CustomSplash';

function RootNav() {
  const user = useUserSelector();
  //   const [isSplashVisible, setIsSplashVisible] = useState(true);
  return (
    <NavigationContainer>
      {user ? (
        user?.user?.roleType === Role.ServiceProvider ? (
          <ServiceProvider />
        ) : (
          <ServiceSeeker />
        )
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}

export default RootNav;
