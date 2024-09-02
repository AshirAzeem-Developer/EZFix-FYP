import {
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import icons from '../../../assets/icons';
import useStyles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamsList} from '../../../navigators/navigator.seeker';
import {ParentView} from '../../../components/common/ParentView/ParentView';
import Header from '../../../components/AppHeader';
import CustomTextArea from '../../../components/CustomTextArea';
import DatePickerInput from '../../../components/DatePickerInput';
import images from '../../../assets/images';
import {useDispatch, useSelector} from 'react-redux';
import {useGenericModal} from '../../../hooks/useGenericModal/useGenericModal';
import CustomModal from '../../../components/CustomModal';
import AllProviderCards from '../../../components/AllProvidersCard';
import MyKeyboardAvoider from '../../../components/MyKeyboardAvoider';
import {
  setJobBookingDate,
  setJobDescription,
  setSkill,
} from '../../../store/reducer/job-order';

type WorkDetailsProps = NativeStackScreenProps<AppStackParamsList>;

const WorkDetails: React.FC<WorkDetailsProps> = ({navigation, route}) => {
  const {styles, colors} = useStyles();
  const [modal, setModal] = useState(false);

  //============ >> store << =============
  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.user.user.id);
  const jobOrdeState = useSelector((state: any) => state.JobOrder);
  // console.log('Selector from WorkDetails Screen: ', userId);

  const {title} = route.params as {title: string};

  const AllProvidersView = () => {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <Header leftIconAction={() => setModal(!modal)} />
        <AllProviderCards />
      </View>
    );
  };

  const ServiceSeekerView = () => {
    const [date, setDate] = useState<string | null>(null);
    const [description, setDescription] = useState<string>('');
    const [jobPhotos, setJobPhotos] = useState<string[]>([]);
    const showData = () => {
      dispatch(setJobDescription(description));
      dispatch(setJobBookingDate(date));
      console.log('Job Order State: ', jobOrdeState);
      console.log('Job Description: ', description);
      console.log('Date: ', date);
      setModal(true);
    };
    return (
      <MyKeyboardAvoider>
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}> {title}</Text>

          {/* ============ >>>> Text Area for Problem Description <<< ================== */}
          <View style={styles.textAreaContainer}>
            <CustomTextArea
              maxLength={250}
              placeholder="Your Problem Description"
              value={description}
              setValue={setDescription}
            />
          </View>
          {/* ================= >>> Date Selector for Booking <<< ================= */}
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingHorizontal: 20,
              marginVertical: 20,
            }}>
            <Text
              style={{
                textAlign: 'left',
                fontSize: 15,
                marginVertical: 12,
                color: colors.BLACK,
              }}>
              Choose Date of Booking
            </Text>
            <DatePickerInput
              leftIcon={images.calendar}
              placeHolderTxt="Select Date"
              placeHolderDateMode="DateMonthYear"
              value={date}
              handleOnChange={val => setDate(val)}
            />
          </View>
          {/* ================= >>> Attach Photos <<< ================= */}
          {/* <View style={styles.attachPhotosContainer}>
            <Text style={styles.attachPhotosTitle}>Attach Photos</Text>
            <TouchableOpacity>
              <Image source={icons.ADD} />
            </TouchableOpacity>
          </View> */}
          {/* ================= >>> Attach Photos <<< ================= */}

          <TouchableOpacity
            onPress={
              // () => setModal(true)
              showData
            }
            style={{
              alignSelf: 'flex-end',
              marginHorizontal: 20,
            }}>
            {CustomTextArea.length > 0 && date && (
              <Text
                style={{
                  fontSize: 18,
                  fontStyle: 'italic',
                  textDecorationStyle: 'solid',
                  textDecorationLine: 'underline',
                  color: colors.PRIMARY,
                }}>
                See All Providers
              </Text>
            )}
          </TouchableOpacity>
        </SafeAreaView>
      </MyKeyboardAvoider>
    );
  };
  const ServiceProviderView = () => {
    return (
      <SafeAreaView style={styles.container}>
        {/* ============ >>>> Text Area for Problem Description <<< ================== */}
        <View style={styles.textAreaContainer}>
          <CustomTextArea
            editable={false}
            maxLength={250}
            placeholder="Problem Description"
          />
        </View>
        {/* ================= >>> Date  for Booking <<< ================= */}
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingHorizontal: 20,
            marginVertical: 20,
          }}>
          <Text style={{textAlign: 'left', fontSize: 15, marginVertical: 12}}>
            Date of Booking
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={images.calendar} />
            <Text style={{fontSize: 16, color: colors.BLACK, marginLeft: 10}}>
              12th June 2021
            </Text>
          </View>
        </View>
        {/* ================= >>> Attached Photos <<< ================= */}
        <View style={styles.attachPhotosContainer}>
          <Text style={styles.attachPhotosTitle}>Attached Photos</Text>

          <FlatList
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              elevation: 2,
            }}
            data={[1, 2, 3, 4, 5, 6]}
            scrollEnabled={true}
            alwaysBounceVertical={true}
            keyExtractor={item => item.toString()}
            numColumns={3}
            renderItem={({item}) => (
              <Image
                source={images.dummyWorkImage}
                style={{
                  width: 110,
                  height: 110,
                  marginHorizontal: 6,
                  padding: 10,
                  marginVertical: 10,
                }}
              />
            )}
          />
        </View>
      </SafeAreaView>
    );
  };

  return (
    <ParentView
      style={{
        backgroundColor: colors.WHITE,
      }}>
      <Header leftIconAction={() => navigation.goBack()} title={title} />
      {userId === 0 ? <ServiceProviderView /> : <ServiceSeekerView />}

      <CustomModal modalView={<AllProvidersView />} showModal={modal} />
    </ParentView>
  );
};
export default WorkDetails;
