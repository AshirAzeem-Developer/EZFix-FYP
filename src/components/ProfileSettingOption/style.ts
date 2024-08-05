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
    settingsOptionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: sizes.WIDTH * 0.05,
      paddingVertical: sizes.HEIGHT * 0.03,
      width: sizes.WIDTH * 1,
      borderBottomWidth: 1,
    },
    settingOptionText: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.04,
      marginLeft: sizes.WIDTH * 0.03,
      color: 'black',
    },
    leftContainer: {flexDirection: 'row', alignItems: 'center'},
    leftIconStyles: {
      width: sizes.WIDTH * 0.08,
      alignSelf: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
