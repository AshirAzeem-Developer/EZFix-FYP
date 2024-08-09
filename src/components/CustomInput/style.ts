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
    inputContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginLeft: sizes.WIDTH * 0.04,
    },
    textInput: {
      width: sizes.WIDTH * 0.8,
      fontSize: sizes.WIDTH * 0.041,
      color: '#757575',
      paddingVertical: sizes.HEIGHT * 0.01,
    },
    inputLabel: {
      fontSize: sizes.WIDTH * 0.035,
      color: colors.GRAY,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
