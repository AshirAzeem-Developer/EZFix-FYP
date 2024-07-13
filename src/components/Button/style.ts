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
      borderRadius: sizes.WIDTH * 0.1,
      height: sizes.HEIGHT * 0.055,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    text: {
      ...globalStyles.TEXT_STYLE,
      color: colors.WHITE,
      fontSize: sizes.WIDTH * 0.045,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
