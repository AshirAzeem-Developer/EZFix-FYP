import {StyleSheet, Dimensions} from 'react-native';
// local
import {useColors} from '../../../../constants/color';
import {useSizes} from '../../../../constants/size';
import {getGlobalStyles} from '../../../../constants/GlobalStyle';
// dimenstion
const {width, height} = Dimensions.get('window');
const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      padding: sizes.WIDTH * 0.029,
    },
    providers: {
      margin: sizes.WIDTH * 0.01,
    },
    providerscard: {
      marginTop: sizes.HEIGHT * 0.02,
      // display: 'flex',
      // flexDirection: 'row',
      backgroundColor: 'rgba(0, 128, 0, 0.2)',

      borderRadius: sizes.WIDTH * 0.03,

      // elevation: 4,
      width: sizes.WIDTH * 0.95,
      alignSelf: 'center',
    },

    providerimg: {
      width: sizes.WIDTH * 0.3,
      height: sizes.WIDTH * 0.3,
      borderRadius: sizes.WIDTH * 0.01,

      margin: sizes.WIDTH * 0.015,
      marginTop: sizes.WIDTH * 0.03,
    },
    providerViewimg: {
      width: sizes.WIDTH * 0.35,
      height: sizes.HEIGHT * 0.2,
      borderRadius: sizes.WIDTH * 0.03,

      margin: sizes.WIDTH * 0.015,
      marginTop: sizes.WIDTH * 0.03,
    },
    job: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.05,
      paddingTop: sizes.HEIGHT * 0.012,
    },
    work: {
      ...globalStyles.TEXT_STYLE,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.035,
      paddingTop: sizes.HEIGHT * 0.003,
      width: sizes.WIDTH * 0.5,
    },
    time: {
      flexDirection: 'row',
      paddingTop: sizes.HEIGHT * 0.002,
    },
    clock: {
      width: sizes.WIDTH * 0.04,
      height: sizes.HEIGHT * 0.02,
      marginTop: sizes.WIDTH * 0.007,
    },
    timer: {
      color: colors.BLACK,
      paddingLeft: sizes.WIDTH * 0.01,
    },
    status: {
      color: colors.RED,
    },
    statuscontainer: {
      flexDirection: 'row',
      paddingTop: sizes.HEIGHT * 0.02,
    },
    provivder: {
      flexDirection: 'row',
      padding: sizes.WIDTH * 0.01,
    },
    items: {
      padding: sizes.WIDTH * 0.02,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
