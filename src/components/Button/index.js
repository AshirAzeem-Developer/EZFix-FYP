import {Dimensions, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
const {width, height} = Dimensions.get('window');

export default function CustomButton({text, ButtonWidth, onPress}) {
  return (
    <TouchableOpacity
      style={[styles.loginButton, {width: ButtonWidth}]}
      onPress={onPress}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: width * 0.048,
          // fontWeight: 'bold',
          color: 'white',
          fontFamily: 'Dubai-Bold',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
