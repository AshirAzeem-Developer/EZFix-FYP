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
import DatePickerInput from '../../../components/DatePickerInput';
import Button from '../../../components/Button/Button';

import images from '../../../assets/images';

// local navigation
import {AuthStackParamList} from '../../../navigators/AuthStack';
import BottomButton from '../../../components/common/BottomButton/BottomButton';
import {useDispatch, useSelector} from 'react-redux';
import {
  setCnicNumber,
  setDateOfBirth,
  setName,
  setuserName,
  setEmailAddress,
} from '../../../store/reducer/user';
import {validateEmail} from '../../../utils/validator';

type PersonalInfoSingUpScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'SingUpPersonalInfo'
>;

const PersonalInfoSingUp: FC<PersonalInfoSingUpScreenProps> = ({
  navigation,
}) => {
  const {styles, sizes, colors} = useStyles();

  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.user);
  // console.log('User Data:', userData);

  const [userName, setUserName] = useState<string>('');
  const [cnic, setCnic] = useState<string>('');
  const [dob, setDob] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');
  const [isShowIcon, setIsShowIcon] = useState<boolean>(false);

  // navigation
  const {navigate} = navigation;

  let isValid = userName.trim().length > 0 ? true : false;

  const setPersonalInfo = () => {
    dispatch(setName(userName));
    dispatch(setuserName(userName));
    dispatch(setEmailAddress(email));
    dispatch(setDateOfBirth(dob));
    dispatch(setCnicNumber(cnic));
    console.log('State:', userData);
    navigate('CreateNewPassword');
    // console.log('Personal Info:', userName, typeof cnic, dob, email);
  };

  return (
    <ParentView
      style={styles.container}
      enterAnimation={FadeInDown.duration(500)}>
      <Header leftIconAction={() => navigation.goBack()} />

      {/* text component  */}
      <View style={styles.textCont}>
        <Text style={styles.mobileNoTxt}>Personal info</Text>
      </View>
      {/* text component  end  */}

      {/* input start */}
      <TextInputCustom
        leftIcon={images.person}
        leftIconAction={() => {}}
        isShowRightIcon={false}
        isPassword={false}
        placeHolderTxt="Full name"
        value={userName}
        handleOnChange={newValue => {
          setUserName(newValue);
        }}
      />
      <TextInputCustom
        inputMode="numeric"
        leftIcon={images.cnic}
        leftIconAction={() => {}}
        isShowRightIcon={false}
        isPassword={false}
        placeHolderTxt="Enter CNIC Number"
        value={cnic}
        handleOnChange={newValue => {
          setCnic(newValue);
        }}
      />
      <TextInputCustom
        leftIcon={images.MAIL}
        leftIconAction={() => {}}
        // isShowRightIcon={isShowCrossicon}
        isPassword={false}
        placeHolderTxt={'Email'}
        value={email}
        handleOnChange={newValue => {
          setEmail(newValue);
          // setIsShowCrossicon(newValue.length > 0 ? true : false);
        }}
        rightContStyle={styles.inputRightCont}
        rightIcon={images.cross}
        // rightIconAction={() => {
        //   setEmail('');
        //   // setIsShowCrossicon(false);
        // }}
        errorHandler={[
          {
            errorText: 'Invalid Email Address',
            validator: validateEmail,
          },
        ]}
      />

      <DatePickerInput
        leftIcon={images.calendar}
        placeHolderTxt="Date of birth"
        value={dob}
        placeHolderDateMode="DateMonthYear"
        handleOnChange={newValue => {
          setDob(newValue);
        }}
        customContainerStyle={{marginTop: sizes.HEIGHT * 0.02}}
      />
      {/* input start end  */}

      <BottomButton>
        <Button
          bgcolor={isValid ? colors.PRIMARY : colors.LIGHT_GRAY200}
          text="Continue"
          textColor={isValid ? colors.BLACK : colors.LIGHT_GRAY}
          onPress={setPersonalInfo}
          btnStyles={styles.snedCodeButton}
        />
      </BottomButton>
    </ParentView>
  );
};

export default PersonalInfoSingUp;
