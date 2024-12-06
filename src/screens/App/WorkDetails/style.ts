import {StyleSheet, Dimensions} from 'react-native';
// local
import {useColors} from '../../../constants/color';
import {useSizes} from '../../../constants/size';
import {getGlobalStyles} from '../../../constants/GlobalStyle';

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);
  const styles = StyleSheet.create({
    container: {},
    title: {
      ...globalStyles.TEXT_STYLE_BOLD_ITALIC,
      color: colors.BLACK,
      fontSize: sizes.FONT_SIZE_HEADER,
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    textAreaContainer: {
      // borderBottomWidth: 2,
      // borderBottomColor: 'gray',
      marginHorizontal: 10,
      marginVertical: 20,
    },
    attachPhotosContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingHorizontal: sizes.WIDTH * 0.04,
      marginVertical: sizes.HEIGHT * 0.02,
    },
    attachPhotosTitle: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.FONTSIZE_HIGH,
      color: colors.GRAY,
      marginHorizontal: sizes.WIDTH * 0.02,
    },
    datePickerContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginVertical: sizes.HEIGHT * 0.02,
      paddingHorizontal: sizes.WIDTH * 0.04,
    },
    dateLabel: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.FONTSIZE,
      color: colors.GRAY,
    },
    dateDisplay: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: sizes.HEIGHT * 0.01,
    },
    dateText: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.FONTSIZE,
      color: colors.BLACK,
      marginLeft: sizes.WIDTH * 0.02,
    },
    attachedPhoto: {},
    seeAllProvidersButton: {
      // backgroundColor: colors.PRIMARY,
      padding: 10,
      borderRadius: 5,
      marginVertical: 20,
      marginHorizontal: 10,
    },
    seeAllProvidersText: {
      ...globalStyles.TEXT_STYLE_BOLD_ITALIC,
      color: colors.BLACK,
      fontSize: sizes.FONTSIZE,
      textAlign: 'right',
    },
    dateContainer: {
      marginBottom: sizes.HEIGHT * 0.02, // 2% of height
      paddingHorizontal: sizes.WIDTH * 0.03, // 3% of width
    },
    dateButton: {
      backgroundColor: 'white',
      padding: sizes.WIDTH * 0.04, // 4% of width
      borderRadius: sizes.WIDTH * 0.025, // 2.5% of width
      shadowColor: '#000',
      shadowOffset: {width: 0, height: sizes.HEIGHT * 0.002}, // 0.2% of height
      shadowOpacity: 0.1,
      shadowRadius: sizes.WIDTH * 0.01, // 1% of width
      elevation: 3,
    },
    label: {
      ...globalStyles.TEXT_STYLE_BOLD,
      marginVertical: sizes.HEIGHT * 0.01, // 1% of height
      color: colors.BLACK || '#666',
      fontWeight: '600',
      fontSize: sizes.WIDTH * 0.04, // 4% of width
    },
    input: {
      backgroundColor: 'white',
      borderRadius: sizes.WIDTH * 0.025, // 2.5% of width
      padding: sizes.WIDTH * 0.04, // 4% of width
      marginBottom: sizes.HEIGHT * 0.015, // 1.5% of height
      shadowColor: '#000',
      shadowOffset: {width: 0, height: sizes.HEIGHT * 0.002}, // 0.2% of height
      shadowOpacity: 0.1,
      shadowRadius: sizes.WIDTH * 0.01, // 1% of width
      elevation: 3,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
