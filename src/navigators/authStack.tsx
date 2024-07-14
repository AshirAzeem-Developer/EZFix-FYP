import {createNativeStackNavigator} from '@react-navigation/native-stack';

//  screens import
import Onboarding from '../screens/Auth/Swipe';
import Login from '../screens/Auth/SignIn';
import ForgetPassword from '../screens/Auth/ForgetPassword';

// locla import
import {Role} from '../constants/enums/applicationRoleEnums';
import useUserStore from '../store/reducer/settings';
import {useColors} from '../constants/color';

export type AuthStackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
  ForgetPassword: undefined;
  OTPVerification: {navigateTo: any};
  ChangePassword: undefined;
  // SignUpCheckEmail: undefined;
  // UnVerifyEmailSingUp: undefined;
  // SignUpMobileNo: undefined;
  // SingUpPersonalInfo: undefined;
  CreateNewPassword: undefined;
  // SignUpRoleSelect: undefined;
  // SignUpHomeAddress: {roleID: Role};
  // SignUpConnectAccount: {roleID: Role};
  // SignUpStatus: {roleID: Role};
  // SignUpRefereeLicOrVerifyMember: {roleID: Role};
  // SignUpCheckPhoto: {roleID: Role};
  // SignUpRefereeCoachingLicense: {roleID: Role};
  // SignUpTeamSetup: {roleID: Role};
  // SignUpAddExperience: {roleID: Role};
  // SignUpCertificationLevel: {roleID: Role};
  // SignUpExpectedRate: {roleID: Role};
  // SignUpLinkABankAccount: {roleID: Role};
  // SignUpTakeASelfie: {roleID: Role};
  // SignUpPrivacyPolicy: undefined;
  // SignUpTermsAndCondition: undefined;
};
// var
const Stack = createNativeStackNavigator<AuthStackParamList>();
// auth Stack
const AuthStack = () => {
  const colors = useColors();
  const onboarding = useUserStore(state => state.onboarding);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: colors.BACKGROUND,
      }}
      initialRouteName={!onboarding ? 'Onboarding' : 'Login'}>
      <Stack.Screen
        name="Onboarding"
        options={{
          navigationBarColor: colors.MAIN_GREEN,
        }}
        component={Onboarding}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
