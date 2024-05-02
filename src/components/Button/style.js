import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  loginButton: {
    // width: width * 0.6,
    // marginHorizontal: width * 0.8,
    // marginTop: height * 0.04,
    backgroundColor: '#075B9D',
    opacity: '85%',
    padding: width * 0.035,
    borderRadius: width * 0.025,
  },
});
