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
      position: 'relative',
    },
    map: {
      width: width,
      height: height,
    },
    searchContainer: {
      position: 'absolute',
      top: 50,
      width: '90%',
      alignSelf: 'center',
    },
    searchButton: {
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    searchText: {
      marginLeft: 10,
      color: '#333',
      fontSize: 16,
    },
    locationButton: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      backgroundColor: '#007AFF',
      borderRadius: 50,
      padding: 15,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
