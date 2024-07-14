import React, {useState} from 'react';
import {View, Text} from 'react-native';
// third party
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FadeInDown} from 'react-native-reanimated';
// styles
import useStyles from './style';

// local component
import {ParentView} from '../../../components/common/ParentView/ParentView';
import Header from '../../../components/AppHeader';
import TextInputCustom from '../../../components/TextInputCustom';
import images from '../../../assets/images';
import Button from '../../../components/Button/Button';

// local navigation
import {AuthStackParamList} from '../../../navigators/authStack';
import {useGenericModal} from '../../../hooks/useGenericModal/useGenericModal';

import BottomButton from '../../../components/common/BottomButton/BottomButton';
import {validatePhoneNo} from '../../../utils/validator';

type ForgetPasswordScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'ForgetPassword'
>;
const ForgetPassword: React.FC<ForgetPasswordScreenProps> = ({navigation}) => {
  // navigation
  const {navigate} = navigation;

  const {styles, sizes, colors} = useStyles();

  // state
  const [email, setEmail] = useState('');

  const modalProps = {
    image: images.otpSend,
    title: 'OTP Sent',
    firstDes: "We've sent a verification code to",
    secondDes: '03215589241',
    buttonTitle: 'Continue',
    handleClose: () => {
      hideModal();
      navigate('OTPVerification', {navigateTo: 'ChangePassword'});
    },
  };

  // Use the custom hook
  const {GenericModal, hideModal, showModal} = useGenericModal({
    modalProp: modalProps,
  });

  let isValid = email.trim().length > 0 ? true : false;

  return (
    <ParentView
      style={styles.container}
      enterAnimation={FadeInDown.duration(500)}>
      <GenericModal />
      <Header leftIconAction={() => navigation.goBack()} />

      {/* text component  */}
      <View style={styles.textCont}>
        <Text style={styles.forgetPasswordTxt}>Forgot Password</Text>
        <Text>Step 1: Please verify your account.</Text>
      </View>
      {/* text component  end  */}

      {/* input start */}
      <TextInputCustom
        leftIconAction={() => {}}
        isShowRightIcon={false}
        isPassword={false}
        placeHolderTxt="Phone Number"
        value={email}
        handleOnChange={newValue => {
          setEmail(newValue);
        }}
        rightIcon=""
        rightIconAction={() => {}}
        errorHandler={[
          {
            errorText: 'Invalid Phone Number',
            validator: validatePhoneNo,
          },
        ]}
      />

      {/* input start end  */}

      <BottomButton>
        <Button
          bgcolor={isValid ? colors.MAIN_GREEN : colors.LIGHT_GRAY}
          text="Send Code"
          textColor={isValid ? colors.BLACK : colors.LIGHT_GRAY200}
          onPress={() => showModal()}
          btnStyles={styles.snedCodeButton}
        />
      </BottomButton>
    </ParentView>
  );
};

export default ForgetPassword;
