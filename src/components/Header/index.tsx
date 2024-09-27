//HEADER

import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
// third party

// styles
import style from './style';

// local

import images from '../../assets/images';
import {screen} from '../../utils/constants';
import useStyles from './style';

type HeaderProps = {
  leftIconAction?: () => void;
  rightIconAction?: () => void;
  rightIcon?: any;
  heading?: string;
  isLeftShow?: boolean;
  isRightShow?: boolean;
  isBlack?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  leftIconAction,
  rightIconAction,
  isLeftShow,
  isRightShow,
  heading,
  rightIcon,
  isBlack = false,
  ...props
}) => {
  const {styles, colors, sizes} = useStyles();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.arrowContainer}
        activeOpacity={0.75}
        onPress={leftIconAction}>
        {isLeftShow == true && (
          <Image
            source={images.ARROW_LEFT}
            height={screen.width * 0.065}
            width={screen.width * 0.065}
          />
        )}
      </TouchableOpacity>
      <View style={styles.headingTextContainer}>
        <Text style={styles.headingText}>{heading}</Text>
      </View>
      <TouchableOpacity
        style={styles.arrowContainer}
        activeOpacity={0.75}
        onPress={rightIconAction}>
        {isRightShow == true && (
          <Image
            source={rightIcon}
            style={{
              marginLeft: sizes.WIDTH * 0.1,
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Header;
