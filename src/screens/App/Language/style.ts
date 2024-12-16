import {StyleSheet, Dimensions} from 'react-native';
// local
import {useColors} from '../../../constants/color';
import {useSizes} from '../../../constants/size';
import {getGlobalStyles} from '../../../constants/GlobalStyle';
// dimenstion
const {width, height} = Dimensions.get('window');
const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);
  const styles = StyleSheet.create({
    langIconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    headingWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: sizes.HEIGHT * 0.01,
      width: sizes.WIDTH * 0.9,
      alignSelf: 'center',
    },
    heading: {
      ...globalStyles.TEXT_STYLE_BOLD,

      fontSize: sizes.WIDTH * 0.06,
      color: colors.BLACK,
      marginVertical: 20,
    },
    header: {
      // paddingHorizontal: '5%',
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
