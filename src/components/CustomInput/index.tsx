import {StyleSheet, Text, TextInput, View} from 'react-native';

import React, {useEffect, useRef, useState} from 'react';

import LinearGradient from 'react-native-linear-gradient';
import useStyles from './style';

type props = {
  inputType: string;
  label: string;
  placeholder: string;
  onFocus: () => void;
};

const CustomInput: React.FC<props> = ({
  inputType,
  label,
  placeholder,
  onFocus,
}) => {
  const {styles, sizes, colors} = useStyles();
  const [inpValue, changeInpValue] = useState();

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label} </Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={colors.LIGHT_GRAY200}
        value={inpValue}
        onChange={e => changeInpValue(e.value)}
        keyboardType={inputType}
        onFocus={onFocus}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
