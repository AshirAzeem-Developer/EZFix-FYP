import {View, useWindowDimensions, Image, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import icons from '../../../assets/icons';
// import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
// import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from './style';

import {Dimensions} from 'react-native';

const Splash = () => {
  useEffect(() => {}, []);
  // const {height, width} = useWindowDimensions();
  return (
    <View style={[styles.container, styles.flex]}>
      <View style={styles.picStyle}>
        <Image source={icons.Logo} resizeMode="contain" style={styles.img} />
      </View>
    </View>
  );
};

export default Splash;
