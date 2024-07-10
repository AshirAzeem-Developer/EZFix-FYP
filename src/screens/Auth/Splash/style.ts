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
    container: {
      flexDirection: 'column',
      backgroundColor: colors.WHITE,
      alignItems: 'center',
      justifyContent: 'center',
      width: width * 1,
      height: height * 1,
    },

    img: {
      height: sizes.WIDTH * 0.6,
      width: sizes.WIDTH * 0.6,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};

export default useStyles;
