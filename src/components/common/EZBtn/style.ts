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
    buttonFlexBox: {
      justifyContent: 'center',
      alignSelf: 'stretch',
    },
    action: {
      fontSize: sizes.WIDTH * 0.038,
      fontWeight: '700',
      fontFamily: 'Montserrat-Bold',
      color: '#ffffff',
      textAlign: 'center',
      alignSelf: 'stretch',
    },
    buttonText: {
      alignItems: 'center',
    },
    button: {
      borderRadius: 10,
      backgroundColor: '#008000',
      paddingHorizontal: 0,
      paddingVertical: 16,
      marginVertical: sizes.HEIGHT * 0.01,
    },
    outlineButton: {
      backgroundColor: '#FBFFFB',
      borderWidth: 1,
      borderColor: '#008000',
    },
    outlineButtonText: {
      color: '#008000',
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};

export default useStyles;
