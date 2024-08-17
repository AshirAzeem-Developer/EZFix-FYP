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
    providersCardContainer: {
      width: sizes.WIDTH * 0.95,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginVertical: sizes.HEIGHT * 0.015,
      backgroundColor: colors.WHITE,
      borderRadius: sizes.WIDTH * 0.02,
      elevation: 1,
      padding: sizes.WIDTH * 0.02,
    },
    providerimg: {
      width: sizes.WIDTH * 0.28,
      height: sizes.WIDTH * 0.45,
      borderRadius: sizes.WIDTH * 0.02,
    },
    detailsContainer: {
      width: sizes.WIDTH * 0.6,
      flexDirection: 'column',
      justifyContent: 'space-evenly',

      marginHorizontal: sizes.WIDTH * 0.02,
      paddingHorizontal: sizes.WIDTH * 0.02,
    },
    nameAndRateContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: sizes.HEIGHT * 0.01,
    },
    name: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.05,
      color: colors.BLACK,
    },
    ratingsContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: sizes.HEIGHT * 0.015,
    },
    rate: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.04,
      color: colors.BLACK,
    },
    serviceContainer: {
      marginHorizontal: sizes.WIDTH * 0.02,
    },
    servicesList: {
      marginVertical: sizes.HEIGHT * 0.0,
    },
    service: {},
    star: {
      width: sizes.WIDTH * 0.065,
      height: sizes.WIDTH * 0.065,
      marginRight: sizes.WIDTH * 0.015,
    },
    buttonsContainer: {
      width: sizes.WIDTH * 0.6,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: sizes.HEIGHT * 0.02,
    },
    bookNowButton: {
      width: sizes.WIDTH * 0.28,
      height: sizes.HEIGHT * 0.05,
    },
    viewProfileButton: {
      width: sizes.WIDTH * 0.28,
      height: sizes.HEIGHT * 0.05,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
