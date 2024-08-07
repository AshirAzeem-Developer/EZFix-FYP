import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  LayoutAnimation,
  Platform,
  Switch,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';

import useStyles from './style';

import images from '../../assets/images';
import stylesheet from './style';
import {screen} from '../../utils/constants';
interface NotificationSettingOptionsProps {
  optionText: string;
  ActiveStatus: boolean;
}
const NotificationSettingOptions: React.FC<NotificationSettingOptionsProps> = ({
  optionText,
  ActiveStatus,
}) => {
  const {styles, sizes, colors} = useStyles();
  const [isEnabled, setIsEnabled] = useState(ActiveStatus);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.notificationOptionContainer}>
      <Text style={styles.text}>{optionText}</Text>
      <Switch
        onChange={toggleSwitch}
        style={styles.switchStyles}
        value={isEnabled}
        trackColor={{false: '#787880', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#FFFFFF' : '#f4f3f4'}
      />
    </View>
  );
};

export default NotificationSettingOptions;
