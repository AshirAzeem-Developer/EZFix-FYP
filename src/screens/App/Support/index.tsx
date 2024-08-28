import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import useStyles from './style';

import {ParentView} from '../../../components/common/ParentView/ParentView';

import images from '../../../assets/images';
import stylesheet from './style';

import Header from '../../../components/AppHeader';

import CustomTextArea from '../../../components/CustomTextArea';
import Button from '../../../components/Button/Button';
import TextInputCustom from '../../../components/TextInputCustom';
import BottomButton from '../../../components/common/BottomButton/BottomButton';
import MyKeyboardAvoider from '../../../components/MyKeyboardAvoider';
import {useGenericModal} from '../../../hooks/useGenericModal/useGenericModal';
import {useSelector} from 'react-redux';
import {postSupport} from '../../../utils/ApiCall';
import {showError, showSuccess} from '../../../utils/helperFunction';
import {validateEmail, validatePhoneNo} from '../../../utils/validator';

export default function Support({navigation}) {
  const {styles, sizes, colors} = useStyles();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const userToken = useSelector((state: any) => state.user?.user?.jwt);
  console.log('UserToken == >', userToken);

  const handleSupport = () => {
    // Validation checks for missing fields
    if (!name || !email || !phone || !description) {
      showError('Missing Fields', 'Please fill all the fields.');
      return;
    }

    const phoneNumber = parseInt(phone.replace(/[^0-9]/g, ''), 10); // Convert phone string to number

    if (isNaN(phoneNumber)) {
      showError('Invalid Phone Number', 'Please enter a valid phone number.');
      return;
    }

    // If all validations pass, proceed with the API call
    postSupport(
      {
        data: {
          name: name,
          email: email,
          phoneNumber: phoneNumber, // Use the converted number here
          Description: description,
        },
      },
      userToken,
    )
      .then(res => {
        showModal();
      })
      .catch(err => {
        showError('Error', 'Something went wrong. Please try again.');
        console.log('Error in support submission', err.message);
      });
  };
  const modalProps = {
    title: 'Request Submitted',
    firstDes:
      'Your support request has been submitted successfully. We will get back to you as soon as possible.',
    buttonTitle: 'Got it',
    firstDesStyle: styles.firstDesStyle,

    image: images.REQUEST_SUBMITTED,
    handleClose: () => {
      hideModal();
      navigation.goBack();
    },
  };

  const {GenericModal, showModal, hideModal} = useGenericModal({
    modalProp: modalProps,
  });
  return (
    <ParentView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header leftIconAction={() => navigation.goBack()} />
        </View>
        <Text style={styles.supportText}>Support</Text>
        <MyKeyboardAvoider avoidBottomButton>
          <View style={styles.container}>
            <TextInputCustom
              leftIcon={images.person}
              leftIconAction={() => {}}
              isShowRightIcon={false}
              isPassword={false}
              placeHolderTxt={'Full Name'}
              inputMode="text"
              value={name}
              handleOnChange={newValue => {
                setName(newValue);
              }}
            />
            <TextInputCustom
              leftIcon={images.MAIL}
              leftIconAction={() => {}}
              isShowRightIcon={false}
              isPassword={false}
              placeHolderTxt={'Email'}
              inputMode="email"
              value={email}
              handleOnChange={newValue => {
                setEmail(newValue);
              }}
              errorHandler={[
                {
                  errorText: 'Invalid Email Address',
                  validator: validateEmail,
                },
              ]}
            />
            <TextInputCustom
              leftIcon={images.PHONE_CODE}
              leftIconAction={() => {}}
              isShowRightIcon={false}
              isPassword={false}
              placeHolderTxt="(212)-456-7890"
              value={phone}
              inputMode="tel"
              handleOnChange={newValue => {
                setPhone(newValue);
              }}
              errorHandler={[
                {
                  errorText: 'Invalid Phone Number',
                  validator: validatePhoneNo,
                },
              ]}
            />

            <View style={styles.descriptionContainer}>
              <CustomTextArea
                placeholder={'Description'}
                maxLength={250}
                label=""
                value={description}
                setValue={setDescription}
              />
            </View>
          </View>
        </MyKeyboardAvoider>
      </View>
      <BottomButton>
        <Button
          bgcolor="#008000"
          text={'Submit'}
          btnStyles={styles.buttonStyles}
          textColor="#ffffff"
          btnTextStyles={styles.btnTextStyles}
          onPress={handleSupport}
        />
      </BottomButton>
      <GenericModal />
    </ParentView>
  );
}
