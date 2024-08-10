import {StyleSheet, Dimensions} from 'react-native';
// local
import {useColors} from '../../../constants/color';
import {useSizes} from '../../../constants/size';
import {getGlobalStyles} from '../../../constants/GlobalStyle';
// dimenstion
const {width, height} = Dimensions.get('window');
const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      padding: sizes.WIDTH * 0.01,
    },
   
   
   

   
  
    providers: {
      margin: sizes.WIDTH * 0.01,
    },
    providerscard: {
      
      marginTop:sizes.HEIGHT*0.06,
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 10,
      elevation: 4,
      width:sizes.WIDTH*0.9,
      alignSelf:"center"
    },
    locationcard:{
  
    
      paddingLeft:sizes.HEIGHT*0.01,
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 10,
      elevation: 4,
      width:sizes.WIDTH*0.9,
      alignSelf:"center"

    },
    job: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.BLACK,
      fontSize:sizes.WIDTH*0.05,
      paddingTop:sizes.HEIGHT*0.012
      
    },
    handy:{
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.BLACK,
      fontSize:sizes.WIDTH*0.05,
      paddingTop:sizes.HEIGHT*0.03
    },
    work:{
      ...globalStyles.TEXT_STYLE,
      color:colors.BLACK,
      fontSize:sizes.WIDTH*0.035
    },
    subname:{
      ...globalStyles.TEXT_STYLE,
      color:colors.BLACK,
      fontSize:sizes.WIDTH*0.04,
      paddingLeft:sizes.HEIGHT*0.01
    
    },
    time:{
        flexDirection:"row",
      paddingTop:sizes.HEIGHT*0.002,

    },
    handymanimg:{
      width: sizes.WIDTH * 0.3,
      height: sizes.HEIGHT * 0.13,
      borderRadius: sizes.WIDTH * 0.01,
    },
    locationimg:{
      marginTop:sizes.WIDTH*0.001,
      marginLeft:sizes.WIDTH*0.037
    
    },
   
    rating:{
      flexDirection:"row",
      paddingTop:sizes.HEIGHT*0.035,
     
        paddingLeft:sizes.WIDTH*0.17
    },
    star: {
      width: sizes.WIDTH * 0.06,
      height: sizes.HEIGHT * 0.03,
      
    },
    rate:{
      color:colors.BLACK,paddingLeft:sizes.WIDTH*0.01,
      marginTop:sizes.HEIGHT*0.003,
    },
    price:{
      ...globalStyles.TEXT_STYLE_BOLD,

      color:colors.BLACK,
      paddingTop:sizes.HEIGHT*0.04,
      
    },
    clock:{
     width:sizes.WIDTH*0.04,
     height: sizes.HEIGHT * 0.02,
     marginTop:sizes.WIDTH*0.007
    },
    timer:{
      color:colors.BLACK,
      paddingLeft:sizes.WIDTH*0.01,


    },
    providerimg: {
      width: sizes.WIDTH * 0.3,
      height: sizes.HEIGHT * 0.13,
      borderRadius: sizes.WIDTH * 0.01,
      
    },
    imgview:{
    padding:sizes.WIDTH*0.03,
    paddingRight:width*0.012,
    // paddingTop:height*0.01,
    paddingLeft:sizes.WIDTH*0.01

    },
    locimgview:{
      padding:sizes.WIDTH*0.06,
      paddingTop:sizes.WIDTH*0.02

    },
    Handyman:{
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 10,
      elevation: 4,
      width:sizes.WIDTH*0.9,
    alignSelf:"center"
    },
 
   
      locationText: {
        ...globalStyles.TEXT_STYLE,
      },
     
      ratingContainer: {
        
        paddingTop:sizes.WIDTH*0.02,
  
        flexDirection: 'row',
      
      },
      bookbutton:{
        paddingLeft:sizes.WIDTH*0.2,
        
      },
   address:{
    ...globalStyles.TEXT_STYLE_BOLD,
    color:colors.BLACK,
    fontSize:sizes.WIDTH*0.05,
  
   }

  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
