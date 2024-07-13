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
    swiperContainer: {
      backgroundColor: colors.BACKGROUND,
      height: sizes.HEIGHT * 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    buttonFrame: {
      marginHorizontal: sizes.WIDTH * 0.04,
    },
    alreadyHaveAccountParent: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: sizes.HEIGHT * 0.01,
    },
    alreadyHaveAccountContainer: {},
    signIn: {
      fontWeight: 'bold',
      marginHorizontal: sizes.WIDTH * 0.015,
      textDecorationLine: 'underline',
    },
    text1Typo: {
      fontSize: sizes.WIDTH * 0.05,
      color: 'black',
      textDecorationLine: 'underline',
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};

export default useStyles;
