import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    height: height * 0.85,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  img: {
    width: width * 0.6,
    height: height * 0.3,
    resizeMode:"contain"
  },
  imgview: {
    alignItems: 'center',
    paddingTop: height * 0.02,
  },

  txt1: {
    fontSize: width * 0.07,
    color: '#164377',
    paddingTop: height * 0.04,
  },
  txt2view: {
    paddingTop: height * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
