import {StyleSheet, Dimensions} from 'react-native';
// local
import {useColors} from '../../constants/color';
import {useSizes} from '../../constants/size';
import {getGlobalStyles} from '../../constants/GlobalStyle';

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: sizes.WIDTH * 0.01,
      paddingTop: sizes.HEIGHT * 0.01,
    },
    dropdown: {
      height: sizes.HEIGHT * 0.06,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: sizes.WIDTH * 0.02,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: sizes.WIDTH * 0.05,
      top: -sizes.WIDTH * 0.002,
      zIndex: 999,
      paddingHorizontal: sizes.WIDTH * 0.02,
      fontSize: sizes.FONTSIZE_MEDIUM,
    },
    placeholderStyle: {
      fontSize: sizes.FONTSIZE_HIGH,
    },
    selectedTextStyle: {
      fontSize: sizes.FONTSIZE,
    },
    iconStyle: {
      width: sizes.WIDTH * 0.08,
      height: sizes.WIDTH * 0.08,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
