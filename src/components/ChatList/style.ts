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
      backgroundColor: colors.BACKGROUND,
      margin: sizes.WIDTH * 0.029,
      marginBottom: 0,
    },
    name: {
      color: colors.BLACK,
      fontSize: sizes.FONT_SIZE_TITLE,
      fontWeight: 'bold',
      // padding:sizes.WIDTH*0.023
    },
    contacts: {
      display: 'flex',
      flexDirection: 'row',
      paddingBottom: sizes.WIDTH * 0.05,
      padding: sizes.WIDTH * 0.01,
      paddingTop: sizes.WIDTH * 0.04,
      // borderWidth:sizes.BORDER_RADIUS,
      borderBottomWidth: sizes.WIDTH * 0.001,
    },
    chat: {
      color: colors.BLACK,
      fontSize: sizes.FONTSIZE_MEDIUM,
    },
    cards: {
      padding: sizes.WIDTH * 0.01,
      paddingLeft: sizes.WIDTH * 0.03,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
