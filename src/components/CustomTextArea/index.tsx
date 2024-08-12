import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

import useStyles from './style';

interface CustomTextAreaProps {
  value?: string;
  label?: string;
  placeholder?: string;
  maxLength?: number; // Add maxLength as a prop
  customStyles?: {};
  customContainerStyles?: {};
  setValue?: (text: string) => void;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  label,
  placeholder,
  maxLength,
  value,
  customStyles,
  customContainerStyles,
  setValue = () => {},
}) => {
  const {styles, colors, sizes} = useStyles();

  return (
    <>
      <View style={[styles.container, customContainerStyles]}>
        {label && <Text style={styles.label}>{label}</Text>}

        <TextInput
          style={[styles.textArea, customStyles]}
          placeholder={placeholder}
          value={value}
          onChangeText={text => setValue(text)}
          multiline={true}
          numberOfLines={4}
          maxLength={maxLength} // Set the maxLength prop
        />

        {/* Character count */}
      </View>
      <Text style={styles.charCount}>
        <Text>250</Text>
        <Text> </Text>
        Character Limit
      </Text>
    </>
  );
};

export default CustomTextArea;
