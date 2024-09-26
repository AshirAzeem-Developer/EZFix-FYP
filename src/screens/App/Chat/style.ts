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
      backgroundColor: '#fff',
      margin: sizes.WIDTH * 0.01,
    },
     search: {
      paddingTop: sizes.HEIGHT * 0.04,
       padding: sizes.WIDTH * 0.014,
    
    },
    
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
