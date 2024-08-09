// CustomActionSheet.tsx
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import useStyles from './style';
import {Image} from 'react-native';

// Enhanced interface with proper types for options
interface CustomActionSheetProps {
  customContainerStyle?: ViewStyle;
  options: ActionOption[];
}

interface ActionOption {
  optionText: string;
  optionIcon?: React.FC<any>;
  optionOnPress: () => void;
}

const CustomActionSheet: React.FC<CustomActionSheetProps> = ({
  customContainerStyle,
  options,
}) => {
  const {styles, sizes, colors} = useStyles();

  return (
    <View style={[styles.container, customContainerStyle]}>
      {options?.map((option, index) => (
        <View key={index}>
          <TouchableOpacity
            style={styles.option}
            onPress={option.optionOnPress}>
            <Image source={option.optionIcon} />
            <Text style={styles.optionText}>{option.optionText}</Text>
          </TouchableOpacity>
          {index != options.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </View>
  );
};

export default CustomActionSheet;
