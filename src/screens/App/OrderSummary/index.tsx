import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';

// Local imports
import useStyles from './style';

import {ParentView} from '../../../components/common/ParentView/ParentView';
import {FadeInDown} from 'react-native-reanimated';
import icons from '../../../assets/icons';
import images from '../../../assets/images';
import BottomButton from '../../../components/common/BottomButton/BottomButton';
import Button from '../../../components/Button/Button';
import Header from '../../../components/AppHeader';
import {KeyboardAvoidingView} from 'react-native-keyboard-controller';
import MyKeyboardAvoider from '../../../components/MyKeyboardAvoider';
import {useGenericModal} from '../../../hooks/useGenericModal/useGenericModal';
import {useNavigation} from '@react-navigation/native';
import {AppStackParamsList} from '../../../navigators/navigator.seeker';

const OrderSummary = () => {
  const [address, setAddress] = useState('123 Main St, City, State');
  const [editable, setEditable] = useState(false);
  const {styles, colors, sizes} = useStyles();
  const navigation: AppStackParamsList = useNavigation();

  // const [modal, setModal] = useState<boolean>();
  const work = [
    {
      id: 1,
      job: 'Wall Repair',
      work: 'Leaks in the Bathroom',
      time: 'Jan 21,2022',
      Price: 'RS 250/hr',
      image: images.handyman,
      handyMan: 'Thomas Lukas',
      address: '123 Main St, City, State',
    },
  ];
  const orderConfirmedModalProps = {
    image: images.CHECK_BADGE,
    title: 'Booking Confirmed',
    firstDes:
      'Your booking  has been confirmed check the "Booking Section" for the service provider response',
    buttonTitle: 'Done',
    firstDesStyle: styles.modalFirstDescStyle,
    handleClose: () => {
      hideModal();
      navigation.navigate('Home');
    },
  };

  const {GenericModal, showModal, hideModal} = useGenericModal({
    modalProp: orderConfirmedModalProps,
  });

  return (
    <ParentView
      style={styles.container}
      enterAnimation={FadeInDown.duration(500)}>
      {/* ==== HEADER ==== */}
      <Header leftIconAction={() => navigation.goBack()} />
      {/* ==== HEADER ==== */}
      <MyKeyboardAvoider avoidBottomButton>
        <Text style={styles.summaryText}>Booking Summary</Text>
        <View style={styles.orderSummaryContainer}>
          {/* ==== ORDER SUMMARY ==== */}

          <FlatList
            data={work}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{
              marginHorizontal: sizes.WIDTH * 0.01,
            }}
            renderItem={({item}) => (
              <View style={styles.orderItemContainer}>
                <Image source={item.image} style={styles.orderItemImage} />
                <View style={styles.orderItemDetails}>
                  <Text style={styles.orderItemJob}>Job : {item.job}</Text>
                  <Text style={styles.orderItemWork}>
                    Job Details : {item.work}
                  </Text>
                  <Text style={styles.orderItemTime}>
                    Booking Date : {item.time}
                  </Text>
                  <Text style={styles.orderItemHandyman}>
                    Worker Name : {item.handyMan}
                  </Text>
                  <Text style={styles.orderItemPrice}>
                    Per Hour Rate : {item.Price}
                  </Text>
                </View>
              </View>
            )}
          />
          {/* ==== ORDER SUMMARY ==== */}

          {/* ==== ADDRESS ==== */}
          <View style={styles.addressContainer}>
            <Text style={styles.sectionTitle}>Address : </Text>
            {editable ? (
              <TextInput
                value={address}
                style={styles.addressText}
                editable={editable}
                onChangeText={text => setAddress(text)}
                onBlur={() => setEditable(false)}
              />
            ) : (
              <Text style={styles.addressText} numberOfLines={1}>
                {address}
              </Text>
            )}
            <TouchableOpacity
              onPress={() => setEditable(true)}
              onBlur={() => setEditable(false)}>
              <Image source={icons.EDIT} style={styles.editIcon} />
            </TouchableOpacity>
          </View>
          {/* ==== ADDRESS ==== */}
        </View>
      </MyKeyboardAvoider>
      <BottomButton>
        <Button
          onPress={showModal}
          text="Confirm Booking"
          bgcolor="#008000"
          btnStyles={{
            marginVertical: sizes.HEIGHT * 0.02,
          }}
        />
      </BottomButton>
      <GenericModal />
    </ParentView>
  );
};

export default OrderSummary;
