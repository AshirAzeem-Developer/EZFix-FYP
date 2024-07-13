import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';

import Animated, {FadeInDown} from 'react-native-reanimated';
import useStyles from './style';

interface ButtonProps {
  bgcolor: string;
  text: string;
  textColor?: string;
  btnStyles?: ViewStyle;
  btnTextStyles?: TextStyle;
  onPress: () => void;
  withAnimation?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  bgcolor,
  text,
  textColor,
  btnStyles,
  btnTextStyles,
  onPress,
  withAnimation = false,
  disabled,
  loading,
}) => {
  const {styles} = useStyles();
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  return withAnimation ? (
    <AnimatedTouchable
      entering={FadeInDown.duration(500)}
      style={[styles.container, {backgroundColor: bgcolor}, btnStyles]}
      activeOpacity={0.6}
      disabled={disabled}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator size={25} color={'#000000'} />
      ) : (
        <Text
          style={[{color: textColor || '#000000'}, styles.text, btnTextStyles]}>
          {text}
        </Text>
      )}
    </AnimatedTouchable>
  ) : (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: bgcolor}, btnStyles]}
      activeOpacity={0.6}
      disabled={disabled}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator size={25} color={'#000000'} />
      ) : (
        <Text
          style={[{color: textColor || '#000000'}, styles.text, btnTextStyles]}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
