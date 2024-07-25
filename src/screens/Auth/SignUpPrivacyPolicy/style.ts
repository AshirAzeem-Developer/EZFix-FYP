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
    scrollViewContent: {
      flexGrow: 1,
      paddingBottom: sizes.HEIGHT * 0.16,
      // backgroundColor: 'red',
    },
    textCont: {
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: sizes.HEIGHT * 0.065,
      marginBottom: sizes.HEIGHT * 0.045,
      // backgroundColor: 'red',
    },

    PolicyTermCont: {
      width: '100%',
      paddingHorizontal: sizes.WIDTH * 0.05,
      paddingVertical: sizes.HEIGHT * 0.025,
      backgroundColor: colors.LIGHT_GRAY100,
    },
    PolicyTermHeadTxt: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.05,
      color: colors.BLACK,
      marginBottom: sizes.HEIGHT * 0.025,
    },

    PolicyTermPeraTxt: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.035,
      color: colors.BLACK,
    },
    creatNewTxt: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.0625,
      color: colors.BLACK,
    },

    circleCont: {
      width: sizes.WIDTH * 0.058,
      height: sizes.WIDTH * 0.058,
      borderRadius: (sizes.WIDTH * 100) / 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: sizes.WIDTH * 0.0025,
      borderColor: colors.LIGHT_GRAY200,
      marginRight: sizes.WIDTH * 0.025,
      marginTop: sizes.HEIGHT * 0.035,
    },
    IAcceptTxt: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.035,
      color: colors.BLACK,

      marginTop: sizes.HEIGHT * 0.032,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
