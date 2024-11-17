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
        height: sizes.HEIGHT*0.07,
         backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        paddingHorizontal: sizes.WIDTH*0.05,
      },
      iconContainer: {
        width: sizes.WIDTH*0.1,
        height: sizes.HEIGHT*0.1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      title: {
        fontSize: sizes.FONT_SIZE_HEADER,
        color: 'black',
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
      },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
