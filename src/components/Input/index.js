import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import styles from './styles';

function Input({placeholder, value, onChangeText, keyboardType}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
}

export default Input;
