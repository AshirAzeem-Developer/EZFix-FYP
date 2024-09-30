import {StyleSheet, Dimensions} from 'react-native';
// local
import {useColors} from '../../constants/color';
import {useSizes} from '../../constants/size';
import {getGlobalStyles} from '../../constants/GlobalStyle';
import {isAndroid} from '../../utils/constants';
// dimenstion
const {width, height} = Dimensions.get('window');
const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);
  const styles = StyleSheet.create({
    notificationOptionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',

      paddingHorizontal: sizes.WIDTH * 0.05,
      // marginTop: sizes.HEIGHT * 0.04,
      paddingVertical: sizes.HEIGHT * 0.03,
      borderBottomWidth: sizes.HEIGHT * 0.0004,
      width: sizes.WIDTH * 1,
    },
    text: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.04,
      color: 'black',
    },
    switchStyles: {
      // WIDTH: sizes.WIDTH * 0.2,
      transform: [{scaleX: isAndroid ? 1 : 0.7}, {scaleY: isAndroid ? 1 : 0.7}],
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
