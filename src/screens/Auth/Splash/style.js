import {StyleSheet, Dimensions} from 'react-native';

// local
import color from '../../../constants/color';

// dimenstion
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: color.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 1,
    height: height * 1,
  },

  img: {
    height: height * 0.3,
    width: width * 0.8,
  },
});
