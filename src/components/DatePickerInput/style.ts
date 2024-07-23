// local
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
      width: '10%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'orange',
    },
    leftIcon: {},
    datePickerPlaceHolderCont: {
      width: '80%',
      height: '100%',
      justifyContent: 'center',
      // backgroundColor: 'green',
    },
    datePickerPlaceHolTxt: {
      ...globalStyles.TEXT_STYLE,
      color: colors.LIGHT_GRAY200,
    },
    selectDateTxt: {
      ...globalStyles.TEXT_STYLE,
      color: colors.BLACK,
    },
    datePickerPlaceHolderTxt: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.0625,
      color: colors.LIGHT_GRAY,
    },

    /*************************[DatePickerModalCont]************************* */
    DatePickerModalCont: {
      flex: 1,
      backgroundColor: colors.WHITE,
    },
    datePickerCont: {
      marginTop: sizes.HEIGHT * 0.125,
    },
    calanderRightArrow: {
      transform: [{rotate: '180deg'}],
    },
    dayComponentCont: {
      width: sizes.WIDTH * 0.085,
      height: sizes.WIDTH * 0.085,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: (sizes.WIDTH * 100) / 2,
    },
    datetxt: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.042,
    },
    /*************************[DatePickerModalCont END]************************* */
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
