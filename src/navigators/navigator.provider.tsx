import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/App/Home';

import Messages from '../screens/App/Message';
import Profile from '../screens/App/Profile';
import CreateBottomTabs from './CreateBottomTabs';
import icons from '../assets/icons';
import WorkDetails from '../screens/App/WorkDetails';
import Approved from '../screens/App/Bookings/Approved';
import Pending from '../screens/App/Bookings/Pending';
import Cancel from '../screens/App/Bookings/Cancel';
import CreateTopTabs from './CreateTopTabs';
import EditProfile from '../screens/App/EditProfile';
import ProfileSettings from '../screens/App/ProfileSettings';
import ProviderHome from '../screens/App/ProviderHome';
import Chat from '../screens/App/Chat';
import Chatlist from '../components/ChatList';
import ChatOpen from '../screens/App/ChatOpen';

const Stack = createNativeStackNavigator();
function BookingStack() {
  return (
    <CreateTopTabs
      initialRouteName="Pending"
      screens={[
        {
          name: 'Approved',
          Component: Approved,
          label: 'Approved',
        },
        {
          name: 'Pending',
          Component: Pending,
          label: 'Pending',
        },
        {
          name: 'Cancel',
          Component: Cancel,
          label: 'Cancelled',
        },
      ]}
      key={'BookingStack'}
    />
  );
}
function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}

function ChatStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Chat">
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Chatlist" component={Chatlist} />
    </Stack.Navigator>
  );
}

const BottomTabs = () => {
  return (
    <CreateBottomTabs
      initialRouteName="Home"
      screens={[
        {
          name: 'Home',
          Component: ProviderHome,
          icon: icons.HOME_TAB,
          selectedIcon: icons.HOME_TAB_ACTIVE,
          label: 'Home',
        },
        {
          name: 'Bookings',
          Component: BookingStack,
          icon: icons.BOOKINGS_TAB,
          selectedIcon: icons.BOOKINGS_TAB_ACTIVE,
          label: 'Bookings',
        },
        {
          name: 'Messages',
          Component: ChatStack,
          icon: icons.MESSAGE_TAB,
          selectedIcon: icons.MESSAGE_TAB_ACTIVE,
          label: 'Messages',
        },
        {
          name: 'Profile',
          Component: ProfileStack,
          icon: icons.PROFILE_TAB,
          selectedIcon: icons.PROFILE_TAB_ACTIVE,
          label: 'Profile',
        },
      ]}
    />
  );
};

function ServiceProvider() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeTabs">
      <Stack.Screen name="HomeTabs" component={BottomTabs} />
      <Stack.Screen name="WorkDetails" component={WorkDetails} />
      <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
      <Stack.Screen name="ChatOpen" component={ChatOpen} />
    </Stack.Navigator>
  );
}

export default ServiceProvider;
