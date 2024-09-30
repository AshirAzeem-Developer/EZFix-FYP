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
      width: sizes.WIDTH * 0.85,
      height: sizes.HEIGHT * 0.0075,
      backgroundColor: 'rgba(0,0,0 ,0.5)',
      borderRadius: sizes.WIDTH * 0.1,
      marginVertical: sizes.HEIGHT * 0.05,
      alignSelf: 'center',
    },
    progress: {
      height: '100%',
      borderRadius: sizes.WIDTH * 0.1,
      backgroundColor: colors.BLACK,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
