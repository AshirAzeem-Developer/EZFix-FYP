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
  const theme = getGlobalStyles(sizes, colors);

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: '5%',
      justifyContent: 'space-between', // Adjusts spacing between arrow and text
      marginVertical: sizes.HEIGHT * 0.015,
      // backgroundColor: 'red,

      // height: sizes.height * 0.08,
    },
    arrowContainer: {
      width: '20%', // Adjust this width based on the size of the arrow
      justifyContent: 'flex-start',
    },
    arrowContainer1: {
      justifyContent: 'flex-start',
    },
    headingTextContainer: {
      flex: 1, // This will take up the remaining space
      justifyContent: 'center',
      alignItems: 'center',
      width: '60%',
    },
    headingText: {
      fontSize: sizes.FONT_SIZE_HEADER,
      fontFamily: theme.TEXT_STYLE_BOLD.fontFamily,
      color: 'black',
    },

    declineText: {
      fontSize: theme.TEXT_STYLE.fontSize,
      fontFamily: theme.TEXT_STYLE.fontFamily,
      color: 'black',
      textAlign: 'right',
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
