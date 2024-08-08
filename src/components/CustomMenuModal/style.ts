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
    modalContent: {
      height: sizes.HEIGHT * 0.35,
      backgroundColor: colors.WHITE,

      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: sizes.WIDTH * 0.03,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalTitle: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.048,
      marginVertical: sizes.HEIGHT * 0.02,
    },
    modalDescription: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.038,

      textAlign: 'center',
      marginBottom: sizes.HEIGHT * 0.02,
    },
    buttonCont: {
      flexDirection: 'row',
    },
    button: {
      width: sizes.WIDTH * 0.4,
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
