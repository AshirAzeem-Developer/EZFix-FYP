import React, { useEffect, useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FadeInDown } from 'react-native-reanimated';
import useStyles from './style';

// local component
import { ParentView } from '../../../components/common/ParentView/ParentView';
import Header from '../../../components/AppHeader';
import OTPInput from '../../../components/OTPInput';
import Button from '../../../components/Button/Button';

// local navigation
import { AuthStackParamList } from '../../../navigators/authStack';
import BottomButton from '../../../components/common/BottomButton/BottomButton';
import useCountdownTimer from '../../../hooks/useTimer';

// Firebase utilities for OTP
import { verifyOTP, sendOTP } from '../../../utils/firebaseAuth'; // Import sendOTP for resending OTP

type OTPVerificationScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'OTPVerification'
>;

// Helper function to format phone number
const formatPhoneNumber = (countryCode: string, phoneNumber: string) => {
  const formattedCountryCode = countryCode.startsWith('+') ? countryCode : `+${countryCode}`;
  const formattedPhoneNumber = phoneNumber.replace(/^0+/, ''); // Remove leading zeros
  return `${formattedCountryCode}${formattedPhoneNumber}`;
};

const OTPVerification: React.FC<OTPVerificationScreenProps> = ({
  navigation,
  route,
}) => {
  const { navigateTo, confirmation: initialConfirmation, phoneNumber } = route.params;

  const { styles, colors } = useStyles();
  const [otp, setOtp] = useState<string>('');
  const [confirmation, setConfirmation] = useState(initialConfirmation); // Store confirmation in state
   const[notification,setNotification]=useState('')
  const { timeLeft, isActive, start } = useCountdownTimer(1); // Set the timer for 60 seconds

  const handleOTPChange = (otpValue: string) => {
    setOtp(otpValue);
  };

  const handleVerifyOTP = async () => {
    if (otp.length === 6) {
      if (isActive) {
        try {
          const isVerified = await verifyOTP(confirmation, otp);
          if (isVerified) {
            navigation.navigate(navigateTo);
          } else {
            // Alert.alert('Invalid OTP', 'The OTP you entered is incorrect. Please try again.');
            setNotification('Invalid OTP! The otp you entered is incorrect. Please try again')
          }
        } catch (error) {
          // console.error('Error verifying OTP:', error);
          // Alert.alert('Error', 'An error occurred during OTP verification. Please try again.');
          setNotification('An error occurred during OTP verification. Please try again.')
        }
      } else {
        // Alert.alert('OTP Expired', 'The OTP has expired. Please request a new one.');
        setNotification("The OTP has expired. Please request a new one.")
      }
    } else {
      // Alert.alert('Invalid OTP', 'Please enter a 6-digit OTP.');
      setNotification('Invalid OTP,Please enter a 6-digit OTP')
    }
  };

  const handleResendOTP = async () => {
    if (!isActive) {
      console.log('Resending OTP...');
      const formattedPhoneNumber = formatPhoneNumber('92', phoneNumber); // Ensure correct formatting
      
      console.log('Phone number being used:', formattedPhoneNumber); // Log to verify format

      try {
        const newConfirmation = await sendOTP(formattedPhoneNumber);
        if (newConfirmation) {
          setConfirmation(newConfirmation); 
          setOtp(''); 
          start(1, () => { 
            console.log('Timer finished, OTP can be resent');
          });
          // Alert.alert('OTP Resent', `A new OTP has been sent to ${formattedPhoneNumber}.`);
          setNotification(`OTP Resent, A new OTP has been sent to ${formattedPhoneNumber}`)
        } else {
          // Alert.alert('Error', 'Failed to resend OTP. Please try again.');
          setNotification("Error', Failed to resend OTP. Please try again")
        }
      } catch (error) {
        // console.error('Error resending OTP:', error);
        // Alert.alert('Error', 'An error occurred while resending OTP. Please try again.');
        setNotification("An error occurred while resending OTP. Please try again.'")
      }
    }
  };

  useEffect(() => {
    start(1, () => {
      console.log('Timer finished');
    }); // Start the timer for 60 seconds when the component mounts
  }, [start]);

  return (
    <ParentView
      style={styles.container}
      enterAnimation={FadeInDown.duration(500)}
    >
      <Header leftIconAction={() => navigation.goBack()} />

      {/* Text component for OTP Code */}
      <View style={styles.textCont}>
        <Text style={styles.otpCodeTxt}>OTP Code</Text>
      </View>
 <View style={styles.notificaiton}>
       {notification?(<>
       <Text style={{color:colors.RED}}>{notification}</Text>
       </>):(<></>)}
      </View>
      {/* OTP Component */}
      <OTPInput length={6} onOTPChange={handleOTPChange} />

      {/* Resend OTP Text */}
      <View style={{flexDirection:"row"}}>
        <TouchableOpacity
          onPress={() => {
            console.log('Resend Button Pressed');
            handleResendOTP();
          }}
          disabled={isActive}
        >
          <Text
            style={[
              styles.ResendText,
              { color: isActive ? colors.GRAY : colors.PRIMARY }
            ]}
          >
            Resend OTP
          </Text>
        </TouchableOpacity>

        <Text style={styles.ResendText}>
          {' after '}
          <Text
            style={{
              color: isActive ? colors.RED : colors.PRIMARY_TEXT
            }}>
            {timeLeft}
          </Text>
        </Text>
      </View>
     
      {/* Bottom Button */}
      <BottomButton>
        <Button
          bgcolor={otp.length === 6 && isActive ? colors.PRIMARY : colors.LIGHT_GRAY} // Button is only enabled if the OTP is valid and the timer is active
          text="Continue"
          textColor={otp.length === 6 && isActive ? colors.BLACK : colors.LIGHT_GRAY200}
          onPress={handleVerifyOTP}
          btnStyles={styles.saveButton}
        />
      </BottomButton>
    </ParentView>
  );
};

export default OTPVerification;
