import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Orders from '../screens/Seekers/Orders';
import Notifications from '../screens/Seekers/Notifications';
import Profile from '../screens/Seekers/Profile';
import Home from '../screens/Seekers/Home/Home';
import {Image} from 'react-native-elements';
import icons from '../assets/icons';

const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <>
      <Bottom.Navigator>
        <Bottom.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => {
              return (
                <Image source={icons.Home} style={{width: 25, height: 25}} />
              );
            },
            headerShown:false
          }}
        />
        <Bottom.Screen
          name="Orders"
          component={Orders}
          options={{
            tabBarIcon: () => {
              return (
                <Image source={icons.Order} style={{width: 25, height: 25}} />
              );
            },
          }}
        />
        <Bottom.Screen
          name="Notification"
          component={Notifications}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={icons.Notification}
                  style={{width: 25, height: 25}}
                />
              );
            },
          }}
        />
        <Bottom.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => {
              return (
                <Image source={icons.Profile} style={{width: 25, height: 25}} />
              );
            },
          }}
        />
      </Bottom.Navigator>
    </>
  );
};

export default BottomNavigator;
