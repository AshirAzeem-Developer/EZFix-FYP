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
      width: '100%',
      height: sizes.HEIGHT * 0.065,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: sizes.HEIGHT * 0.025,
      // backgroundColor: 'red',
    },
    greyBottomBorder: {
      borderBottomColor: colors.LIGHT_GRAY200,
      borderBottomWidth: sizes.WIDTH * 0.001,
    },
    blackBottomBorder: {
      borderBottomColor: colors.BLACK,
      borderBottomWidth: sizes.WIDTH * 0.001,
    },
    leftIconCont: {
      width: '22%',
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'orange',
    },
    textInp: {
      ...globalStyles.TEXT_STYLE,
      width: '70%',
      height: '100%',
      color: colors.BLACK,
      fontSize: sizes.FONTSIZE,

      // backgroundColor: 'blue',
    },
    rightIconCon: {
      width: sizes.WIDTH * 0.075,
      height: sizes.WIDTH * 0.075,
      borderRadius: (sizes.WIDTH * 0.1) / 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.MAIN_GREEN,
    },
    emptyRightIconCont: {
      width: sizes.WIDTH * 0.075,
      height: sizes.WIDTH * 0.075,
    },
    rightIcon: {},
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
