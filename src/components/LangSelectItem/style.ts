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
    selectedContainer: {
      backgroundColor: 'rgba(131,197,190,0.5)',

      borderColor: colors.BLACK,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: sizes.HEIGHT * 0.015,
      paddingHorizontal: sizes.WIDTH * 0.03,
      width: sizes.WIDTH * 0.9,
      alignSelf: 'center',
      marginVertical: sizes.HEIGHT * 0.01,
      borderWidth: sizes.WIDTH * 0.005,
      borderRadius: sizes.WIDTH * 0.02,
    },
    container: {
      backgroundColor: colors.BACKGROUND,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: sizes.HEIGHT * 0.015,
      paddingHorizontal: sizes.WIDTH * 0.03,
      width: sizes.WIDTH * 0.9,

      alignSelf: 'center',
      marginVertical: sizes.HEIGHT * 0.01,
      borderWidth: sizes.WIDTH * 0.005,
      borderColor: 'rgba(182,182,182, 0.4)',
      borderRadius: sizes.WIDTH * 0.02,
    },
    titleIconWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: sizes.WIDTH * 0.01,
    },
    langTitle: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.FONTSIZE_HIGH,
      color: colors.BLACK,
      //   fontFamily: Roboto.Medium,
      marginHorizontal: sizes.WIDTH * 0.01,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
