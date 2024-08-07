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
      backgroundColor: '#F6F6F6',
    },
    headerContainer: {
      marginBottom: sizes.HEIGHT * 0.015,
    },
    supportText: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: 'black',
      fontSize: sizes.WIDTH * 0.05,
      marginLeft: sizes.WIDTH * 0.06,
      marginTop: sizes.HEIGHT * 0.02,
    },
    descriptionContainer: {
      borderBottomWidth: sizes.WIDTH * 0.0008,
      borderBottomColor: 'grey',
    },
    buttonStyles: {
      alignSelf: 'center',
      marginTop: sizes.HEIGHT * 0.02,
    },
    buttonContainer: {
      width: '100%',
      height: sizes.HEIGHT * 0.125,
      position: 'absolute',
      bottom: 0,

      alignItems: 'center',
      backgroundColor: colors.WHITE,
      // for IOS
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      // FOR ANDOIRD
      elevation: 7,
    },
    btnTextStyles: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.WHITE,
    },
    firstDesStyle: {
      ...globalStyles.TEXT_STYLE,
      color: colors.GRAY,
      textAlign: 'center',
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
