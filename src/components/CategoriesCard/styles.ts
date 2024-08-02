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
    categoryContainer: {
      flex: 1,
    },
    category: {
      width: sizes.WIDTH * 0.22,
      height: sizes.HEIGHT * 0.12,
      backgroundColor: '#fff',
      borderRadius: sizes.WIDTH * 0.02,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 2,

      // backgroundColor: 'red',
    },
    image: {
      width: sizes.WIDTH * 0.12,
      height: sizes.HEIGHT * 0.06,
      // borderRadius: sizes.WIDTH * 0.5,
    },
    catname: {
      marginTop: height * 0.01,
      textAlign: 'center',
      fontSize: width * 0.03,
      fontWeight: 'bold',
      color: 'black',
    },
    categoriesContainer: {
      margin: sizes.WIDTH * 0.04,
    },
    contentContainerStyle: {
      paddingHorizontal: sizes.WIDTH * 0.05,
    },
    allCategories: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.06,
      color: colors.BLACK,
      textAlign: 'center',
      marginVertical: sizes.HEIGHT * 0.02,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
