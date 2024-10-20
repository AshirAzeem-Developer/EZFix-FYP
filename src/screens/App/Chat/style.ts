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
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
      flex: 1,
      margin: sizes.WIDTH * 0.01,
    },
    flatList: {
      flexGrow: 1,
    },
    friendName: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.04,
    },
    messageText: {
      ...globalStyles.TEXT_STYLE,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.035,
    },
    image: {
      width: width * 0.13,
      height: width * 0.13,
      borderRadius: width * 1,
      marginRight: sizes.WIDTH * 0.025,
    },
    friendListContainer: {
      padding: sizes.WIDTH * 0.02,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
