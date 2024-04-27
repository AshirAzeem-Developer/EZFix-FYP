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
 title:{
 backgroundColor:"#164377",
 borderWidth:1,
 width:width*1,
 height:height*0.5,
 borderRadius: width * 0.1,
 }, 
 

  txt1: {
    fontSize: width * 0.2,
    paddingTop:height*0.1,
    color:"white",
    fontStyle:"normal",
    alignSelf:"center"
  },

  txt2: {
    fontSize: width * 0.05,
    color: 'black',
   
  },
  
  leftImage: {
    width: width * 0.8,
    height: height * 0.4,
    marginTop:width*0.3,

  },
});
