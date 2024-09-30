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
    providerdetail: {
      paddingVertical: sizes.WIDTH * 0.01,
      paddingLeft: sizes.WIDTH * 0.03,
      paddingBottom: sizes.WIDTH * 0.1,
    },
    name: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.08,

      paddingTop: sizes.HEIGHT * 0.03,
    },
    card: {
      width: sizes.WIDTH * 0.45,
      paddingLeft: sizes.WIDTH * 0.01,
      paddingTop: sizes.WIDTH * 0.04,

      //  height:sizes.WIDTH*0.2
      flexDirection: 'row',
      // justifyContent:"space-evenly"
    },
    card2: {
      width: sizes.WIDTH * 0.45,
      paddingLeft: sizes.WIDTH * 0.01,

      //  height:sizes.WIDTH*0.2
      flexDirection: 'row',
      // justifyContent:"space-evenly"
      paddingTop: sizes.HEIGHT * 0.02,
    },
    bookings: {
      width: sizes.WIDTH * 0.45,
      height: sizes.HEIGHT * 0.12,
      borderColor: colors.GREEN,
      borderWidth: sizes.WIDTH * 0.003,
      margin: sizes.WIDTH * 0.02,
      padding: sizes.WIDTH * 0.02,
      borderRadius: sizes.WIDTH * 0.03,
      elevation: 5,
      backgroundColor: colors.WHITE,
    },
    services: {
      width: sizes.WIDTH * 0.45,
      borderRadius: sizes.BORDER_RADIUS * 3,
      borderColor: 'green',
      borderWidth: sizes.WIDTH * 0.004,
      //  padding:sizes.WIDTH*0.066
      marginLeft: sizes.WIDTH * 0.047,
      paddingBottom: sizes.WIDTH * 0.035,
    },
    servicesinner: {
      paddingLeft: sizes.WIDTH * 0.053,
    },
    bookingimg: {
      width: sizes.WIDTH * 0.13,
      height: sizes.HEIGHT * 0.06,
      alignSelf: 'flex-end',
      marginRight: sizes.WIDTH * 0.02,
      marginTop: sizes.WIDTH * 0.01,
      // borderRadius: sizes.WIDTH * 0.02,
    },
    welcomeBackText: {
      ...globalStyles.TEXT_STYLE,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.045,
    },
    cardLabel: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.GRAY,
    },
    monthlyRevenueText: {
      color: colors.GRAY,
      marginTop: sizes.HEIGHT * 0.04,
      marginVertical: sizes.HEIGHT * 0.022,
      fontSize: sizes.WIDTH * 0.07,
      alignSelf: 'center',
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
