import {Dimensions, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
const {width, height} = Dimensions.get('window');

export default function CustomButton({text}) {
  return (
    <TouchableOpacity style={styles.loginButton}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: width * 0.048,
          fontWeight: 'bold',
          color: 'white',
          backgroundColor:'white'
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
