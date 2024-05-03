import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';

import styles from './style';
import OTPInput from '../../../components/OTPInput';
import AppButton from '../../../components/Button';
import {Image} from 'react-native-elements';
import images from '../../../assets/images';
const {width, height} = Dimensions.get('window');
const OTPScreen = props => {
  console.log('styles:', styles);
  const initialTimerDuration = 42;

  // State variables for timer and button enabled state
  const [timer, setTimer] = useState(initialTimerDuration);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    let timerInterval;

    // If the timer is greater than zero, start a timer interval
    if (timer > 0) {
      timerInterval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else {
      // Timer has reached zero, enable the "Send Again" button
      setIsButtonEnabled(true);
    }

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(timerInterval);
    };
  }, [timer]);

  // Function to reset the timer when the "Send Again" button is clicked

  const resetTimer = () => {
    setTimer(initialTimerDuration);
    setIsButtonEnabled(false);
  };

  return (
    <>
      <SafeAreaView style={styles.screen}>
        <View style={styles.imageContainer}>
          <Image source={images.LockOTP} style={styles.imageStyles} />
          <View style={styles.textContainer}>
            <Text
              style={{
                fontSize: width * 0.08,
                color: 'black',
                fontFamily: 'Dubai-Bold',
                marginVertical: height * 0.01,
              }}>
              Enter OTP
            </Text>
            {/* <Text
              style={{
                fontSize: width * 0.04,
                fontFamily: 'Dubai-Regular',

                color: 'black',
                textAlign: 'center',
              }}>
              An 4 digit OTP has been sent to your registered number
            </Text> */}
          </View>
        </View>
        <View style={styles.otpContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.timerHeading}>
              {' '}
              {/* Display the timer in MM:SS format */}
              {`${Math.floor(timer / 60)
                .toString()
                .padStart(2, '0')}:${(timer % 60).toString().padStart(2, '0')}`}
            </Text>
            <Text style={styles.otpHeading}>
              Type the verification code we’ve sent you
            </Text>
          </View>
          <View>
            <OTPInput
              // onCodeChanged={otp => console.log('here is your  otp', otp)}
              autoFocus={true}
              onCodeFilled={() => {
                props.navigation.navigate('Signin');
              }}
            />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <AppButton
            text={'Send Again'}
            onPress={resetTimer}
            buttonStyle={{
              backgroundColor: isButtonEnabled ? '#fff' : '#164377',
            }}
            textStyle={{color: isButtonEnabled ? '#000' : '#fff'}}
            disabled={!isButtonEnabled}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default OTPScreen;
