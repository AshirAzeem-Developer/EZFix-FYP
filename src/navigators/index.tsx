import React, {useState} from 'react';

// react navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// navigation imports
import ServiceProvider from './serviceProvider';
import AuthStack from './authStack';
import useUserStore from '../store/reducer/settings';

import ServiceSeeker from './serviceSeeker';
// import CustomSplash from './CustomSplash';

const Stack = createNativeStackNavigator();

function RootNav() {
  const user = useUserStore(state => state.user);
  //   const [isSplashVisible, setIsSplashVisible] = useState(true);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="AuthStack">
          <Stack.Screen
            name="app"
            component={
              user === 0
                ? AuthStack
                : user === 1
                ? ServiceSeeker
                : ServiceProvider
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default RootNav;
