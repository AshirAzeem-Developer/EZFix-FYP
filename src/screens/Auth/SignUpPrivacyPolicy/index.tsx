import React, {FC, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
// third party

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FadeInDown} from 'react-native-reanimated';
// styles
import useStyles from './style';

// local component
import {ParentView} from '../../../components/common/ParentView/ParentView';
import Header from '../../../components/AppHeader';

import images from '../../../assets/images';

// local navigation
import {AuthStackParamList} from '../../../navigators/authStack';
// enums

import CustomAccordionView from '../../../components/CustomAccordionView';
import {useGenericModal} from '../../../hooks/useGenericModal/useGenericModal';

import BottomButton from '../../../components/common/BottomButton/BottomButton';
import {getGlobalStyles} from '../../../constants/GlobalStyle';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import icons from '../../../assets/icons';
import {useDispatch, useSelector} from 'react-redux';
import {setIsAcceptedTermsAndConditions} from '../../../store/reducer/user';
import api from '../../../utils/api';
import apiEndPoints from '../../../constants/apiEndPoints';

type SignUpPrivacyPolicyScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'SignUpPrivacyPolicy'
>;

interface Section {
  title: string;
  content: string;
}

const SECTIONS: Section[] = [
  {
    title: 'Introduction',
    content:
      'The "Policy Terms and Conditions" section of your car insurance document outlines the specific rules, provisions, and contractual agreements between you (the policyholder) and the insurance company. It is essential to read and understand this section thoroughly, as it governs the terms of your insurance coverage. Below is a general outline of the content you might find in the "Policy Terms and Conditions" of your car insurance:',
  },
  {
    title: 'Information Collected',
    content:
      'The "Policy Terms and Conditions" section of your car insurance document outlines the specific rules, provisions, and contractual agreements between you (the policyholder) and the insurance company. It is essential to read and understand this section thoroughly, as it governs the terms of your insurance coverage. Below is a general outline of the content you might find in the "Policy Terms and Conditions" of your car insurance:',
  },
  {
    title: 'Use of Information',
    content:
      'The "Policy Terms and Conditions" section of your car insurance document outlines the specific rules, provisions, and contractual agreements between you (the policyholder) and the insurance company. It is essential to read and understand this section thoroughly, as it governs the terms of your insurance coverage. Below is a general outline of the content you might find in the "Policy Terms and Conditions" of your car insurance:',
  },
  {
    title: 'Data Security',
    content:
      'The "Policy Terms and Conditions" section of your car insurance document outlines the specific rules, provisions, and contractual agreements between you (the policyholder) and the insurance company. It is essential to read and understand this section thoroughly, as it governs the terms of your insurance coverage. Below is a general outline of the content you might find in the "Policy Terms and Conditions" of your car insurance:',
  },
  {
    title: 'Data Sharing',
    content:
      'The "Policy Terms and Conditions" section of your car insurance document outlines the specific rules, provisions, and contractual agreements between you (the policyholder) and the insurance company. It is essential to read and understand this section thoroughly, as it governs the terms of your insurance coverage. Below is a general outline of the content you might find in the "Policy Terms and Conditions" of your car insurance:',
  },
  {
    title: 'User Rights',
    content:
      'The "Policy Terms and Conditions" section of your car insurance document outlines the specific rules, provisions, and contractual agreements between you (the policyholder) and the insurance company. It is essential to read and understand this section thoroughly, as it governs the terms of your insurance coverage. Below is a general outline of the content you might find in the "Policy Terms and Conditions" of your car insurance:',
  },
  {
    title: 'Data Retention',
    content:
      'The "Policy Terms and Conditions" section of your car insurance document outlines the specific rules, provisions, and contractual agreements between you (the policyholder) and the insurance company. It is essential to read and understand this section thoroughly, as it governs the terms of your insurance coverage. Below is a general outline of the content you might find in the "Policy Terms and Conditions" of your car insurance:',
  },
  {
    title: 'Cookies and Tracking Technologies',
    content:
      'The "Policy Terms and Conditions" section of your car insurance document outlines the specific rules, provisions, and contractual agreements between you (the policyholder) and the insurance company. It is essential to read and understand this section thoroughly, as it governs the terms of your insurance coverage. Below is a general outline of the content you might find in the "Policy Terms and Conditions" of your car insurance:',
  },
];

const SignUpPrivacyPolicy: FC<SignUpPrivacyPolicyScreenProps> = ({
  navigation,
}) => {
  const {styles, sizes, colors} = useStyles();
  const userState = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  console.log('User State:', userState);

  // navigation
  const {navigate} = navigation;

  // state
  const [isPrivacyPolAccepted, setIsPrivacyPolAccepted] =
    useState<boolean>(false);

  const GlobalStyle = getGlobalStyles(colors, sizes);

  const addUser = async () => {
    try {
      const res = await api.post(apiEndPoints.REGISTER, {
        username: userState.email,
        name: userState.name,
        email: userState.email,
        password: userState.password,
        roleType: userState.roleType,
        phoneNumber: userState.phoneNumber,
        cnic: userState.cnic,
        dob: userState.dob,
        isAcceptedTermsAndCondition: userState.isAcceptedTermsAndConditions,
      });

      if (res.status === 200) {
        console.log('User Added Successfully');
        console.log(res.data);
        navigate('SignIn');
      } else {
        console.log('Unexpected response:', res);
        // You can show an error modal or toast here
      }
    } catch (error: any) {
      console.error('Error:', error.response.data);
      console.error(
        'Validation Errors:',
        error.response.data?.error?.details?.errors,
      );
    } finally {
      hideModal();
    }
  };

  const handleModalClose = () => {
    try {
      addUser();
      hideModal();
      navigate('SignIn');
      console.log('UserName', userState.username);
      console.log('Name', userState.name);
      console.log('Email', userState.email);
      console.log('Password', userState.password);
      console.log('Role', userState.roleType);
      console.log('Phone', userState.phoneNumber);
      console.log('CNIC', userState.cnicNumber);
      console.log('DOB', userState.dob);
    } catch (error) {
      console.log('Error', error);
    }
  };

  // modal prop
  const acceptPrivacyModalProps = {
    image: images.CHECK_BADGE,
    title: 'Thank you!',
    firstDes:
      'We have initiated the verification process.Once confirmed, we update your account.',
    firstDesStyle: {
      fontFamily: GlobalStyle.TEXT_STYLE.fontFamily,
      color: colors.BLACK,
      textAlign: 'center' as 'center',
      fontSize: sizes.WIDTH * 0.038,
    },
    buttonTitle: 'Got it',
    handleClose: addUser,
  };

  // Use the custom hook
  const {GenericModal, hideModal, showModal} = useGenericModal({
    modalProp: acceptPrivacyModalProps,
  });

  const handleAcceptedTermsAndCondition = () => {
    dispatch(setIsAcceptedTermsAndConditions(true));
    setIsPrivacyPolAccepted(true);
    showModal();
  };

  return (
    <ParentView
      style={styles.container}
      enterAnimation={FadeInDown.duration(500)}>
      <GenericModal />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Header leftIconAction={() => navigation.goBack()} />

        {/* text component  */}
        <View style={styles.textCont}>
          <Text style={styles.creatNewTxt}>Privacy Policy</Text>
        </View>
        {/* text component  end  */}

        <View style={styles.PolicyTermCont}>
          <Text style={styles.PolicyTermHeadTxt}>
            Policy Terms and Conditions
          </Text>
          <Text style={styles.PolicyTermPeraTxt}>
            The "Policy Terms and Conditions" section of EZFIX App document
            outlines the specific rules, provisions, and contractual agreements
            between you (the policyholder) and the iadmin It is essential to
            read and understand this section thoroughly, as it governs the terms
            of your provided and seeking services. Below is a general outline of
            the content you might find in the "Policy Terms and Conditions" of
            EZFIX app.
          </Text>
        </View>
        {/* terms and conditions */}
        <CustomAccordionView sections={SECTIONS} />
        {/* terms and conditions end */}
      </ScrollView>
      <BottomButton
        additionalButtonContStyle={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={[
            styles.circleCont,
            {
              backgroundColor: isPrivacyPolAccepted
                ? colors.PRIMARY
                : colors.WHITE,
            },
          ]}
          onPress={handleAcceptedTermsAndCondition}>
          {isPrivacyPolAccepted && <Image source={icons.CHECK_BLACK} />}
        </TouchableOpacity>
        <Text style={styles.IAcceptTxt}>
          I accept the Terms & Condition and Privacy Policy
        </Text>
      </BottomButton>
    </ParentView>
  );
};

export default SignUpPrivacyPolicy;
