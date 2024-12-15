import React, {FC, useState} from 'react';
import {View, Text, Alert} from 'react-native';
// third party

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FadeInDown} from 'react-native-reanimated';

// styles
import useStyles from './style';

// local component
import {ParentView} from '../../../components/common/ParentView/ParentView';
import Header from '../../../components/Header';
import TextInputCustom from '../../../components/TextInputCustom';
import images from '../../../assets/images';
import Button from '../../../components/Button/Button';

// local navigation
import {AuthStackParamList} from '../../../navigators/authStack';
import {useGenericModal} from '../../../hooks/useGenericModal/useGenericModal';

import {screen} from '../../../utils/constants';
import BottomButton from '../../../components/common/BottomButton/BottomButton';
import {validatePassword} from '../../../utils/validator';
import {getGlobalStyles} from '../../../constants/GlobalStyle';
import { useSelector } from 'react-redux';
import { updatePassoword } from '../../../utils/ApiCall';

type ChangePasswordScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'ChangePassword'
>;

const ChangePassword: FC<ChangePasswordScreenProps> = ({navigation}) => {
  // navigation
  const {navigate} = navigation;

  const {styles, sizes, colors} = useStyles();

  const theme = getGlobalStyles(sizes, colors);
  // state
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isShowNewPassword, setIsNewShowPassword] = useState(true);
  const [isShowConfPassword, setIsShowConfPassword] = useState(true);
  const userToken = useSelector((state: any) => state?.user?.user?.jwt);
  const userData = useSelector((state: RootState) => state.user.user.user);
  const userId = useSelector((state: RootState) => state.user?.user?.user?.id);
  console.log(userId);
  console.log(userData);
  console.log(userToken);
  
  const handlePasswordUpdate = async () => {
    if (!isValid) {
      Alert.alert('Validation Error', 'Ensure the passwords match and are valid.');
      return;
    }

    try {
      const data = { password: newPassword };
      await updatePassoword(userToken, userId, data);
      showModal(); // Show success modal
    } catch (error) {
      console.error('Error updating password:', error);
      Alert.alert('Error', 'Failed to update the password. Please try again.');
    }
  };
  const modalProps = {
    image: images.PasswordChanged,
    title: 'Password Changed Successfully',
    firstDes: 'You can now login using your new password',

    firstDesStyle: {
      fontFamily: theme.TEXT_STYLE.fontFamily,
      fontSize: screen.width * 0.037,
      color: colors.BLACK,
    },
    buttonTitle: 'Login',
    handleClose: () => {
      navigate('SignIn');
    },
  };

  // Use the custom hook
  const {GenericModal, hideModal, showModal} = useGenericModal({
    modalProp: modalProps,
  });

  let isValid =
    newPassword.trim().length > 0 && confirmPassword.trim().length > 0
      ? true
      : false;
  return (
    <ParentView
      style={styles.container}
      enterAnimation={FadeInDown.duration(500)}>
      <Header isLeftShow={true} leftIconAction={() => navigation.goBack()} />
      <GenericModal />
      {/* text component  */}
      <View style={styles.textCont}>
        <Text style={styles.creatNewTxt}>Create New Password</Text>
        <Text>
          Step 2: change your password. Make your password strong and safe.
        </Text>
      </View>
      {/* text component  end  */}

      {/* input start */}
      <TextInputCustom
        leftIcon={images.lock}
        leftIconAction={() => {}}
        isShowRightIcon
        isPassword={isShowNewPassword}
        placeHolderTxt="New Password"
        value={newPassword}
        handleOnChange={newValue => {
          setNewPassword(newValue);
        }}
        rightIcon={isShowNewPassword ? images.crossEye : images.eyeOpen}
        rightIconAction={() => {
          setIsNewShowPassword(preVale => !preVale);
        }}
        errorHandler={[
          {
            errorText: 'Password must be 8 characters long',
            validator: validatePassword,
          },
        ]}
      />
      <TextInputCustom
        leftIcon={images.lock}
        leftIconAction={() => {}}
        isShowRightIcon
        isPassword={isShowConfPassword}
        placeHolderTxt="Confirm Password"
        value={confirmPassword}
        handleOnChange={newValue => {
          setConfirmPassword(newValue);
        }}
        rightIcon={isShowConfPassword ? images.crossEye : images.eyeOpen}
        rightIconAction={() => {
          setIsShowConfPassword(preVale => !preVale);
        }}
        errorHandler={[
          {
            errorText: 'Password does not match',
            validator: text => {
              return text === newPassword;
            },
          },
          {
            errorText: 'Password must be 8 characters long',
            validator: validatePassword,
          },
        ]}
      />

      {/* input start end  */}
      <View style={styles.passwordIntr}>
        <Text>
          Passwords must be a minimum of 8 characters. Include one letter, and
          one number or symbol.
        </Text>
      </View>

      <BottomButton>
        <Button
          bgcolor={isValid ? colors.PRIMARY : colors.LIGHT_GRAY}
          text="Save"
          textColor={isValid ? colors.BLACK : colors.GRAY}
          onPress={handlePasswordUpdate}
          btnStyles={styles.saveButton}
        />
      </BottomButton>
    </ParentView>
  );
};

export default ChangePassword;
