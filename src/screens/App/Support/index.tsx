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

export default function Support({navigation}) {
  const {styles, sizes, colors} = useStyles();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [description, setDescription] = useState<string>('');

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
            />
            <TextInputCustom
              leftIcon={images.PHONE_CODE}
              leftIconAction={() => {}}
              isShowRightIcon={false}
              isPassword={false}
              placeHolderTxt="(212)-456-7890"
              value={email}
              inputMode="tel"
              handleOnChange={newValue => {
                setPhone(newValue);
              }}
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
          onPress={showModal}
        />
      </BottomButton>
      <GenericModal />
    </ParentView>
  );
}
