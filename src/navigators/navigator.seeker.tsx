import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateBottomTabs from './CreateBottomTabs';
import Home from '../screens/App/Home';
import Profile from '../screens/App/Profile';
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
import Pending from '../screens/App/Bookings/Pending';
import Cancel from '../screens/App/Bookings/Cancel';
import CreateTopTabs from './CreateTopTabs';
import Header from '../components/Header';
import StartStopWorking from '../screens/App/StartStopWorking';
import {useSelector} from 'react-redux';
import Chat from '../screens/App/Chat';
import Chatlist from '../components/ChatList';
import ChatOpen from '../screens/App/ChatOpen';
import AllProviderCards from '../screens/App/AllProviders';
import {View} from 'react-native';

export type AppStackParamsList = {
  Profile: undefined;
  ProfileSettings: undefined;
  EditProfile: undefined;
  Notifications: undefined;
  NotificationSetting: undefined;
  Support: undefined;
  PrivacyPolicy: undefined;
  WorkDetails: {title: string; data?: any};
  Bookings: undefined;
  ProfileDetail: undefined;
  OrderSummary: {
    data: {};
  };
  StartStopWorking: undefined;
  ChatOpen: {title: string; data?: any};
  Chat: undefined;
  Chatlist: undefined;
  AllProviders: undefined;
  AddSkill: undefined;
  AddExperience: undefined;
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
function BookingStack({navigation}) {
  const userType = useSelector(
    (state: any) => state?.user?.user?.user?.roleType,
  );
  return (
    <>
      <CreateTopTabs
        initialRouteName="Approved"
        screens={[
          {
            name: userType !== 'seeker' ? 'All Bookings' : 'Approved',
            Component: Approved,
            label: userType !== 'seeker' ? 'All Bookings' : 'Approved',
          },
          {
            name: userType !== 'seeker' ? 'Accepted ' : 'Pending',
            Component: Pending,
            label: userType !== 'seeker' ? 'Accepted ' : 'Pending',
          },
          {
            name: userType !== 'seeker' ? 'Rejected' : 'Cancelled',
            Component: Cancel,
            label: userType !== 'seeker' ? 'Rejected' : 'Cancelled',
          },
        ]}
        key={'BookingStack'}
      />
    </>
  );
}
function ChatStack({navigation}) {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Chat">
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Chatlist" component={Chatlist} />
      </Stack.Navigator>
    </>
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
      <Stack.Screen name="StartStopWorking" component={StartStopWorking} />
      <Stack.Screen name="ChatOpen" component={ChatOpen} />
      <Stack.Screen name="AllProviders" component={AllProviderCards} />
    </Stack.Navigator>
  );
}

export default ServiceSeekerStack;
