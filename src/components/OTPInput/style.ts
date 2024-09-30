import {StyleSheet, Dimensions} from 'react-native';
// local
import {useColors} from '../../constants/color';
import {useSizes} from '../../constants/size';
import {getGlobalStyles} from '../../constants/GlobalStyle';
// dimenstion
const {width, height} = Dimensions.get('window');
const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);
  const styles = StyleSheet.create({
    container: {
      width: '90%',
      alignSelf: 'center',
    },
    enterCodeTxt: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.05,
      color: colors.BLACK,
    },
    otpCon: {
      flexDirection: 'row',
      marginTop: sizes.HEIGHT * 0.025,
    },
    input: {
      ...globalStyles.TEXT_STYLE,
      borderColor: colors.LIGHT_GRAY,
      borderWidth: sizes.WIDTH * 0.0015,
      borderRadius: sizes.WIDTH * 0.025,
      textAlign: 'center',
      textAlignVertical: 'center',
      width: sizes.HEIGHT * 0.065,
      height: sizes.HEIGHT * 0.065,
      marginRight: sizes.WIDTH * 0.022,
      // font style
      color: colors.WHITE,
      padding: 0,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
