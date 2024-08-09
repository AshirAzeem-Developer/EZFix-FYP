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
      backgroundColor: colors.WHITE,
      borderRadius: sizes.WIDTH * 0.02,
      width: sizes.WIDTH * 0.6,
      padding: sizes.WIDTH * 0.03,
      position: 'relative',
      left: sizes.WIDTH * 0.3,
      top: sizes.HEIGHT * 0.17,

      elevation: 20,
    },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: sizes.HEIGHT * 0.012,
    },
    optionText: {
      ...globalStyles.TEXT_STYLE_BOLD,
      marginLeft: sizes.WIDTH * 0.03,
      fontSize: sizes.WIDTH * 0.04,
    },
    divider: {
      height: 1,
      backgroundColor: '#ddd',
      marginVertical: sizes.HEIGHT * 0.008,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
