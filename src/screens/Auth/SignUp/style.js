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
    width: width * 0.3,
    height: height * 0.2,
  },
  imgview: {
    alignItems: 'center',
    marginTop: height * 0.001,
  },

  txt1: {
    fontSize: width * 0.07,
    color: 'black',
    paddingTop: height * 0.01,
  },
  fieldview: {
    gap: 10,
    paddingTop: height * 0.02,
  },
});
