import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
 

  cardStyles: {
    width: width * 0.95,
    height: height * 0.38,
    flexDirection: 'row',
    marginTop: height * 0.2,
    // borderRadius: width * 0.0,
    elevation: 20,
    backgroundColor: '#FFF',
    margin: width * 0.03,
   borderRadius:20,
    justifyContent: 'center',
   
    // paddingVertical: height * 0.02,
  },
  TextInput:{
     color:"black",
     backgroundColor:"#DFE7EF",
     marginTop:height*0.05,
    height:height*0.2,
    width:width*0.8,
    alignSelf:"center",
    

  },
  buttonStyle: {
    marginLeft: width * 0.5,
    backgroundColor: '#164377',
    padding: 5,
    marginTop: height * 0.02,
      width:width*0.3,
    paddingHorizontal: 10,
    alignItems:"center",

    
  },
});
