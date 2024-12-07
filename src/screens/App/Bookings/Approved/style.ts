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
      backgroundColor: '#fff',
      padding: sizes.WIDTH * 0.029,
    },
    providers: {
      margin: sizes.WIDTH * 0.01,
    },
    providerscard: {
      marginTop: sizes.HEIGHT * 0.02,
      // display: 'flex',
      // flexDirection: 'row',
      backgroundColor: 'rgba(0, 128, 0, 0.2)',

      borderRadius: sizes.WIDTH * 0.03,

      // elevation: 4,
      width: sizes.WIDTH * 0.92,
      alignSelf: 'center',
      // paddingHorizontal: sizes.WIDTH * 0.02,
    },

    providerimg: {
      width: sizes.WIDTH * 0.35,
      height: sizes.WIDTH * 0.35,
      borderRadius: sizes.WIDTH * 0.01,

      margin: sizes.WIDTH * 0.015,
      marginTop: sizes.WIDTH * 0.03,
    },
    providerViewimg: {
      width: sizes.WIDTH * 0.31,
      height: sizes.WIDTH * 0.31,
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
      lineHeight: sizes.HEIGHT * 0.02,
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
      color: colors.GREEN,
    },
    statuscontainer: {
      flexDirection: 'row',
      paddingTop: sizes.HEIGHT * 0.01,
    },
    provivder: {
      flexDirection: 'column',
      padding: sizes.WIDTH * 0.01,
    },
    items: {
      padding: sizes.WIDTH * 0.02,
    },
    bookbutton: {
      padding: sizes.WIDTH * 0.034,
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
    btnContainer: {
      width: sizes.WIDTH * 0.9,
      flexDirection: 'row',
      marginVertical: sizes.HEIGHT * 0.01,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    btnStopTrackingStyles: {
      width: sizes.WIDTH * 0.4,
      height: sizes.HEIGHT * 0.038,
    },
    btnStartTrackingStyles: {
      width: sizes.WIDTH * 0.4,
      height: sizes.HEIGHT * 0.038,
    },
    btnStartJobStyles: {
      width: sizes.WIDTH * 0.4,
      height: sizes.HEIGHT * 0.038,
    },
    seekerCont: {
      backgroundColor: 'rgba(0,128,0,0.2)',
      width: sizes.WIDTH * 0.9,
      height: sizes.HEIGHT * 0.14,
      marginBottom: sizes.HEIGHT * 0.02,
      marginHorizontal: sizes.WIDTH * 0.02,
      alignSelf: 'center',
      borderRadius: sizes.WIDTH * 0.02,
    },
    detailsCont: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginLeft: sizes.WIDTH * 0.02,
    },
    seekerDetails: {
      width: sizes.WIDTH * 0.14,
      height: sizes.HEIGHT * 0.07,
      borderRadius: sizes.WIDTH * 1,
      margin: sizes.WIDTH * 0.015,
      marginTop: sizes.WIDTH * 0.03,
    },
    locationCont: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    locationIcon: {
      width: sizes.WIDTH * 0.03,
      height: sizes.HEIGHT * 0.02,
      marginTop: sizes.WIDTH * 0.007,
    },
    seekerBtnsContainer: {
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'flex-end',
      marginRight: sizes.WIDTH * 0.02,
    },
    chatNowBtn: {
      width: sizes.WIDTH * 0.32,
      height: sizes.HEIGHT * 0.038,
      marginLeft: sizes.WIDTH * 0.02,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
