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
    // providers: {
    //   margin: sizes.WIDTH * 0.01,
    //   //   height: sizes.HEIGHT * 0.12,
    //   //   flexDirection: 'column',
    //   //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
    providerscard: {
      width: sizes.WIDTH * 0.95,
      // height: sizes.HEIGHT * 0.13,
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      //   elevation: 1,

      marginHorizontal: sizes.WIDTH * 0.02,
      marginVertical: sizes.HEIGHT * 0.01,
      padding: sizes.WIDTH * 0.02,
    },
    providernames: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.06,
    },
    providerimg: {
      width: sizes.WIDTH * 0.3,
      height: sizes.HEIGHT * 0.18,
      borderRadius: sizes.WIDTH * 0.02,
    },
    locationText: {
      ...globalStyles.TEXT_STYLE,
    },
    categoryText: {
      ...globalStyles.TEXT_STYLE,
      color: colors.GRAY,
      fontSize: sizes.WIDTH * 0.05,
    },

    star: {
      width: sizes.WIDTH * 0.06,
      height: sizes.HEIGHT * 0.03,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    providerNameAndRateContainer: {
      width: sizes.WIDTH * 0.55,
      flexDirection: 'row',
      alignItems: 'center',
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
