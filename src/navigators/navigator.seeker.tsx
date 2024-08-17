import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import CreateBottomTabs from './CreateBottomTabs';
import Home from '../screens/App/Home';
import Profile from '../screens/App/Profile';
import Messages from '../screens/App/Message';
import Bookings from '../screens/App/Bookings';
import icons from '../assets/icons';
import ProfileSettings from '../screens/App/ProfileSettings';
import EditProfile from '../screens/App/EditProfile';
import Notifications from '../screens/App/Notifications';
import NotificationSetting from '../screens/App/NotificationSettings';
import Support from '../screens/App/Support';
import SignUpPrivacyPolicy from '../screens/Auth/SignUpPrivacyPolicy';
import PrivacyPolicy from '../screens/App/PrivacyPolicy';
import WorkDetails from '../screens/App/WorkDetails';
import Approved from '../screens/App/Bookings/Approved';
import ProfileDetail from '../screens/App/ProfileDetail';
import OrderSummary from '../screens/App/OrderSummary';

export type AppStackParamsList = {
  Profile: undefined;
  ProfileSettings: undefined;
  EditProfile: undefined;
  Notifications: undefined;
  NotificationSetting: undefined;
  Support: undefined;
  PrivacyPolicy: undefined;
  WorkDetails: undefined;
  Bookings: undefined;
  ProfileDetail: undefined;
  OrderSummary: undefined;
};

const Stack = createNativeStackNavigator();

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
function BookingStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Bookings">
      <Stack.Screen name="Bookings" component={Bookings} />
      <Stack.Screen name="Approved" component={Approved} />
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
          Component: Home,
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
          Component: Messages,
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

function ServiceSeekerStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeTabs">
      <Stack.Screen name="HomeTabs" component={BottomTabs} />
      <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen
        name="NotificationSettings"
        component={NotificationSetting}
      />
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="WorkDetails" component={WorkDetails} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
      <Stack.Screen name="OrderSummary" component={OrderSummary} />
    </Stack.Navigator>
  );
}

export default ServiceSeekerStack;
