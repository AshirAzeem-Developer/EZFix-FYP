import {StyleSheet, Dimensions} from 'react-native';
// local
import {useColors} from '../../../constants/color';
import {useSizes} from '../../../constants/size';
import {getGlobalStyles} from '../../../constants/GlobalStyle';
// dimenstion
const {width, height} = Dimensions.get('window');
const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.12,
    },
    finishButton: {
      width: sizes.WIDTH * 0.8,
      marginVertical: sizes.HEIGHT * 0.02,
    },
    buttonsContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: sizes.WIDTH * 0.95,
      marginVertical: sizes.HEIGHT * 0.02,
    },
    textStyles: {
      fontSize: sizes.WIDTH * 0.05,
    },
    modalHeading: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.06,
      color: colors.BLACK,
    },

    modalTimeElapsed: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.04,
      color: colors.RED,
    },
    amountToBePaid: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.04,
      color: colors.BLACK,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
