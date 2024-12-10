import {StyleSheet, Dimensions} from 'react-native';
// local
import {useColors} from '../../../constants/color';
import {useSizes} from '../../../constants/size';
import {getGlobalStyles} from '../../../constants/GlobalStyle';

const {width, height} = Dimensions.get('window');
const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#F6F6F6',
    },
    headerContainer: {},
    headerView: {
      // marginBottom: screen.height * 0.015,
    },
    Heading: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.0625,
      color: colors.BLACK,
      marginTop: sizes.HEIGHT * 0.05,
      marginBottom: sizes.HEIGHT * 0.025,
      paddingLeft: '5%',
    },
    footer: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.04,
      color: colors.BLACK,
      position: 'absolute',
      textAlign: 'center',
      alignSelf: 'center',

      top: sizes.HEIGHT * 0.9,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
