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
      backgroundColor: colors.WHITE,
    },
    firstCont: {
      width: '100%',
    },
    textCont: {
      width: '90%',
      alignSelf: 'center',
      marginTop: height * 0.065,
      marginBottom: height * 0.03,
      // backgroundColor: 'red',
    },
    marginStle: {
      marginBottom: height * 0.11,
    },
    verifyMemTxt: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.0625,
      color: colors.BLACK,
    },
    detailTxt: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.0425,
      color: theme.colors.dark,
      marginTop: height * 0.02,
    },

    saveButton: {
      marginTop: height * 0.0225,
    },

    /******************[cameraMainCont]*********************** */
    cameraMainCont: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      backgroundColor: theme.colors.dark,
    },
    topCameraTxtCont: {
      width: '95%',
      alignSelf: 'center',
    },
    topCameraTxt: {
      fontFamily: fonts.DMSans.Bold,
      fontSize: screen.width * 0.065,
      color: theme.colors.white,
    },
    camera: {
      width: '95%',
      height: height * 0.4,
      marginTop: height * 0.05,
      marginBottom: height * 0.025,
    },
    noPhotoCopTxt: {
      fontFamily: fonts.DMSans.Regular,
      fontSize: screen.width * 0.035,
      color: theme.colors.white,
    },

    cameraButtonMainCont: {
      width: width * 0.24,
      height: width * 0.24,
      borderRadius: (width * 100) / 2,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: height * 0.08,
      backgroundColor: '#393939',
    },

    cameraButtonInnerCont: {
      width: width * 0.19,
      height: width * 0.19,
      borderRadius: (width * 100) / 2,

      backgroundColor: '#CCCCCC',
    },
    /******************[cameraMainCont END]*********************** */
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
