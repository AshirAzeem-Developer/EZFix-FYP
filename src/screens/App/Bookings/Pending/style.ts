import {StyleSheet, Dimensions} from 'react-native';
// local
import {useColors} from '../../../../constants/color';
import {useSizes} from '../../../../constants/size';
import {getGlobalStyles} from '../../../../constants/GlobalStyle';
// dimenstion
const {width, height} = Dimensions.get('window');
const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      padding: sizes.WIDTH * 0.029,
    },
    providers: {
      margin: sizes.WIDTH * 0.01,
    },
    providerscard: {
      marginTop: sizes.HEIGHT * 0.02,
      // display: 'flex',
      // flexDirection: 'row',
      borderRadius: sizes.WIDTH * 0.03,
      backgroundColor: 'rgba(0, 128, 0, 0.2)',

      // elevation: 4,
      width: sizes.WIDTH * 0.95,
      alignSelf: 'center',
    },

    providerimg: {
      width: sizes.WIDTH * 0.35,
      height: sizes.HEIGHT * 0.2,
      borderRadius: sizes.WIDTH * 0.02,

      margin: sizes.WIDTH * 0.015,
      marginTop: sizes.WIDTH * 0.03,
    },
    providerViewimg: {
      width: sizes.WIDTH * 0.35,
      height: sizes.WIDTH * 0.35,
      borderRadius: sizes.WIDTH * 0.03,

      margin: sizes.WIDTH * 0.015,
      marginTop: sizes.WIDTH * 0.03,
    },
    job: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.05,
      paddingTop: sizes.HEIGHT * 0.012,
    },
    work: {
      ...globalStyles.TEXT_STYLE,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.035,
      paddingTop: sizes.HEIGHT * 0.003,
      width: sizes.WIDTH * 0.5,
    },
    time: {
      flexDirection: 'row',
      paddingTop: sizes.HEIGHT * 0.002,
    },
    clock: {
      width: sizes.WIDTH * 0.04,
      height: sizes.HEIGHT * 0.02,
      marginTop: sizes.WIDTH * 0.007,
    },
    timer: {
      color: colors.BLACK,
      paddingLeft: sizes.WIDTH * 0.01,
    },
    status: {
      color: colors.SKY_BLUE,
    },
    statuscontainer: {
      flexDirection: 'row',
      paddingTop: sizes.HEIGHT * 0.02,
    },
    provivder: {
      flexDirection: 'row',
      padding: sizes.WIDTH * 0.01,
    },
    items: {
      padding: sizes.WIDTH * 0.02,
    },
    btnStyles: {
      width: sizes.WIDTH * 0.33,
      height: sizes.HEIGHT * 0.038,
      marginLeft: sizes.WIDTH * 0.099,
      marginTop: sizes.WIDTH * 0.03,
      paddingLeft: sizes.WIDTH * 0.001,
      paddingRight: sizes.WIDTH * 0.001,
    },
    rejectBtn: {
      width: sizes.WIDTH * 0.22,
      height: sizes.HEIGHT * 0.038,
    },

    btnAccept: {
      width: sizes.WIDTH * 0.22,
      height: sizes.HEIGHT * 0.038,
      marginLeft: sizes.WIDTH * 0.02,
    },
    bookbutton: {
      padding: sizes.WIDTH * 0.034,
    },
    providerMainContainer: {
      backgroundColor: 'rgba(0,128,0,0.2)',
      // backgroundColor: 'red',
      width: sizes.WIDTH * 0.9,
      height: sizes.HEIGHT * 0.14,
      marginBottom: sizes.HEIGHT * 0.02,
      marginHorizontal: sizes.WIDTH * 0.02,
      alignSelf: 'center',
      borderRadius: sizes.WIDTH * 0.02,
    },
    container1: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginLeft: sizes.WIDTH * 0.02,
    },
    buttonsContainer: {
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'flex-end',
      marginRight: sizes.WIDTH * 0.02,
    },
    callBtnStyles: {
      width: sizes.WIDTH * 0.25,
      height: sizes.HEIGHT * 0.038,
      marginLeft: sizes.WIDTH * 0.02,
    },
    chatNowBtn: {
      width: sizes.WIDTH * 0.32,
      height: sizes.HEIGHT * 0.038,
      marginLeft: sizes.WIDTH * 0.02,
    },
    locationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    locationIcon: {
      width: sizes.WIDTH * 0.03,
      height: sizes.HEIGHT * 0.02,
      marginTop: sizes.WIDTH * 0.007,
    },
    seekerName: {
      fontSize: sizes.WIDTH * 0.045,
      fontWeight: 'bold',
    },
    nameAndLocationContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginLeft: sizes.WIDTH * 0.03,
    },
    providerImage: {
      width: sizes.WIDTH * 0.14,
      height: sizes.HEIGHT * 0.07,
      borderRadius: sizes.WIDTH * 1,
      margin: sizes.WIDTH * 0.015,
      marginTop: sizes.WIDTH * 0.03,
    },
    btnContainer: {
      flexDirection: 'row',
      marginVertical: sizes.HEIGHT * 0.01,
    },
    viewDetailsText: {
      color: colors.BLACK,
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
