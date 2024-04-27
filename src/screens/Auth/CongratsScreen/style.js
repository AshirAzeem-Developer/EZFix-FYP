import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    height: height * 0.6,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
  imgview: {
    alignItems: 'center',
    paddingTop: height * 0.4,
  },
  txt1: {
    fontSize: width * 0.07,
    color: 'black',
    textAlign:"center",
    paddingTop:height*0.02
  },

  txt2: {
    fontSize: width * 0.02,
    color: 'black',
   
  },
});
