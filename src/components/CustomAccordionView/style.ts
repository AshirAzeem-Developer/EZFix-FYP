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
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: sizes.WIDTH * 0.05,
      paddingVertical: sizes.WIDTH * 0.055,
      borderBottomWidth: sizes.WIDTH * 0.001,
      borderBottomColor: colors.LIGHT_GRAY,
      backgroundColor: colors.WHITE,
      marginTop: sizes.HEIGHT * 0.025,
    },
    headerText: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.04,
      color: colors.BLACK,
    },
    content: {
      marginHorizontal: sizes.WIDTH * 0.06,
      backgroundColor: '#fff',
      padding: sizes.WIDTH * 0.02,
    },
    contentTxt: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.035,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
