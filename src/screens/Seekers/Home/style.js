import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    height: height * 0.6,
 
  },
categoryheading:{
    marginTop:height*0.1,
},
listcontainer:{
     alignSelf:'center',
     height:height*0.2,
     flexDirection: 'column', 


},
 categoryList:{
   
   padding:width*0.05,
   borderRadius: width * 0.06,
   shadowOpacity: 0.25,
   shadowRadius: 3.84,
   elevation: 5,
   backgroundColor: '#FFF', // Add background color to prevent shadow being clipped
   margin: 10, 
   
 },
  txt1: {
    fontSize: width * 0.04,
    color: 'black',
    textAlign: 'center',
    paddingTop: height * 0.02,
    fontFamily: 'Dubai-Regular',
  },

  txt2: {
    fontSize: width * 0.02,
    color: 'black',
  },
});
