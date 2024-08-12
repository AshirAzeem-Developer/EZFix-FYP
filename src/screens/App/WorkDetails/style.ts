import {StyleSheet, Dimensions} from 'react-native';
// local
import {useColors} from '../../../constants/color';
import {useSizes} from '../../../constants/size';
import {getGlobalStyles} from '../../../constants/GlobalStyle';

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);
  const styles = StyleSheet.create({
    container: {},
    title: {
      ...globalStyles.TEXT_STYLE_BOLD_ITALIC,
      color: colors.BLACK,
      fontSize: sizes.FONT_SIZE_HEADER,
      textAlign: 'center',
    },
    textAreaContainer: {
      borderBottomWidth: 2,
      borderBottomColor: 'gray',
      marginHorizontal: 10,
      marginVertical: 20,
    },
    attachPhotosContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: sizes.WIDTH * 0.04,
    },
    attachPhotosTitle: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.FONTSIZE_HIGH,
      color: colors.BLACK,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
