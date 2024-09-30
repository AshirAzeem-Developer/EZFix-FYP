import {ViewStyle} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import useStyles from './style';
import {KeyboardStickyView} from 'react-native-keyboard-controller';
import Animated, {FadeInDown} from 'react-native-reanimated';

interface BottomButtonProps extends PropsWithChildren<{}> {
  additionalButtonContStyle?: ViewStyle;
}

const BottomButton: FC<BottomButtonProps> = ({
  children,
  additionalButtonContStyle,
}) => {
  const {styles, sizes, colors} = useStyles();

  return (
    <Animated.View entering={FadeInDown.duration(500)} style={styles.Container}>
      <KeyboardStickyView
        style={[styles.ButtonCont, additionalButtonContStyle]}>
        {children}
      </KeyboardStickyView>
    </Animated.View>
  );
};

export default BottomButton;
