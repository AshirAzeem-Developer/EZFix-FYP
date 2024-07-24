import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateBottomTabs from './CreateBottomTabs';
import Home from '../screens/App/Home';
import Profile from '../screens/App/Profile';
import Messages from '../screens/App/Message';
import Bookings from '../screens/App/Bookings';
import icons from '../assets/icons';
const Stack = createNativeStackNavigator();

const BottomTabs = () => {
  return (
    <CreateBottomTabs
      initialRouteName="Home"
      screens={[
        {
          name: 'Home',
          Component: Home,
          icon: icons.HOME_TAB,
          selectedIcon: icons.HOME_TAB_ACTIVE,
          label: 'Home',
        },
        {
          name: 'Bookings',
          Component: Bookings,
          icon: icons.BOOKINGS_TAB,
          selectedIcon: icons.BOOKINGS_TAB_ACTIVE,
          label: 'Bookings',
        },
        {
          name: 'Messages',
          Component: Messages,
          icon: icons.MESSAGE_TAB,
          selectedIcon: icons.MESSAGE_TAB_ACTIVE,
          label: 'Messages',
        },
        {
          name: 'Profile',
          Component: Profile,
          icon: icons.PROFILE_TAB,
          selectedIcon: icons.PROFILE_TAB_ACTIVE,
          label: 'Profile',
        },
      ]}
    />
  );
};

function ServiceSeekerStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeTabs">
      <Stack.Screen name="HomeTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
}

export default ServiceSeekerStack;
