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
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#fff',
      borderRadius: sizes.WIDTH * 0.1,
      padding: sizes.WIDTH * 0.03,

      elevation: 2,
    },
    icon: {
      marginHorizontal: sizes.WIDTH * 0.02,
      color: colors.PRIMARY,
    },
    input: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.FONTSIZE_HIGH,
      padding: sizes.WIDTH * 0.002,
      alignSelf: 'flex-start',
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
