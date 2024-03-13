import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Image,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Images} from '../assets/images';
import size from '../constants/size';

//Screens
import icons from '../assets/icons';
import GlobalStyle from '../constants/GlobalStyle';
import color from '../constants/color';
const {width, height} = Dimensions.get('window');
import Home from '../screens/App/Home';
import BottomTabComponent from '../components/BottomTabComponent';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const bottomTabArr = [
  {
    id: 1,
    name: 'HomeScreen',
    // barName: 'Home',
    component: Home,
    activeIcon: icons.homeIcon,
    inActiveIcon: icons.homeInactive,
  },
  {
    id: 2,
    name: 'hello',
    // barName: 'Home',
    component: Home,
    activeIcon: icons.learnActiveIcon,
    inActiveIcon: icons.saveInactive,
  },
  {
    id: 3,
    name: 'hello1',
    // barName: 'Home',
    component: Home,
    activeIcon: icons.liveActiveIcon,
    inActiveIcon: icons.liveInactive,
  },
  {
    id: 4,
    name: 'hello2',
    // barName: 'Home',
    component: Home,
    activeIcon: icons.saveActiveIcon,
    inActiveIcon: icons.learnInactive,
  },
  {
    id: 5,
    name: 'hello3',
    // barName: 'Home',
    component: Home,
    activeIcon: icons.profileActiveIcon,
    inActiveIcon: icons.profileInactive,
  },
];

export const BottomNavigator = ({}) => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarStyle: {
          width: width,
          backgroundColor: color.BLUE,
          minHeight: height * 0.08,
          paddingVertical: Platform.OS == 'ios' ? 15 : 15,
          borderTopRightRadius: width * 0.06,
          borderTopLeftRadius: width * 0.06,
        },
        headerShadowVisible: false,
      }}>
      {bottomTabArr.map(singleItem => (
        <Tab.Screen
          name={singleItem.name}
          component={singleItem.component}
          key={singleItem.id}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <BottomTabComponent focus={focused} item={singleItem} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default () => (
  <Stack.Navigator
    initialRouteName="BottomNavigator"
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#010017'},
    }}>
    {/* <Stack.Screen name="Catogories" component={Catogories} /> */}

    <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
  </Stack.Navigator>
);
