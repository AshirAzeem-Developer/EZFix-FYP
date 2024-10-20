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
    providersCardContainer: {
      width: sizes.WIDTH * 0.95,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginVertical: sizes.HEIGHT * 0.015,
      backgroundColor: colors.WHITE,
      borderRadius: sizes.WIDTH * 0.02,
      elevation: 1,
      padding: sizes.WIDTH * 0.02,
      paddingTop: sizes.WIDTH * 0.02,
    },
    providerimg: {
      width: sizes.WIDTH * 0.28,
      height: sizes.WIDTH * 0.28,
      borderRadius: sizes.WIDTH * 0.02,
      resizeMode: 'cover',
      paddingLeft: sizes.WIDTH * 0.02,
    },
    detailsContainer: {
      width: sizes.WIDTH * 0.6,
      flexDirection: 'column',
      justifyContent: 'flex-start',

      marginHorizontal: sizes.WIDTH * 0.02,
      paddingHorizontal: sizes.WIDTH * 0.02,
    },
    nameAndRateContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',

      paddingRight: sizes.WIDTH * 0.02,
    },
    name: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.05,
      color: colors.BLACK,
      textAlign: 'left',
    },
    ratingsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      // marginTop: sizes.HEIGHT * 0.015,
      padding: sizes.WIDTH * 0.02,
    },
    rate: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.03,
      color: '#8DC63F',
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
      width: sizes.WIDTH * 0.42,
      height: sizes.HEIGHT * 0.04,
      borderRadius: sizes.WIDTH * 0.02,
      marginHorizontal: sizes.WIDTH * 0.02,
    },
    viewProfileButton: {
      backgroundColor: 'rgba(0,128,0,0.1)',
      width: sizes.WIDTH * 0.42,
      height: sizes.HEIGHT * 0.04,
      borderRadius: sizes.WIDTH * 0.02,
      marginHorizontal: sizes.WIDTH * 0.02,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
