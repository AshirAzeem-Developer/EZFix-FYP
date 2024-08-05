import {Text, TouchableOpacity, View} from 'react-native';

import useStyles from './style';

import images from '../../assets/images';
import stylesheet from './style';
import {Image} from 'react-native';
import React from 'react';
import icons from '../../assets/icons';

type props = {
  optionIcon: any;
  optionText: string;
  onPress: () => void;
};

const ProfileSettingOption: React.FC<props> = ({
  optionIcon,
  optionText,
  onPress,
}) => {
  const {styles, colors, sizes} = useStyles();

  return (
    <TouchableOpacity style={styles.settingsOptionContainer} onPress={onPress}>
      <View style={styles.leftContainer}>
        <Image source={optionIcon} style={styles.leftIconStyles} />
        <Text style={styles.settingOptionText}>{optionText}</Text>
      </View>
      <Image
        source={icons.ARROW}
        style={
          {
            // transform: [{rotateY: '180deg' : '0deg'}],
          }
        }
      />
    </TouchableOpacity>
  );
};

export default ProfileSettingOption;
