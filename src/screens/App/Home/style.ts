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
      backgroundColor: '#fff',
      padding: sizes.WIDTH * 0.01,
    },
    logoImgCont: {
      paddingLeft: sizes.PADDING,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: sizes.WIDTH * 0.9,
    },
    logoImg: {
      height: sizes.HEIGHT * 0.1,
      width: sizes.LOGO_SIZE,
    },
    bellImg: {
      height: sizes.HEIGHT * 0.028,
      width: sizes.WIDTH * 0.05,
    },
    notificationBadge: {
      backgroundColor: 'red',
      width: sizes.WIDTH * 0.02,
      height: sizes.HEIGHT * 0.01,
      borderRadius: sizes.WIDTH * 0.1,
      position: 'absolute',
      bottom: sizes.HEIGHT * 0.02,
      left: sizes.WIDTH * 0.025,
    },
    search: {
      paddingTop: sizes.HEIGHT * 0,
      padding: sizes.WIDTH * 0.02,
    },
    categoryheading: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.BLACK,
      fontSize: sizes.FONT_SIZE_HEADER,
      paddingLeft: sizes.WIDTH * 0.03,
      marginTop: sizes.HEIGHT * 0.015,
    },
    categories: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: sizes.WIDTH * 0.02,
    },
    providers: {
      margin: sizes.WIDTH * 0.01,
    },
    providerscard: {
      paddingLeft: sizes.WIDTH * 0.04,
      display: 'flex',
      flexDirection: 'row',
    },
    providernames: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.BLACK,
      paddingLeft: sizes.WIDTH * 0.04,
    },
    providerimg: {
      width: sizes.WIDTH * 0.2,
      height: sizes.HEIGHT * 0.1,
      borderRadius: sizes.WIDTH * 0.05,
    },
    star: {
      marginLeft: sizes.WIDTH * 0.04,
      marginTop: sizes.HEIGHT * 0.004,
    },
    topRatedSellerHeading: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.BLACK,
      fontSize: sizes.FONT_SIZE_HEADER,
      paddingLeft: sizes.WIDTH * 0.03,
      marginTop: sizes.HEIGHT * 0.015,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
