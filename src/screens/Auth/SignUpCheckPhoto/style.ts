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

    screenTitleTxtCont: {
      width: '90%',
      alignSelf: 'center',
      marginTop: sizes.HEIGHT * 0.065,
      marginBottom: sizes.HEIGHT * 0.04,
      // backgroundColor: 'red',
    },
    screenTitleTxt: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.0625,
      color: colors.BLACK,
    },

    takenImgCon: {
      width: '90%',
      height: '27%',
      alignSelf: 'center',
      borderRadius: sizes.WIDTH * 0.025,
      backgroundColor: colors.LIGHT_GRAY100,
    },

    instructionTxt: {
      width: '90%',
      alignSelf: 'center',
      marginTop: sizes.HEIGHT * 0.05,
      // backgroundColor: 'red',
    },
    makeSureTxt: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.048,
      color: colors.BLACK,
    },
    singleInsCont: {
      width: '90%',
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: sizes.HEIGHT * 0.025,
      // backgroundColor: 'green',
    },
    singInstTxt: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.038,
      color: colors.BLACK,
      marginLeft: sizes.WIDTH * 0.025,
    },

    reTakeTxt: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.042,
      color: colors.BLACK,
    },
    saveButton: {
      // marginTop: height * 0.0225,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
