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
import ProgressBar from '../../../components/ProgressBar';

// local navigation
import {AuthStackParamList} from '../../../navigators/authStack';
import BottomButton from '../../../components/common/BottomButton/BottomButton';
import {validatePassword} from '../../../utils/validator';

type PCreateNewPasswordScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'CreateNewPassword'
>;

const CreateNewPassword: FC<PCreateNewPasswordScreenProps> = ({navigation}) => {
  const {styles, sizes, colors} = useStyles();

  // navigation
  const {navigate} = navigation;

  // state
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isShowNewPassword, setIsNewShowPassword] = useState(true);
  const [isShowConfPassword, setIsShowConfPassword] = useState(true);

  const progress: number = (20 / 50) * 100;

  let isValid =
    newPassword.trim().length > 0 && confirmPassword.trim().length > 0
      ? true
      : false;
  return (
    <ParentView
      style={styles.container}
      enterAnimation={FadeInDown.duration(500)}>
      <Header leftIconAction={() => navigation.goBack()} />

      {/* text component  */}
      <View style={styles.textCont}>
        <Text style={styles.creatNewTxt}>Create Password</Text>
      </View>
      {/* text component  end  */}

      {/* input start */}
      <TextInputCustom
        leftIcon={images.lock}
        leftIconAction={() => {}}
        isShowRightIcon
        isPassword={isShowNewPassword}
        placeHolderTxt="Password"
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

      {true && (
        <View style={styles.passwordStrengCont}>
          <Text style={styles.passwordStrengHeadTxt}>Password Strength</Text>
          <ProgressBar
            progress={progress}
            containerOverrideStyle={styles.containerOverrideStyle}
            progressBarOverrideStyle={styles.progressBarOverrideStyle}
          />
          <Text style={styles.passwordStrengDesTxt}>
            Passwords must be a minimum of 8 characters. Include one letter, and
            one number or symbol.
          </Text>
        </View>
      )}

      <BottomButton>
        <Button
          bgcolor={isValid ? colors.MAIN_GREEN : colors.LIGHT_GRAY200}
          text="Continue"
          textColor={isValid ? colors.BLACK : colors.LIGHT_GRAY}
          onPress={() => navigate('SignUpRoleSelect')}
          btnStyles={styles.saveButton}
        />
      </BottomButton>
    </ParentView>
  );
};

export default CreateNewPassword;
