import React, {FC, useState} from 'react';
import {View, Text} from 'react-native';
// third party
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FadeInDown} from 'react-native-reanimated';

// styles
import stylesheet from './style';
import useStyles from './style';

// local component
import {ParentView} from '../../../components/common/ParentView/ParentView';
import Header from '../../../components/AppHeader';
import TextInputCustom from '../../../components/TextInputCustom';
import images from '../../../assets/images';
import Button from '../../../components/Button/Button';

// local others

// local navigation
import {AuthStackParamList} from '../../../navigators/authStack';
import {useGenericModal} from '../../../hooks/useGenericModal/useGenericModal';
import BottomButton from '../../../components/common/BottomButton/BottomButton';
import {validateEmail, validatePhoneNo} from '../../../utils/validator';
import {getGlobalStyles} from '../../../constants/GlobalStyle';
import icons from '../../../assets/icons';
import MobileNoTextInput from '../../../components/MobileNoTextInput';

type SignUpCheckPhoneScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'SignUpCheckPhone'
>;

const SignUpCheckPhone: FC<SignUpCheckPhoneScreenProps> = ({navigation}) => {
  const {styles, sizes, colors} = useStyles();

  const fonts = getGlobalStyles(colors, sizes);

  // state
  // const [email, setEmail] = useState<string>('');
  const [mobileNo, setMobileNo] = useState('');
  const [isShowIcon, setIsShowIcon] = useState(false);

  const [isShowCrossicon, setIsShowCrossicon] = useState<boolean>(false);
  const [isOtpSend, setIsOtpSend] = useState<boolean>(false);
  // navigation
  const {navigate} = navigation;

  const verifyEmailModalProps = {
    image: images.unVerifyPhone,
    title: 'Verify Your Phone Number',
    firstDes: 'This help us mitigate fraud and keep your personal data safe',
    firstDesStyle: {
      fontFamily: fonts.TEXT_STYLE.fontFamily,
      fontSize: sizes.FONTSIZE,
      color: colors.BLACK,
      textAlign: 'center' as 'center',
    },
    buttonTitle: 'Send Code',
    handleClose: () => {
      setIsOtpSend(true);
    },
  };

  const otpSendModalProps = {
    image: images.otpSend,
    title: 'OTP Sent',
    firstDes: "We've sent a verification code to",
    secondDes: '+92 325 8978998',
    buttonTitle: 'Continue',
    handleClose: () => {
      hideModal();
      navigate('OTPVerification', {navigateTo: 'SingUpPersonalInfo'});
    },
  };

  // Use the custom hook
  const {GenericModal, hideModal, showModal} = useGenericModal({
    modalProp: isOtpSend ? otpSendModalProps : verifyEmailModalProps,
  });

  // let isValid = email.trim().length > 0 ? true : false;
  let isValid = mobileNo.trim().length > 0 ? true : false;

  return (
    <ParentView
      style={styles.container}
      enterAnimation={FadeInDown.duration(500)}>
      <Header leftIconAction={() => navigation.goBack()} />
      <GenericModal />
      {/* text component  */}
      <View style={styles.textCont}>
        <Text style={styles.signUpTxt}>Sign Up</Text>
      </View>
      {/* text component  end  */}

      {/* input start */}
      {/* input start */}
      <MobileNoTextInput
        placeHolderTxt="Enter Mobile Number"
        value={mobileNo}
        isShowRightIcon={isShowIcon}
        handleOnChange={newValue => {
          setMobileNo(newValue);
        }}
        rightIconAction={() => {
          setMobileNo('');

          setIsShowIcon(false);
        }}
        validator={validatePhoneNo}
        errorText="Invalid Mobile Number"
      />

      {/* input start end  */}
      <Text style={styles.wellCheckTxt}>
        We'll check, if you have an account
      </Text>
      {/* input start end  */}

      <BottomButton additionalButtonContStyle={styles.sendCodeButtonCont}>
        <Button
          bgcolor={isValid ? colors.MAIN_GREEN : colors.GRAY}
          text="Continue"
          textColor={isValid ? colors.BLACK : colors.LIGHT_GRAY}
          onPress={() => {
            setIsOtpSend(false);
            showModal();
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
