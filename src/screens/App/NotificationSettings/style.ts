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
      backgroundColor: colors.BACKGROUND,
    },
    DateInfoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: '5%',
      paddingVertical: sizes.HEIGHT * 0.035,
      borderBottomWidth: 1,
      borderBottomColor: '#D9D9D9',
    },
    DateInfoContLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    DateInfo: {
      marginLeft: sizes.WIDTH * 0.035,
    },
    Date: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.04,

      color: colors.BLACK,
    },
    DateContStatusText: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.035,
      color: colors.BLACK,
    },
    GameScheduleText: {
      ...globalStyles.TEXT_STYLE,
      color: '#414141',
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
