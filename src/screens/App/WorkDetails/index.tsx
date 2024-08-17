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
import {useSelector} from 'react-redux';
import {useGenericModal} from '../../../hooks/useGenericModal/useGenericModal';
import CustomModal from '../../../components/CustomModal';
import AllProviderCards from '../../../components/AllProvidersCard';

type WorkDetailsProps = NativeStackScreenProps<AppStackParamsList>;

const WorkDetails: React.FC<WorkDetailsProps> = ({navigation, route}) => {
  const {styles, colors} = useStyles();
  const [date, setDate] = useState<string | null>(null);
  const [modal, setModal] = useState(false);

  //store
  const userId = useSelector(state => state.user.user.id);
  // console.log('Selector from WorkDetails Screen: ', userId);

  const handleDateChange = (date: string) => {
    setDate(date);
  };

  const {title} = route.params;

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
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}> {title}</Text>

        {/* ============ >>>> Text Area for Problem Description <<< ================== */}
        <View style={styles.textAreaContainer}>
          <CustomTextArea
            maxLength={250}
            placeholder="Your Problem Description"
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
          <Text style={{textAlign: 'left', fontSize: 15, marginVertical: 12}}>
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
        <View style={styles.attachPhotosContainer}>
          <Text style={styles.attachPhotosTitle}>Attach Photos</Text>
          <Image source={icons.ADD} />
        </View>

        <TouchableOpacity
          onPress={() => setModal(true)}
          style={{
            alignSelf: 'flex-end',
            marginHorizontal: 20,
          }}>
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
        </TouchableOpacity>
      </SafeAreaView>
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
