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
      borderRadius: sizes.WIDTH * 0.02,
      // backgroundColor: 'red',
    },
    greyBottomBorder: {
      borderBottomColor: colors.GRAY,
      borderBottomWidth: width * 0.001,
    },
    blackBottomBorder: {
      borderBottomColor: colors.PRIMARY,
      borderBottomWidth: width * 0.002,
    },
    leftIconCon: {
      width: '10%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'pink',
    },
    leftIcon: {
      width: sizes.WIDTH * 0.05,
      height: sizes.WIDTH * 0.05,
    },
    textInp: {
      ...globalStyles.TEXT_STYLE,
      height: '100%',
      width: '80%',
      color: colors.BLACK,
      // backgroundColor: 'blue',
    },
    emptyRightIconCont: {
      width: '10%',
      height: '100%',
      // backgroundColor: 'pink',
    },
    rightIconCon: {
      width: '10%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'orange',
    },
    rightIcon: {width: sizes.WIDTH * 0.05, height: sizes.WIDTH * 0.045},
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
