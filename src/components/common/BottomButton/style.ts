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
    Container: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
    ButtonCont: {
      height: sizes.BOTTOM_BUTTON_HEIGHT,

      alignItems: 'center',
      backgroundColor: colors.WHITE,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
