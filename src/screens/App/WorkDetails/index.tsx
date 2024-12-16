import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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
import DateTimePicker from '@react-native-community/datetimepicker';

type WorkDetailsProps = NativeStackScreenProps<AppStackParamsList>;

const WorkDetails: React.FC<WorkDetailsProps> = ({navigation, route}) => {
  const {styles, colors, sizes} = useStyles();
  const dispatch = useDispatch();

  // Extract parameters from route
  const {title, data} = route.params as {title: string; data: any};

  // Get user role type and job order state from Redux
  const userRole = useSelector(
    (state: any) => state?.user?.user?.user?.roleType,
  );
  const jobOrderState = useSelector((state: any) => state.JobOrder);

  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [description, setDescription] = useState<string>('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const showData = useCallback(() => {
    if (date) {
      const formattedDate = date.toISOString().split('T')[0];
      dispatch(setJobDescription(description));
      dispatch(setJobBookingDate(formattedDate));
      navigation.navigate('AllProviders');
    }
  }, [dispatch, description, date, navigation]);

  // ServiceSeekerView Component
  const ServiceSeekerView = useMemo(
    () => (
      <MyKeyboardAvoider>
        <SafeAreaView style={styles.container}>
          {/* <Text style={styles.title}>{title}</Text> */}

          <View style={styles.textAreaContainer}>
            <Text style={styles.label}>Enter Problem Description</Text>
            <TextInput
              style={[
                styles.input,
                {
                  height: sizes.HEIGHT * 0.2,
                  textAlignVertical: 'top',
                },
              ]}
              placeholder="Enter Job Description"
              value={description}
              multiline
              numberOfLines={4}
              textAlign="left"
              onChangeText={setDescription}
            />
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.label}>Choose Date of Booking</Text>
            <TouchableOpacity
              style={styles.dateButton}
              onPress={() => setShowDatePicker(true)}>
              <Text>{date ? date.toLocaleDateString() : 'Not Specified'}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={date || new Date()} // Use current date as fallback
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setShowDatePicker(false);
                  if (selectedDate) {
                    setDate(selectedDate); // Update end date
                  }
                }}
              />
            )}
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
          <Text style={styles.label}>Problem Description</Text>
          <TextInput
            style={[
              styles.input,
              {
                height: sizes.HEIGHT * 0.2,
                textAlignVertical: 'top',
              },
            ]}
            placeholder="Enter Job Description"
            // value={description}
            value={data?.attributes?.description}
            multiline
            numberOfLines={4}
            textAlign="left"
            onChangeText={setDescription}
            editable={false}
          />
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.label}>Date of Booking</Text>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowDatePicker(true)}>
            <Text
              style={{
                color: colors.BLACK,
              }}>
              {date ? date.toLocaleDateString() : data?.attributes?.date}
            </Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.attachPhotosContainer}>
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
        </View> */}
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
