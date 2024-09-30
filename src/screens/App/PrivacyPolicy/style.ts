import {StyleSheet, Dimensions} from 'react-native';
// local
import {useColors} from '../../../constants/color';
import {useSizes} from '../../../constants/size';
import {getGlobalStyles} from '../../../constants/GlobalStyle';

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.BACKGROUND,
    },
    privacyPolHeading: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.06,
      marginLeft: sizes.WIDTH * 0.04,
      color: 'black',
      marginTop: sizes.HEIGHT * 0.04,
    },
    ppContainer: {
      paddingHorizontal: sizes.WIDTH * 0.048,
      backgroundColor: '#F1F1F1',
      paddingVertical: sizes.WIDTH * 0.04,
      marginTop: sizes.HEIGHT * 0.03,
    },
    ppHeading: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.045,
      marginTop: sizes.HEIGHT * 0.02,
      color: 'black',
    },
    ppDec: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.04,
      color: 'black',

      textAlign: 'justify',
      marginTop: sizes.HEIGHT * 0.02,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
