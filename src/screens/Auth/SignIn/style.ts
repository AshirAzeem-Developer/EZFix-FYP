import {StyleSheet, Dimensions} from 'react-native';

// local
import {useColors} from '../../../constants/color';
import {useSizes} from '../../../constants/size';
import {getGlobalStyles} from '../../../constants/GlobalStyle';

// dimension
const {width, height} = Dimensions.get('window');

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: colors.WHITE,
      alignItems: 'center',
      width: width * 1,
      height: height * 1,
    },
    headerRightViewStyles: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      alignSelf: 'flex-end',
      paddingRight: sizes.WIDTH * 0.05,
      marginTop: sizes.HEIGHT * 0.02,
    },
    heaaderSignupText: {
      ...globalStyles.TEXT_STYLE_BOLD,

      flexDirection: 'row',
      alignItems: 'center',
      fontSize: sizes.FONT_SIZE_TITLE,
    },
    nowHereText: {
      ...globalStyles.TEXT_STYLE,
      color: colors.GRAY,
      fontSize: sizes.FONT_SIZE_TITLE,
    },
    logoImgCont: {
      alignSelf: 'flex-start',
      paddingLeft: sizes.PADDING,
    },
    logoImg: {
      height: sizes.HEIGHT * 0.12,
      width: sizes.LOGO_SIZE,
    },
    inputFieldsCont: {},
    loginToContinueCont: {
      alignSelf: 'flex-start',
      paddingLeft: sizes.WIDTH * 0.06,
    },
    loginToContinueText: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.FONTSIZE * 1.5,
    },
    forgotPass: {
      ...globalStyles.TEXT_STYLE_BOLD,
      marginTop: sizes.HEIGHT * 0.02,
      fontSize: sizes.FONTSIZE_HIGH,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};

export default useStyles;
