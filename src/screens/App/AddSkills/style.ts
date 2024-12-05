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
      backgroundColor: colors.BACKGROUND || '#f4f4f4',
    },
    scrollContainer: {
      padding: sizes.WIDTH * 0.05, // 5% of width
      paddingBottom: sizes.WIDTH * 0.2, // 20% of width
    },
    title: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.06, // 6% of width
      marginBottom: sizes.HEIGHT * 0.02, // 2% of height
      color: colors.PRIMARY || '#333',
      textAlign: 'center',
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
    pickerContainer: {
      marginBottom: sizes.HEIGHT * 0.02, // 2% of height
    },
    label: {
      ...globalStyles.TEXT_STYLE_BOLD,
      marginVertical: sizes.HEIGHT * 0.01, // 1% of height
      color: colors.BLACK || '#666',
      fontWeight: '600',
      fontSize: sizes.WIDTH * 0.04, // 4% of width
    },
    dropdown: {
      backgroundColor: 'white',
      padding: sizes.WIDTH * 0.04, // 4% of width
      borderRadius: sizes.WIDTH * 0.025, // 2.5% of width
      shadowColor: '#000',
      shadowOffset: {width: 0, height: sizes.HEIGHT * 0.002}, // 0.2% of height
      shadowOpacity: 0.1,
      shadowRadius: sizes.WIDTH * 0.01, // 1% of width
      elevation: 3,
    },
    radioContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    radioButton: {
      backgroundColor: 'white',
      padding: sizes.WIDTH * 0.025, // 2.5% of width
      borderRadius: sizes.WIDTH * 0.02, // 2% of width
      flex: 1,
      marginHorizontal: sizes.WIDTH * 0.01, // 1% of width
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: sizes.HEIGHT * 0.002}, // 0.2% of height
      shadowOpacity: 0.1,
      shadowRadius: sizes.WIDTH * 0.01, // 1% of width
      elevation: 3,
    },
    radioButtonSelected: {
      backgroundColor: colors.PRIMARY || '#007bff',
    },

    radioText: {
      color: colors.BLACK || '#000000',
      fontSize: sizes.WIDTH * 0.035, // 3.5% of width
    },
    radioButtonSelectedText: {
      color: colors.WHITE || '#000000',
    },
    dateContainer: {
      marginBottom: sizes.HEIGHT * 0.02, // 2% of height
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
    addButton: {
      backgroundColor: colors.PRIMARY || '#007bff',
      padding: sizes.WIDTH * 0.03, // 4% of width
      borderRadius: sizes.WIDTH * 0.025, // 2.5% of width
      alignItems: 'center',
      marginTop: sizes.HEIGHT * 0.03, // 3% of height
    },
    addButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: sizes.WIDTH * 0.045, // 4.5% of width
    },
    skillDropdown: {
      backgroundColor: 'white',
      borderRadius: sizes.WIDTH * 0.025, // 2.5% of width
      padding: sizes.WIDTH * 0.03, // 3% of width
      shadowColor: '#000',
      shadowOffset: {width: 0, height: sizes.HEIGHT * 0.002}, // 0.2% of height
      shadowOpacity: 0.1,
      shadowRadius: sizes.WIDTH * 0.01, // 1% of width
      elevation: 3,
    },
    skillItem: {
      padding: sizes.WIDTH * 0.04, // 4% of width
      borderBottomWidth: 1,
      borderBottomColor: '#f0f0f0',
    },
    selectedSkillItem: {
      backgroundColor: colors.PRIMARY || '#e6f2ff',
    },
    skillSubtext: {
      color: colors.BLACK || '#666',
      fontSize: sizes.WIDTH * 0.03, // 3% of width
    },
    dropdownMenu: {
      backgroundColor: 'white',
      marginTop: sizes.HEIGHT * 0.005, // 0.5% of height
      borderRadius: sizes.WIDTH * 0.025, // 2.5% of width
      padding: sizes.WIDTH * 0.02, // 2% of width
      shadowColor: '#000',
      shadowOffset: {width: 0, height: sizes.HEIGHT * 0.002}, // 0.2% of height
      shadowOpacity: 0.1,
      shadowRadius: sizes.WIDTH * 0.01, // 1% of width
      elevation: 3,
    },
    dropdownItem: {
      padding: sizes.WIDTH * 0.04, // 4% of width
      borderBottomWidth: 1,
      borderBottomColor: '#f0f0f0',
    },
    popupOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    popupContainer: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      width: '80%',
      alignItems: 'center',
    },
    popupText: {
      fontSize: sizes.WIDTH * 0.04,
      marginBottom: 15,
      textAlign: 'center',
    },
    popupButton: {
      backgroundColor: colors.PRIMARY || '#007bff',
      paddingVertical: sizes.HEIGHT * 0.015,
      paddingHorizontal: sizes.WIDTH * 0.1,
      borderRadius: sizes.WIDTH * 0.025,
    },
    popupButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: sizes.WIDTH * 0.045,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
