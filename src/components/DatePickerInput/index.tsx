import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, ViewStyle, Image} from 'react-native';

// third party
import Modal from 'react-native-modal';
import {Calendar} from 'react-native-calendars';
// styles

import useStyles from './style';

// local
import {ParentView} from '../../components/common/ParentView/ParentView';

import images from '../../assets/images';
import Header from '../../components/AppHeader';

type DatePickerInputProps = {
  // icon,
  leftIcon?: any;
  // Date
  value: string | null;

  //
  placeHolderDateMode: 'DateMonthYear' | 'MonthAlphaBetYear';
  // string
  placeHolderTxt: string;
  // func
  handleOnChange: (newValue: string) => void;
  customContainerStyle?: ViewStyle;
};

type CalanderViewProps = {
  value: string;
  handleSelectDate: (newValue: string) => void;
  hideDayNames?: boolean;
  hideHeader?: boolean;
};
export const CalanderView: FC<CalanderViewProps> = ({
  value,
  handleSelectDate,
  hideDayNames = true,
  hideHeader = false,
}) => {
  const {styles, colors, sizes} = useStyles();
  return (
    <Calendar
      hideExtraDays
      hideDayNames={hideDayNames}
      {...(hideHeader ? {renderHeader: () => <View />} : {})}
      initialDate={value.length > 0 ? value : undefined}
      renderArrow={direction => {
        if (direction === 'left') {
          return <Image source={images.back} />;
        } else if (direction === 'right') {
          return (
            <Image source={images.back} style={styles.calanderRightArrow} />
          );
        }
      }}
      hideArrows={hideHeader}
      dayComponent={({date, state}) => {
        let isSelectedDate = date?.dateString === value;
        return (
          <TouchableOpacity
            style={[
              styles.dayComponentCont,
              {
                backgroundColor: isSelectedDate
                  ? colors.BLACK
                  : colors.LIGHT_GRAY,
              },
            ]}
            activeOpacity={1}
            onPress={() => {
              handleSelectDate(
                date?.dateString === undefined ? '' : date?.dateString,
              );
            }}>
            <Text
              style={[
                styles.datetxt,
                {
                  textAlign: 'center',
                  color:
                    state === 'disabled'
                      ? colors.LIGHT_GRAY200
                      : isSelectedDate
                      ? colors.WHITE
                      : colors.BLACK,
                },
              ]}>
              {date?.day}
            </Text>
          </TouchableOpacity>
        );
      }}
      markedDates={{
        [value]: {selected: true},
      }}
    />
  );
};

const DatePickerInput: FC<DatePickerInputProps> = ({
  // icons
  leftIcon,
  // Date
  value,
  // text
  placeHolderTxt,
  placeHolderDateMode,
  // functions
  handleOnChange,
  customContainerStyle,
  ...props
}) => {
  const {styles, colors, sizes} = useStyles();

  // state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // functions
  const formatDate = (date: string | null) => {
    if (date === null) return;
    const tempDate = new Date(date);
    if (placeHolderDateMode === 'DateMonthYear') {
      const day = String(tempDate.getDate()).padStart(2, '0');
      const month = String(tempDate.getMonth() + 1).padStart(2, '0');
      const year = tempDate.getFullYear();
      return `${day} / ${month} / ${year}`;
    } else if (placeHolderDateMode === 'MonthAlphaBetYear') {
      // New logic for formatting as 'MMM YYYY'
      const monthString = tempDate.toLocaleString('en-US', {month: 'short'});
      const yearString = tempDate.getFullYear();
      return `${monthString} ${yearString}`;
    } else {
      return date.toString();
    }
  };

  const handleDatePickerModalJSX = () => (
    <Modal isVisible={isModalOpen} style={{margin: 0}}>
      <ParentView style={styles.DatePickerModalCont}>
        <Header leftIconAction={() => setIsModalOpen(false)} />

        {/* datePickerView */}
        <View style={styles.datePickerCont}>
          <CalanderView
            value={value === null ? '' : value}
            handleSelectDate={handleDateSelect}
          />
        </View>

        {/* datePickerView */}
      </ParentView>
    </Modal>
  );

  const handleDateSelect = (newDate: string) => {
    setIsModalOpen(false);
    handleOnChange(newDate);
  };

  let isDateSet = value != null ? true : false;
  return (
    <View
      style={[
        styles.container,
        isDateSet ? styles.blackBottomBorder : styles.greyBottomBorder,
        customContainerStyle, // TODO BIND THIS WITHN INPUT LENGTH
      ]}>
      {/* left icon cont */}
      {!!leftIcon && (
        <View style={styles.leftIconCont}>
          <Image source={leftIcon} style={styles.leftIcon} />
        </View>
      )}

      {/* left icon cont end */}

      {/* TextInput  */}
      <View
        style={[
          styles.datePickerPlaceHolderCont,
          {width: !!leftIcon ? '80%' : '90%'},
        ]}>
        {isDateSet ? (
          <Text
            style={styles.selectDateTxt}
            onPress={() => setIsModalOpen(true)}>
            {formatDate(value)}
          </Text>
        ) : (
          <Text
            style={styles.datePickerPlaceHolTxt}
            onPress={() => setIsModalOpen(true)}>
            {placeHolderTxt}
          </Text>
        )}
      </View>
      {/* TextInput end */}

      {handleDatePickerModalJSX()}
    </View>
  );
};

export default DatePickerInput;
