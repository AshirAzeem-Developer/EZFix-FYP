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
      fontSize:sizes.WIDTH*0.06
      
    },
    work:{
      ...globalStyles.TEXT_STYLE,
      color:colors.BLACK,
      fontSize:sizes.WIDTH*0.05

    },
    time:{
        flexDirection:"row",
        paddingTop:sizes.HEIGHT*0.01
    },
    handymanimg:{
      width: sizes.WIDTH * 0.3,
      height: sizes.HEIGHT * 0.2,
      borderRadius: sizes.WIDTH * 0.01,
      
    },
   
    rating:{
      flexDirection:"row",
        paddingTop:sizes.HEIGHT*0.001,
        paddingLeft:sizes.WIDTH*0.4
    },
    price:{
      ...globalStyles.TEXT_STYLE_BOLD,

      color:colors.BLACK,paddingTop:sizes.HEIGHT*0.05,paddingLeft:sizes.WIDTH*0.001
    },
    providerimg: {
      width: sizes.WIDTH * 0.3,
      height: sizes.HEIGHT * 0.2,
      borderRadius: sizes.WIDTH * 0.01,
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
    star: {
      width: sizes.WIDTH * 0.06,
      height: sizes.HEIGHT * 0.03,
      
    },
   
      locationText: {
        ...globalStyles.TEXT_STYLE,
      },
      services:{
        flexDirection:"row"
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
    fontSize:sizes.WIDTH*0.06,
    paddingLeft:sizes.WIDTH*0.02,
    marginTop:sizes.WIDTH*0.03
   }

  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
