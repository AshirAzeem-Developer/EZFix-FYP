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

type PersonalInfoSingUpScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'SingUpPersonalInfo'
>;

const PersonalInfoSingUp: FC<PersonalInfoSingUpScreenProps> = ({
  navigation,
}) => {
  const {styles, sizes, colors} = useStyles();

  const [userName, setUserName] = useState<string>('');
  const [dob, setDob] = useState<string | null>(null);
  const [isShowIcon, setIsShowIcon] = useState<boolean>(false);

  // navigation
  const {navigate} = navigation;

  let isValid = userName.trim().length > 0 ? true : false;
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
        value={userName}
        handleOnChange={newValue => {
          setUserName(newValue);
        }}
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
          bgcolor={isValid ? colors.MAIN_GREEN : colors.LIGHT_GRAY200}
          text="Continue"
          textColor={isValid ? colors.BLACK : colors.LIGHT_GRAY}
          onPress={() => navigate('CreateNewPassword')}
          btnStyles={styles.snedCodeButton}
        />
      </BottomButton>
    </ParentView>
  );
};

export default PersonalInfoSingUp;
