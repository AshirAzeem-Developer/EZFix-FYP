import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import icons from '../../../assets/icons';
import images from '../../../assets/images';
import useStyles from './style';
import {AppStackParamsList} from '../../../navigators/navigator.seeker';
import {ParentView} from '../../../components/common/ParentView/ParentView';
import Header from '../../../components/Header';
import CustomTextArea from '../../../components/CustomTextArea';
import DatePickerInput from '../../../components/DatePickerInput';
import MyKeyboardAvoider from '../../../components/MyKeyboardAvoider';
import {
  setJobBookingDate,
  setJobDescription,
} from '../../../store/reducer/job-order';

type WorkDetailsProps = NativeStackScreenProps<AppStackParamsList>;

const WorkDetails: React.FC<WorkDetailsProps> = ({navigation, route}) => {
  const {styles, colors} = useStyles();
  const dispatch = useDispatch();

  // Extract parameters from route
  const {title, data} = route.params as {title: string; data: any};

  // Get user role type and job order state from Redux
  const userRole = useSelector((state: any) => state.user.user.roleType);
  const jobOrderState = useSelector((state: any) => state.JobOrder);

  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState<string | null>(null);
  const [description, setDescription] = useState<string>('');

  const showData = useCallback(() => {
    dispatch(setJobDescription(description));
    dispatch(setJobBookingDate(date));
    navigation.navigate('AllProviders');
  }, [dispatch, description, date, navigation]);

  // ServiceSeekerView Component
  const ServiceSeekerView = useMemo(
    () => (
      <MyKeyboardAvoider>
        <SafeAreaView style={styles.container}>
          {/* <Text style={styles.title}>{title}</Text> */}

          <View style={styles.textAreaContainer}>
            <CustomTextArea
              maxLength={250}
              placeholder="Your Problem Description"
              value={description}
              setValue={setDescription}
            />
          </View>

          <View style={styles.datePickerContainer}>
            <Text style={styles.dateLabel}>Choose Date of Booking</Text>
            <DatePickerInput
              leftIcon={images.calendar}
              placeHolderTxt="Select Date"
              placeHolderDateMode="DateMonthYear"
              value={date}
              handleOnChange={setDate}
            />
          </View>
          <TouchableOpacity
            onPress={showData}
            disabled={!description || !date}
            style={[
              styles.seeAllProvidersButton,
              {
                // backgroundColor: description && date ? '' : colors.GRAY,
                opacity: description && date ? 1 : 0.5,
              },
            ]}>
            <Text style={styles.seeAllProvidersText}>See All Providers</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </MyKeyboardAvoider>
    ),
    [description, date, showData, title, styles],
  );

  // ServiceProviderView Component
  const ServiceProviderView = useMemo(
    () => (
      <SafeAreaView style={styles.container}>
        {/* <Text style={styles.title}>{title}</Text> */}

        <View style={styles.textAreaContainer}>
          <CustomTextArea
            editable={false}
            maxLength={250}
            placeholder="Problem Description"
            value={data?.attributes?.description}
          />
        </View>

        <View style={styles.datePickerContainer}>
          <Text style={styles.dateLabel}>Date of Booking</Text>
          <View style={styles.dateDisplay}>
            <Image source={images.calendar} />
            <Text style={styles.dateText}>{data?.attributes?.date}</Text>
          </View>
        </View>

        <View style={styles.attachPhotosContainer}>
          <Text style={styles.attachPhotosTitle}>Attached Photos</Text>
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            keyExtractor={item => item.toString()}
            numColumns={3}
            renderItem={() => (
              <Image
                source={images.dummyWorkImage}
                style={styles.attachedPhoto}
              />
            )}
          />
        </View>
      </SafeAreaView>
    ),
    [data, title, styles],
  );

  return (
    <ParentView
      style={{
        backgroundColor: colors.WHITE,
      }}>
      <Header
        leftIconAction={() => navigation.goBack()}
        heading={title}
        isLeftShow={true}
      />
      {userRole === 'provider' ? ServiceProviderView : ServiceSeekerView}
    </ParentView>
  );
};

export default React.memo(WorkDetails);
