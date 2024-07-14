import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import useStyles from './style';
import SnapCarousel from '../../../components/SnapCarousel';
import EZBtn from '../../../components/common/EZBtn';
import {useNavigation} from '@react-navigation/native';

const OnBoarding = ({navigation}) => {
  const {styles, colors} = useStyles();

  return (
    <>
      <View style={styles.swiperContainer}>
        <SnapCarousel />

        <EZBtn
          myStyles={styles.buttonFrame}
          text={'Sign In'}
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        />
        <View style={styles.alreadyHaveAccountParent}>
          <TouchableOpacity>
            <Text style={styles.text1Typo}>Create an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default OnBoarding;
