import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useSizes} from '../constants/size';
import {useColors} from '../constants/color';
import {getGlobalStyles} from '../constants/GlobalStyle';

const CustomButtonComponent = ({
  style,
  textStyle,
  onPress,
  onLongPress,
  title,
  icon,
  activeOpacity,
}) => {
  const {styles, colors} = useStyles();
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={activeOpacity ? activeOpacity : 0.4}>
      <View style={[styles.container, style]}>
        {icon && (
          <Image
            source={icon}
            style={[styles.iconStyle, {tintColor: textStyle.color}]}
          />
        )}
        <View style={{flex: 1}} />
        <Text style={[styles.text, textStyle]}>{title}</Text>
        <View style={{flex: 1}} />
        {icon && <View style={styles.iconStyle} />}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButtonComponent;

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);
  const styles = StyleSheet.create({
    container: {
      width: sizes.WIDTH * 0.5,
      height: sizes.ICON,
      backgroundColor: colors.SKY_BLUE,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: sizes.BORDER_RADIUS,
    },
    text: {
      ...globalStyles.TEXT_STYLE,
      color: colors.PRIMARY_TEXT,
    },
    iconStyle: {
      marginHorizontal: Size.PADDING,
      width: sizes.ICON * 0.5,
      height: sizes.ICON * 0.5,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
