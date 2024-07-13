import {View, useWindowDimensions, Image, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import icons from '../../../assets/icons';

import useStyles from './style';

import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const Index = ({navigation}) => {
  const {styles, colors} = useStyles();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('OnBoarding');
    }, 3000);
  });

  return (
    <SafeAreaView style={styles.container}>
      <Image source={icons.Logo} resizeMode="contain" style={styles.img} />
    </SafeAreaView>
  );
};

export default Index;
