import React, {useState, useEffect} from 'react';
import {
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  View,
  Image,
} from 'react-native';

//local imports
import styles from './style';
import MyStatusBar from '../../../components/StatusBar';
import HomeHeader from '../../../components/HomeHeader';
import icons from '../../../assets/icons';
import IconInput from '../../../components/Input/IconInput';

//third party library

// dimenstion
const {width, height} = Dimensions.get('window');

const Index = ({navigation, ...props}) => {
  return (
    <>
      <Text>Home</Text>
    </>
  );
};

export default Index;
