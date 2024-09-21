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
  Splash: undefined;
  OnBoarding: undefined;
  SignIn: undefined;
  ForgetPassword: undefined;
  OTPVerification: {navigateTo: any; phoneNumber: string; confirmation: any};
  ChangePassword: undefined;
  SignUpCheckPhone: undefined;
  // UnVerifyEmailSingUp: undefined;
  SignUpMobileNo: undefined;
  SingUpPersonalInfo: undefined;
  CreateNewPassword: undefined;
  SignUpRoleSelect: undefined;
  // SignUpHomeAddress: {roleID: Role};
  // SignUpConnectAccount: {roleID: Role};
  // SignUpStatus: {roleID: Role};
  SignUpSeekerProviderNICOrVerifyMember: {roleID: Role};
  SignUpCheckPhoto: {roleID: Role};
  // SignUpRefereeCoachingLicense: {roleID: Role};
  // SignUpTeamSetup: {roleID: Role};
  // SignUpAddExperience: {roleID: Role};
  // SignUpCertificationLevel: {roleID: Role};
  // SignUpExpectedRate: {roleID: Role};
  // SignUpLinkABankAccount: {roleID: Role};
  // SignUpTakeASelfie: {roleID: Role};
  SignUpPrivacyPolicy: undefined;
  // SignUpTermsAndCondition: undefined;
};
