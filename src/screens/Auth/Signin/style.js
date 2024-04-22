import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    height: height * 0.6,
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
    marginTop: height * 0.01,
  },
  txt1: {
    fontSize: width * 0.07,
    color: 'black',
    paddingTop: height * 0.01,
  },

  txt2: {
    fontSize: width * 0.05,
    color: 'black',
   
  },
});
