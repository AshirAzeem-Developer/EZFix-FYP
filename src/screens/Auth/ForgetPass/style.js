import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    height: height * 0.85,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: width * 0.6,
    height: height * 0.3,
  },
  imgview: {
    alignItems: 'center',
    paddingTop: height * 0.009,
  },

  txt1: {
    fontSize: width * 0.07,
    color: 'black',
    paddingTop: height * 0.01,
  },
  txt2view: {
    paddingTop: height * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
