import {View, Text, StyleProp, ViewStyle} from 'react-native';
import React, {useEffect} from 'react';
import useStyles from './style';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type ProgressbarProps = {
  progress: number;
  containerOverrideStyle?: StyleProp<ViewStyle>;
  progressBarOverrideStyle?: StyleProp<ViewStyle>;
};

const ProgressBar: React.FC<ProgressbarProps> = ({
  progress,
  containerOverrideStyle,
  progressBarOverrideStyle,
}) => {
  const {styles, sizes, colors} = useStyles();
  const progressPercentage = useSharedValue(0);
  useEffect(() => {
    progressPercentage.value = withTiming(progress, {duration: 500});
  }, [progress]);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${progressPercentage.value}%`,
    };
  });
  return (
    <View style={[styles.container, containerOverrideStyle]}>
      <Animated.View
        style={[styles.progress, animatedStyle, progressBarOverrideStyle]}
      />
    </View>
  );
};

export default ProgressBar;
