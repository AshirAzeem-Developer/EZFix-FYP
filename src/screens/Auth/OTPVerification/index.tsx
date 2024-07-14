import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
// third party
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FadeInDown} from 'react-native-reanimated';
// styles
import useStyles from './style';

// local component
import {ParentView} from '../../../components/common/ParentView/ParentView';
import Header from '../../../components/AppHeader';
import OTPInput from '../../../components/OTPInput';
import Button from '../../../components/Button/Button';

// local navigation
import {AuthStackParamList} from '../../../navigators/authStack';
import BottomButton from '../../../components/common/BottomButton/BottomButton';
import useCountdownTimer from '../../../hooks/useTimer';

type OTPVerificationScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'OTPVerification'
>;

const OTPVerification: React.FC<OTPVerificationScreenProps> = ({
  navigation,
  route,
}) => {
  // navigation
  const {navigate} = navigation;

  // Extract parameters from route
  const {navigateTo} = route.params;

  const {styles, sizes, colors} = useStyles();
  // state
  const [otp, setOtp] = useState<string>('');

  const {timeLeft, isActive, start} = useCountdownTimer();

  const handleOTPChange = (otpValue: string) => {
    setOtp(otpValue);
    console.log('OTP Value:', otpValue);
  };

  const startTimer = () => {
    start(1, () => {
      console.log('timer end');
    });
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <ParentView
      style={styles.container}
      enterAnimation={FadeInDown.duration(500)}>
      <Header leftIconAction={() => navigation.goBack()} />

      {/* text component  */}
      <View style={styles.textCont}>
        <Text style={styles.otpCodeTxt}>OTP Code</Text>
      </View>
      {/* text component  end  */}

      {/* OTP COMP */}
      <OTPInput length={4} onOTPChange={handleOTPChange} />
      {/* OTP COMP END */}
      <Text style={styles.ResendText}>
        <Text
          onPress={() => (!isActive ? startTimer() : null)}
          style={!isActive ? styles.ActiveResend : null}>
          Resend OTP
        </Text>{' '}
        after{' '}
        <Text
          style={{
            color: isActive ? colors.RED : colors.PRIMARY_TEXT,
          }}>
          {timeLeft}
        </Text>
      </Text>
      <BottomButton>
        <Button
          bgcolor={true ? colors.MAIN_GREEN : colors.LIGHT_GRAY}
          text="Resend Code"
          textColor={true ? colors.BLACK : colors.LIGHT_GRAY200}
          onPress={() => navigate(navigateTo)}
          btnStyles={styles.saveButton}
        />
      </BottomButton>
    </ParentView>
  );
};

export default OTPVerification;
