import {Image, Text, View} from 'react-native';
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

type WorkDetailsProps = NativeStackScreenProps<AppStackParamsList>;

const WorkDetails: React.FC<WorkDetailsProps> = ({navigation, route}) => {
  const {styles, colors} = useStyles();
  const [date, setDate] = useState<string | null>(null);

  const handleDateChange = (date: string) => {
    setDate(date);
  };

  const {title} = route.params;
  return (
    <ParentView
      style={{
        backgroundColor: colors.WHITE,
      }}>
      <Header leftIconAction={() => navigation.goBack()} title={title} />
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
    </ParentView>
  );
};
export default WorkDetails;
