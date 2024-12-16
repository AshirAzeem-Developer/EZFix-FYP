import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Animated,
  StyleSheet,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
// import images from '../../utils/images';
// import SvgImage from '../common/SvgImage';
// import {useStyles} from 'react-native-unistyles';
import style from './style';
import {SvgProps} from 'react-native-svg';
import {screen} from '../../utils/constants';
import useStyles from './style';
import images from '../../assets/images';
import {Image} from 'react-native';
import icons from '../../assets/icons';

interface LangSelectItemProps {
  title: string;
  langIcon?: any;
  onSelect: () => void;
  selected: boolean;
}

const LangSelectItem: React.FC<LangSelectItemProps> = ({
  title,
  langIcon,
  onSelect,
  selected,
}) => {
  const {styles, sizes, colors} = useStyles();

  return (
    <TouchableOpacity
      onPress={onSelect}
      style={selected ? styles.selectedContainer : styles.container}>
      <View style={styles.titleIconWrapper}>
        <Image
          source={langIcon ? langIcon : images.ARROW_LEFT}
          style={{
            width: sizes.WIDTH * 0.1,
            height: sizes.WIDTH * 0.1,
            marginHorizontal: sizes.WIDTH * 0.02,
          }}
        />
        <Text style={styles.langTitle}>{title ? title : 'Lang Title'}</Text>
      </View>
      <Image
        source={selected ? icons.FILLED_CHECK : icons.NON_FILLED_CHECK}
        style={{
          width: sizes.WIDTH * 0.05,
          height: sizes.WIDTH * 0.05,
          marginHorizontal: sizes.WIDTH * 0.02,
        }}
      />
    </TouchableOpacity>
  );
};

export default LangSelectItem;
