import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
import {StyleSheet, View} from 'react-native';

import Header from '../components/Header';
import Notifications from '../screens/App/Notifications';
import AddSkill from '../screens/App/AddSkills';
import AddExperience from '../screens/App/AddExperience';
import StartStopWorking from '../screens/App/StartStopWorking';
import ChangePassword from '../screens/Auth/ChangePassword';
import NotificationSetting from '../screens/App/NotificationSettings';
import Support from '../screens/App/Support';
import PrivacyPolicy from '../screens/App/PrivacyPolicy';

const Stack = createNativeStackNavigator();

const BookingStack = ({navigation}: {navigation: any}) => {
  return (
    <CreateTopTabs
      initialRouteName="Pending"
      screens={[
        {name: 'Approved', Component: Approved, label: 'Approved'},
        {name: 'Pending', Component: Pending, label: 'Pending'},
        {name: 'Cancel', Component: Cancel, label: 'Cancelled'},
      ]}
      key={'BookingStack'}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

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

const ChatStack = ({navigation}: {navigation: any}) => {
  return (
    <Stack.Navigator
      initialRouteName="Chat"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Chatlist" component={Chatlist} />
    </Stack.Navigator>
  );
};

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
      <Stack.Screen name="Notification" component={Notifications} />
      <Stack.Screen name="AddSkill" component={AddSkill} />
      <Stack.Screen name="AddExperience" component={AddExperience} />
      <Stack.Screen name="StartStopWorking" component={StartStopWorking} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      
      <Stack.Screen
        name="NotificationSettings"
        component={NotificationSetting}
      />
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    </Stack.Navigator>
  );
}

export default ServiceProvider;
