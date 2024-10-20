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
import Header from '../../../components/Header';
import {KeyboardAvoidingView} from 'react-native-keyboard-controller';
import MyKeyboardAvoider from '../../../components/MyKeyboardAvoider';
import {useGenericModal} from '../../../hooks/useGenericModal/useGenericModal';
import {useNavigation} from '@react-navigation/native';
import {AppStackParamsList} from '../../../navigators/navigator.seeker';

import {useSelector} from 'react-redux';
import {postJobOrder} from '../../../utils/ApiCall';
import {showError, showSuccess} from '../../../utils/helperFunction';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<AppStackParamsList, 'OrderSummary'>;

const OrderSummary: React.FC<Props> = ({route}) => {
  const [address, setAddress] = useState('123 Main St, City, State');
  const [editable, setEditable] = useState(false);
  const {styles, colors, sizes} = useStyles();
  const navigation: AppStackParamsList = useNavigation();
  const JobOrder = useSelector((state: any) => state.JobOrder);
  const providerData = route.params?.data || null;

  const userToken = useSelector((state: any) => state.user?.user?.jwt);

  console.log('Provider Skills is ====== >', providerData?.skill);
  // console.log('PRoviderData: ', JSON.stringify(providerData, null, 2));
  // console.log('JobOrder: ', JobOrder);

  const handleSubmit = () => {
    postJobOrder(
      {
        data: {
          description: JobOrder.jobDescription,
          date: JobOrder.jobBookingData,
          fixedPrice: providerData?.skill?.split('\n').pop() || 600,
        },
      },
      userToken,
    )
      .then(res => {
        showSuccess(
          'Booking Confirmed',
          'Your booking has been confirmed check the "Booking Section" for the service provider response',
        );
        hideModal();
        navigation.navigate('Home');
        console.log('Response: ', res);
      })
      .catch(err => {
        showError('Error', 'Something went wrong');
        console.log('Error: ', err);
      });
  };

  const orderConfirmedModalProps = {
    image: images.CHECK_BADGE,
    title: 'Booking Confirmed',
    firstDes:
      'Your booking  has been confirmed check the "Booking Section" for the service provider response',
    buttonTitle: 'Done',
    firstDesStyle: styles.modalFirstDescStyle,
    handleClose: handleSubmit,
  };

  const {GenericModal, showModal, hideModal} = useGenericModal({
    modalProp: orderConfirmedModalProps,
  });

  return (
    <ParentView
      style={styles.container}
      enterAnimation={FadeInDown.duration(500)}>
      {/* ==== HEADER ==== */}
      <Header
        heading="Booking Summary"
        isLeftShow={true}
        leftIconAction={() => navigation.goBack()}
      />
      {/* ==== HEADER ==== */}
      <MyKeyboardAvoider avoidBottomButton>
        <View style={styles.orderSummaryContainer}>
          {/* ==== ORDER SUMMARY ==== */}

          {/* <FlatList
            data={JobOrder}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{
              marginHorizontal: sizes.WIDTH * 0.01,
            }}
            renderItem={({item}) => (
              
            )}
          /> */}

          <View style={styles.orderItemContainer}>
            <Image source={images.Order} style={styles.orderItemImage} />
            <View style={styles.orderItemDetails}>
              <Text style={styles.orderItemJob}>Job : {JobOrder.skill}</Text>
              <Text style={styles.orderItemWork}>
                Job Details : {JobOrder.jobDescription}
              </Text>
              <Text style={styles.orderItemTime}>
                Booking Date : {JobOrder.jobBookingData}
              </Text>
              <Text style={styles.orderItemHandyman}>
                Worker Name : {providerData?.name}
              </Text>
              <Text style={styles.orderItemPrice}>
                Per Hour Rate : {providerData?.skill?.split('\n').pop()}
              </Text>
            </View>
          </View>

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
            borderRadius: sizes.WIDTH * 0.02,
          }}
        />
      </BottomButton>
      <GenericModal />
    </ParentView>
  );
};

export default OrderSummary;
