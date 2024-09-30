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
      marginTop: sizes.HEIGHT * 0.025,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
    },
    textArea: {
      height: sizes.HEIGHT * 0.15,
      padding: sizes.WIDTH * 0.03,
      borderColor: 'gray',
      fontSize: sizes.WIDTH * 0.038,
      textAlignVertical: 'top', // Ensures text starts from the top
      color: colors.BLACK,
    },
    charCount: {
      ...globalStyles.TEXT_STYLE_BOLD,
      textAlign: 'right',
      color: 'gray',
      paddingHorizontal: '5%',
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
