import {StyleSheet, Dimensions} from 'react-native';
// local
import {useColors} from '../../constants/color';
import {useSizes} from '../../constants/size';
import {getGlobalStyles} from '../../constants/GlobalStyle';
// dimenstion

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.WHITE,
    },

    textImgCont: {
      width: '90%',
      alignItems: 'center',
    },
    optSendImg: {
      marginBottom: sizes.HEIGHT * 0.025,
    },
    titleTxt: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.FONTSIZE_HIGH,
      color: colors.BLACK,
      marginBottom: sizes.HEIGHT * 0.035,
    },
    firstDesTxt: {
      // ...globalStyles.TEXT_STYLE,
      color: colors.LIGHT_GRAY,
    },
    secondDesTxt: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.043,
      color: colors.BLACK,
    },
    sendCodeButtonCont: {
      width: '100%',

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
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
