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
import MobileNoTextInput from '../../../components/MobileNoTextInput';
import Button from '../../../components/Button/Button';

// local navigation
import {AuthStackParamList} from '../../../navigators/authStack';
import BottomButton from '../../../components/common/BottomButton/BottomButton';
import {validatePhoneNo} from '../../../utils/validator';

type SignUpMobileNoScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'SignUpMobileNo'
>;

const SignUpMobileNo: FC<SignUpMobileNoScreenProps> = ({navigation}) => {
  const {styles, sizes, colors} = useStyles();
  // state
  const [mobileNo, setMobileNo] = useState('');
  const [isShowIcon, setIsShowIcon] = useState(false);

  // navigation
  const {navigate} = navigation;

  let isValid = mobileNo.trim().length > 0 ? true : false;

  return (
    <ParentView
      style={styles.container}
      enterAnimation={FadeInDown.duration(500)}>
      <Header leftIconAction={() => navigation.goBack()} />

      {/* text component  */}
      <View style={styles.textCont}>
        <Text style={styles.mobileNoTxt}>Mobile No</Text>
      </View>
      {/* text component  end  */}

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

      {/* Text start end  */}

      <Text style={styles.wellCheckTxt}>
        We'll check, if you have an account
      </Text>
      {/* Text start end  */}

      <BottomButton>
        <Button
          bgcolor={isValid ? colors.PRIMARY : colors.LIGHT_GRAY200}
          text="Continue"
          textColor={isValid ? colors.BLACK : colors.LIGHT_GRAY}
          onPress={() => navigate('SingUpPersonalInfo')}
          btnStyles={styles.snedCodeButton}
        />
      </BottomButton>
    </ParentView>
  );
};

export default SignUpMobileNo;
