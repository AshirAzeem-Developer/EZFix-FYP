import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  loginButton: {
    width: width * 0.9,
    marginHorizontal: width * 0.06,
    marginTop: height * 0.04,
    backgroundColor: '#007AFF',
    padding: width * 0.04,
    borderRadius: width * 0.03,
  },
});
