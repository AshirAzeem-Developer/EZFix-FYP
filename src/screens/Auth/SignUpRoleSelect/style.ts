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
      backgroundColor: colors.whiteSmoke,
    },
    firstCont: {
      width: '100%',
    },
    textCont: {
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: sizes.HEIGHT * 0.065,
      marginBottom: sizes.HEIGHT * 0.03,
      // backgroundColor: 'red',
    },
    creatNewTxt: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.0625,
      color: colors.BLACK,
    },
    /**************roleCont***************** */
    roleMainCont: {
      width: '100%',
      // backgroundColor: 'red',
    },

    singleRoleCont: {
      width: '90%',
      height: sizes.HEIGHT * 0.11,
      flexDirection: 'row',
      alignSelf: 'center',
      backgroundColor: colors.WHITE,
      marginTop: sizes.HEIGHT * 0.023,
      marginBottom: sizes.HEIGHT * 0.0125,
      paddingLeft: sizes.WIDTH * 0.07,
      borderRadius: sizes.WIDTH * 0.025,
      // shado
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },

    activeBorderBottom: {
      borderBottomColor: colors.MAIN_GREEN,
      borderBottomWidth: sizes.WIDTH * 0.005,
      borderBottomLeftRadius: sizes.WIDTH * 0.015,
    },
    roleNameTxtCont: {
      width: '40%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'flex-start',
      // backgroundColor: 'pink',
    },
    roleNameTxt: {
      ...globalStyles.TEXT_STYLE_BOLD_ITALIC,
      color: colors.BLACK,
      textAlign: 'left',
      fontSize: sizes.WIDTH * 0.06,
    },
    roleImgCont: {
      width: '50%',
      height: '100%',
      marginLeft: sizes.WIDTH * 0.045,
      // backgroundColor: 'green',
    },
    SkewedRectangleImgCont: {
      height: '100%',
      position: 'absolute',
      bottom: 0,
      overflow: 'hidden',
      // backgroundColor: 'purple',
    },
    SkewedRectangleImg: {
      width: sizes.WIDTH * 0.4,
      height: sizes.HEIGHT * 0.11,
    },
    roleImg: {
      bottom: sizes.WIDTH * 0.02,
      right: sizes.WIDTH * 0.045,
      width: '100%',
      height: '110%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    arrowIconIcon: {
      width: sizes.WIDTH * 0.08,

      height: sizes.HEIGHT * 0.03,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: sizes.HEIGHT * 0.002,
      right: sizes.WIDTH * 0.01,
      // backgroundColor: 'red',
    },
    /**************roleCont end***************** */

    saveButtonCont: {
      width: '100%',
      height: sizes.HEIGHT * 0.125,
      position: 'absolute',
      bottom: 0,

      alignItems: 'center',
      backgroundColor: colors.WHITE,
      // for IOS
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      // FOR ANDOIRD
      elevation: 7,
    },
    saveButton: {
      marginTop: sizes.HEIGHT * 0.0225,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
