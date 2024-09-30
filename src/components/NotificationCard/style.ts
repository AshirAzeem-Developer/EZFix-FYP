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
    messageContainer: {
      flexDirection: 'row',
      padding: sizes.WIDTH * 0.03,
      margin: sizes.WIDTH * 0.02,
      backgroundColor: 'rgba(0, 128, 0, 0.3)',
      borderRadius: sizes.WIDTH * 0.03,
    },
    userImage: {
      width: sizes.WIDTH * 0.17,
      height: sizes.HEIGHT * 0.08,
      borderRadius: 25,
      marginRight: 10,
    },
    textContainer: {
      flex: 1,
    },
    userName: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#000',
    },
    time: {
      fontSize: 12,
      color: '#666',
    },
    text: {
      marginVertical: sizes.HEIGHT * 0.01,
      fontSize: 14,
      color: '#000000',
    },
    nameTimeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
