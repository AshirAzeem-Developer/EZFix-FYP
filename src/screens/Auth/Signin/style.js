import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    height: height * 0.6,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:height*0.1

  },

  img: {
    width: width * 0.05,
    height: height * 0.05,
    paddingTop: height * 0.01,
 
  },

  txt1: {
    fontSize: width * 0.07,
    color: 'black',
    paddingTop: height * 0.01,
    fontStyle:"italic"
  },

  txt2: {
    fontSize: width * 0.05,
    color: 'black',
   
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: width * 0.9,
    height: height * 0.10,
  },
  leftImage: {
    width: width * 0.8,
    height: height * 0.4,
    marginTop:width*0.3,

  },
});
