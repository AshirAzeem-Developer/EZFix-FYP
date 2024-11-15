import {StyleSheet, Dimensions} from 'react-native';
// local
import {useColors} from '../../constants/color';
import {useSizes} from '../../constants/size';
import {getGlobalStyles} from '../../constants/GlobalStyle';
// dimenstion
const {width, height} = Dimensions.get('window');
const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);
  const styles = StyleSheet.create({
    providerscard: {
      width: sizes.WIDTH * 0.95,
      // height: sizes.HEIGHT * 0.13,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      //   elevation: 1,
      backgroundColor: 'rgba(0,128,0,0.1)',
      borderRadius: sizes.WIDTH * 0.02,

      marginHorizontal: sizes.WIDTH * 0.02,
      marginVertical: sizes.HEIGHT * 0.01,
      padding: sizes.WIDTH * 0.02,
    },
    providernames: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.052,
    },
    providerimg: {
      width: sizes.WIDTH * 0.25,
      height: sizes.WIDTH * 0.25,
      borderRadius: sizes.WIDTH * 0.02,
      marginRight: sizes.WIDTH * 0.02,
    },
    locationText: {
      ...globalStyles.TEXT_STYLE,
    },
    categoryText: {
      ...globalStyles.TEXT_STYLE,
      color: colors.WHITE,
      fontSize: sizes.WIDTH * 0.037,
    },
    categoriesContainer: {
      marginVertical: sizes.HEIGHT * 0.01,
      marginHorizontal: sizes.WIDTH * 0.013,
      paddingHorizontal: sizes.WIDTH * 0.03,
      paddingVertical: sizes.HEIGHT * 0.002,
      backgroundColor: '#006f5e',
      borderRadius: sizes.WIDTH * 0.1,
      width: sizes.WIDTH * 0.28,
    },
    star: {
      width: sizes.WIDTH * 0.055,
      height: sizes.WIDTH * 0.055,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginBottom: sizes.HEIGHT * 0.01,
    },
    providerNameAndRateContainer: {
      width: sizes.WIDTH * 0.55,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },

    providerRate: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.045,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
