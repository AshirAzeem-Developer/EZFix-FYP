import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  View,
  Image,
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
  icon?: any;
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
  icon,
}) => {
  const {styles, sizes, colors} = useStyles();
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {icon && (
            <Image
              source={icon}
              style={{
                width: sizes.WIDTH * 0.05,
                height: sizes.HEIGHT * 0.025,
                marginRight: sizes.WIDTH * 0.02,
              }}
            />
          )}
          <Text
            style={[
              {color: textColor || '#000000'},
              styles.text,
              btnTextStyles,
            ]}>
            {text}
          </Text>
        </View>
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {icon && (
            <Image
              source={icon}
              style={{
                width: sizes.WIDTH * 0.05,
                height: sizes.HEIGHT * 0.025,
                marginRight: sizes.WIDTH * 0.02,
              }}
            />
          )}
          <Text
            style={[
              {color: textColor || '#000000'},
              styles.text,
              btnTextStyles,
            ]}>
            {text}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
