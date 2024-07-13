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
      justifyContent: 'center',
      alignItems: 'center',
      height: height * 0.8,
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: width * 0.09,
    },

    image: {
      width: width * 0.65,
      height: height * 0.45,
      borderRadius: 10,
    },
    headText: {
      marginVertical: height * 0.01,
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold',
    },
    text: {
      marginTop: 20,
      fontSize: 20,
      textAlign: 'center',
      color: 'black',
    },

    activeDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
    },
    inactiveDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#DDDDDD',
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};

export default useStyles;
