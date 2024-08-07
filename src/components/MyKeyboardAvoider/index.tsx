import React from 'react';

import {KeyboardAwareScrollView} from 'react-native-keyboard-controller';
import {View} from 'react-native';
import useIsKeyboardOpen from '../../hooks/useIsKeyboardOpen';
import {useSizes} from '../../constants/size';

type Props = {
  children: React.ReactNode;
  style?: any;
  avoidBottomButton?: boolean;
};
const MyKeyboardAvoider = ({children, style, avoidBottomButton}: Props) => {
  const sizes = useSizes();
  const isKeyboardOn = useIsKeyboardOpen();
  return (
    <KeyboardAwareScrollView
      bottomOffset={avoidBottomButton ? sizes.BOTTOM_BUTTON_HEIGHT : 0}
      bounces={false}
      style={{flex: 1, ...style}}>
      {children}
      {avoidBottomButton && isKeyboardOn && (
        <View style={{height: sizes.BOTTOM_BUTTON_HEIGHT}} />
      )}
    </KeyboardAwareScrollView>
  );
};

export default MyKeyboardAvoider;
