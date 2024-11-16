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
      color: colors.BLACK,
      marginTop: sizes.HEIGHT * 0.02,
    },

    saveButton: {
      marginTop: sizes.HEIGHT * 0.0225,
    },

    /******************[cameraMainCont]*********************** */
    cameraMainCont: {
      flexDirection: 'column',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      backgroundColor: colors.BLACK,
    },
    topCameraTxtCont: {
      width: '95%',
      alignSelf: 'center',
    },
    topCameraTxt: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.065,
      color: colors.WHITE,
    },
    camera: {
      position: 'relative',
      // top: sizes.HEIGHT * 0.00,
      width: '95%',
      height: sizes.HEIGHT * 0.35,
      // marginTop: sizes.HEIGHT * 0.05,
      marginBottom: sizes.HEIGHT * 0.025,
    },
    noPhotoCopTxt: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.035,
      color: colors.WHITE,
    },

    cameraButtonMainCont: {
      width: sizes.WIDTH * 0.24,
      height: sizes.WIDTH * 0.24,
      borderRadius: (sizes.WIDTH * 100) / 2,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: sizes.HEIGHT * 0.08,
      backgroundColor: '#393939',
    },

    cameraButtonInnerCont: {
      width: sizes.WIDTH * 0.19,
      height: sizes.WIDTH * 0.19,
      borderRadius: (sizes.WIDTH * 100) / 2,

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
