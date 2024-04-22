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
    height: height * 0.06,
    borderWidth: 1,
    borderColor: '#C19E9E',
    borderRadius: width * 1,
    paddingHorizontal: width * 0.05,
    marginTop: height * 0.01,
  },
});
