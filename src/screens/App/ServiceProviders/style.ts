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
      padding: sizes.WIDTH * 0.01,
    },
   
   
   

   
  
    providers: {
      margin: sizes.WIDTH * 0.01,
    },
    providerscard: {
      paddingLeft: sizes.WIDTH * 0.04,
      display: 'flex',
      flexDirection: 'row',
    },
    providernames: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.BLACK,
      paddingLeft: sizes.WIDTH * 0.04,
    },
    providerimg: {
      width: sizes.WIDTH * 0.2,
      height: sizes.HEIGHT * 0.1,
      borderRadius: sizes.WIDTH * 0.05,
    },
    star: {
      marginLeft: sizes.WIDTH * 0.04,
      marginTop: sizes.HEIGHT * 0.004,
    },

  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
