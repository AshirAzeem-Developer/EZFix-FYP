import {View, useWindowDimensions, Image, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import icons from '../../../assets/icons';
// import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
// import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from './style';

import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SelectService');
    }, 3000);
  });

  return (
    <SafeAreaView style={[styles.container]}>
      <Image source={icons.EZLogo} resizeMode="contain" style={styles.img} />
    </SafeAreaView>
  );
};

export default Index;
