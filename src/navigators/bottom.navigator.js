import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import size from '../constants/size';

//Screens

import Home from '../screens/App/Home';
import Orders from '../screens/App/Orders';

// Icons and Styles Imports
import icons from '../assets/icons';
import GlobalStyle from '../constants/GlobalStyle';
import color from '../constants/color';
import images from '../assets/images';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const {width, height} = Dimensions.get('window');
const TabImage = ({
  focused,
  name,
  icon,
  selectedIcon,
  selectedColor = color.PRIMARY,
  defaultColor = color.LIGHT_GRAY200,
}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{
          width: focused ? size.ICON * 1.4 : size.ICON * 1.2,
          height: focused ? size.ICON * 1.4 : size.ICON * 1.2,
          tintColor: focused ? selectedColor : defaultColor,
        }}
        resizeMode="contain"
        source={selectedIcon ? (focused ? selectedIcon : icon) : icon}
      />
      {name && (
        <Text
          style={{
            ...GlobalStyle.TEXT_STYLE,
            fontSize: size.FONTSIZE_SMALL,
            color: focused ? selectedColor : defaultColor,
          }}>
          {name}
        </Text>
      )}
    </View>
  );
};

const HomeIcon = ({focused, name, icon}) => {
  return (
    <TabImage
      focused={focused}
      name={name}
      icon={icon}
      selectedColor={'#008000'}
    />
  );
};

export const BottomNavigator = ({}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: size.HEIGHT * 0.09,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon focused={focused} icon={images.Home} name="" />
          ),
        }}></Tab.Screen>

      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon focused={focused} name="" icon={images.Orders} />
          ),
        }}></Tab.Screen>

      <Tab.Screen
        name="NewLead"
        component={NewLead}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{padding: 10, borderRadius: 10}}>
              <Image
                focused={focused}
                source={images.addButton}
                resizeMode="contain"
                style={{width: 45}}
              />
            </View>
          ),
        }}></Tab.Screen>

      <Tab.Screen
        name="PropertyListing"
        component={PropertyListing}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon focused={focused} name="" icon={images.property} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{padding: 10, borderRadius: 10}}>
              <Image
                focused={focused}
                source={images.profile}
                resizeMode="contain"
                style={{width: 30}}
              />
            </View>
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};
