import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';
import Animated from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ParentViewProps {
  children: ReactNode;
  style?: ViewStyle;
  enterAnimation?: any;
}

export const ParentView: React.FC<ParentViewProps> = ({
  children,
  style,
  enterAnimation,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <Animated.View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          flex: 1,
        },
        style,
      ]}
      entering={enterAnimation}>
      {children}
    </Animated.View>
  );
};
