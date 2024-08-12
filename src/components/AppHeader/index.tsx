import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

// styles
import useStyles from './style';

// local

import icons from '../../assets/icons';

type HeaderProps = {
  leftIconAction: () => void;
  rightIcon?: any;
  rightIconAction?: () => void;
  rightText?: string;
  rightView?: React.ReactNode;
  dark?: boolean;
  title?: string;
};

const Header: React.FC<HeaderProps> = ({
  leftIconAction,
  rightIcon,
  rightIconAction,
  rightText,
  rightView,
  dark = false,
  title,
  ...props
}) => {
  const {styles, colors} = useStyles();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.IconCont,
          {
            backgroundColor: dark ? '#3D3D3D' : colors.BACKGROUND,
          },
        ]}
        activeOpacity={1}
        onPress={leftIconAction}>
        <Image
          source={dark ? icons.BackIcon : icons.BackIcon}
          style={styles.Icon}
        />
      </TouchableOpacity>

      {rightIcon ? (
        <TouchableOpacity
          style={styles.IconCont}
          activeOpacity={1}
          onPress={rightIconAction}>
          <Image source={icons.leftArrow} style={styles.Icon} />
        </TouchableOpacity>
      ) : null}
      {rightText ? (
        <TouchableOpacity activeOpacity={0.75} onPress={rightIconAction}>
          <Text style={styles.Text}>{rightText}</Text>
        </TouchableOpacity>
      ) : null}
      {rightView ? rightView : null}
    </View>
  );
};

export default Header;
