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
    textCont: {
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: sizes.HEIGHT * 0.065,
      marginBottom: sizes.HEIGHT * 0.065,
      // backgroundColor: 'red',
    },
    signUpTxt: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.07,
      color: colors.BLACK,
    },
    inputRightCont: {
      width: width * 0.075,
      height: width * 0.075,
      borderRadius: (sizes.WIDTH * 0.1) / 2,
      backgroundColor: colors.PRIMARY,
    },
    wellCheckTxt: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.04,
      color: colors.BLACK,
      marginLeft: sizes.WIDTH * 0.067,
    },
    sendCodeButtonCont: {
      width: '100%',
      height: sizes.HEIGHT * 0.16,
      position: 'absolute',
      bottom: 0,
      // justifyContent: 'center',
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
    snedCodeButton: {
      marginTop: sizes.HEIGHT * 0.0225,
      marginBottom: sizes.HEIGHT * 0.0225,
    },
    alreadyJoinTxt: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.04,
      color: colors.BLACK,
    },
    loginTxt: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.04,
      color: colors.PRIMARY,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
