import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  loginButton: {
    backgroundColor: '#075B9D',
    opacity: '85%',
    borderRadius: width * 0.025,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
