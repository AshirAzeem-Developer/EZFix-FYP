import React, { FC, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FadeInDown } from 'react-native-reanimated';

// styles
import useStyles from './style';

// local component
import { ParentView } from '../../../components/common/ParentView/ParentView';
import Header from '../../../components/AppHeader';
import MobileNoTextInput from '../../../components/MobileNoTextInput';
import Button from '../../../components/Button/Button';

// local navigation
import { AuthStackParamList } from '../../../navigators/authStack';
import { useGenericModal } from '../../../hooks/useGenericModal/useGenericModal';
import BottomButton from '../../../components/common/BottomButton/BottomButton';
import { validatePhoneNo } from '../../../utils/validator';

// Firebase utilities for OTP
import { sendOTP } from '../../../utils/firebaseAuth';
import images from '../../../assets/images';
import { getGlobalStyles } from '../../../constants/GlobalStyle';
import { showError } from '../../../utils/helperFunction';

type SignUpCheckPhoneScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'SignUpCheckPhone'
>;
const formatPhoneNumber = (countryCode: string, phoneNumber: string) => {
  const formattedCountryCode = countryCode.startsWith('+') ? countryCode : `+${countryCode}`;
  const formattedPhoneNumber = phoneNumber.replace(/^0+/, ''); // Remove leading zeros
  return `${formattedCountryCode}${formattedPhoneNumber}`;
};

const SignUpCheckPhone: FC<SignUpCheckPhoneScreenProps> = ({ navigation }) => {
  const { styles, sizes, colors } = useStyles();
  const fonts = getGlobalStyles(colors, sizes);

  // state
  const [mobileNo, setMobileNo] = useState('');
  const [isShowIcon, setIsShowIcon] = useState(false);
  const [isOtpSend, setIsOtpSend] = useState<boolean>(false);
  const [confirmation, setConfirmation] = useState<any>(null);

  // navigation
  const { navigate } = navigation;

  // Format the phone number into E.164 format
  
 
  const handleSendOTP = async () => {
    const countryCode = '92'; // Example country code for Pakistan
    const formattedPhoneNumber = formatPhoneNumber(countryCode, mobileNo); // Ensure correct formatting

    console.log('Formatted phone number:', formattedPhoneNumber); // Log to verify format

    try {
      const confirmationResult = await sendOTP(formattedPhoneNumber);
      if (confirmationResult) {
        setConfirmation(confirmationResult);
        setIsOtpSend(true);
        showModal();
      } else {
        showError('Error', 'Failed to send OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      showError('Error', 'An error occurred while sending OTP. Please try again.');
    }
  };
  
  const verifyEmailModalProps = {
    image: images.unVerifyPhone,
    title: 'Verify Your Phone Number',
    firstDes: 'This helps us mitigate fraud and keep your personal data safe',
    firstDesStyle: {
      fontFamily: fonts.TEXT_STYLE.fontFamily,
      fontSize: sizes.FONTSIZE,
      color: colors.BLACK,
      textAlign: 'center' as 'center',
    },
    buttonTitle: 'Send Code',
    handleClose: handleSendOTP,
  };

  const otpSendModalProps = {
    image: images.otpSend,
    title: 'OTP Sent',
    firstDes: "We've sent a verification code to",
    secondDes: mobileNo,
    buttonTitle: 'Continue',
    handleClose: () => {
      hideModal();
      navigate('OTPVerification', {
        confirmation,
        phoneNumber: mobileNo, // Pass the correct phone number here
        navigateTo: 'SingUpPersonalInfo'
      });
    },
  };
  // Use the custom hook
  const { GenericModal, hideModal, showModal } = useGenericModal({
    modalProp: isOtpSend ? otpSendModalProps : verifyEmailModalProps,
  });

  let isValid = validatePhoneNo(mobileNo);

  return (
    <ParentView style={styles.container} enterAnimation={FadeInDown.duration(500)}>
      <Header leftIconAction={() => navigation.goBack()} />
      <GenericModal />

      {/* text component */}
      <View style={styles.textCont}>
        <Text style={styles.signUpTxt}>Sign Up</Text>
      </View>

      {/* input start */}
      <MobileNoTextInput
        placeHolderTxt="Enter Mobile Number"
        value={mobileNo}
        isShowRightIcon={isShowIcon}
        handleOnChange={newValue => {
          setMobileNo(newValue);
          setIsShowIcon(validatePhoneNo(newValue));
        }}
        rightIconAction={() => {
          setMobileNo('');
          setIsShowIcon(false);
        }}
        validator={validatePhoneNo}
        errorText="Invalid Mobile Number"
      />

      <Text style={styles.wellCheckTxt}>
        We'll check if you have an account
      </Text>

      <BottomButton additionalButtonContStyle={styles.sendCodeButtonCont}>
        <Button
          bgcolor={isValid ? colors.PRIMARY : colors.GRAY}
          text="Continue"
          textColor={isValid ? colors.BLACK : colors.LIGHT_GRAY}
          onPress={() => {
            if (isValid) {
              showModal();
            } else {
              Alert.alert('Invalid Number', 'Please enter a valid mobile number.');
            }
          }}
          btnStyles={styles.snedCodeButton}
        />

        <Text style={styles.alreadyJoinTxt}>
          Already joined?{' '}
          <Text style={styles.loginTxt} onPress={() => navigate('SignIn')}>
            Login
          </Text>
        </Text>
      </BottomButton>
    </ParentView>
  );
};

export default SignUpCheckPhone;
