import React, {FC, useState} from 'react';
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

import {screen} from '../../../utils/constants';
import BottomButton from '../../../components/common/BottomButton/BottomButton';
import {validatePassword} from '../../../utils/validator';
import {getGlobalStyles} from '../../../constants/GlobalStyle';

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
      <Header leftIconAction={() => navigation.goBack()} />
      <GenericModal />
      {/* text component  */}
      <View style={styles.textCont}>
        <Text style={styles.creatNewTxt}>Create New Password</Text>
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

      <BottomButton>
        <Button
          bgcolor={isValid ? colors.MAIN_GREEN : colors.LIGHT_GRAY}
          text="Save"
          textColor={isValid ? colors.BLACK : colors.GRAY}
          onPress={() => showModal()}
          btnStyles={styles.saveButton}
        />
      </BottomButton>
    </ParentView>
  );
};

export default ChangePassword;
