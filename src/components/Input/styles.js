import {StyleSheet, Dimensions} from 'react-native';

// local
import Colors from '../../constants/color';

// dimenstion
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginVertical: height * 0.009,
  },
  input: {
    width: width * 0.9,
    height: height * 0.07,
    borderWidth: 2,
    borderColor: '#075B9D',
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.05,
    marginTop: height * 0.01,
  },
});
