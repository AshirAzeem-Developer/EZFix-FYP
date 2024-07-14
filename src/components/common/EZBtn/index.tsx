import * as React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useStyles from './style';
const {width, height} = Dimensions.get('window');

type EZBtnProps = {
  myStyles?: any;
  text: string;
  buttonType?: 'outline';
  onPress: () => void;
};

const EZBtn: React.FC<EZBtnProps> = ({myStyles, text, buttonType, onPress}) => {
  const {styles, colors} = useStyles();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        buttonType === 'outline' ? styles.outlineButton : null,
        styles.buttonFlexBox,
        myStyles,
      ]}
      activeOpacity={0.2}>
      <View style={[styles.buttonText, styles.buttonFlexBox]}>
        <Text
          style={[
            styles.action,
            buttonType === 'outline' ? styles.outlineButtonText : null,
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default EZBtn;
