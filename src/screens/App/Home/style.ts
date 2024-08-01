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
    container: { backgroundColor: '#fff',
      },
    logoImgCont: {
 
      alignSelf: 'flex-start',
      paddingLeft: sizes.PADDING,
      display:"flex",
      flexDirection:"row"
      
    },
    logoImg: {
      height: sizes.HEIGHT * 0.12,
      width: sizes.LOGO_SIZE,
    },
    bellImg: {
        alignSelf:"center",
        marginLeft:sizes.WIDTH*0.5,
        width: sizes.LOGO_SIZE,
        
     
    },
    search:{
   paddingTop:sizes.HEIGHT*0,
   padding:sizes.WIDTH*0.02
   
    },
    categoryheading:{
      ...globalStyles.TEXT_STYLE_BOLD,
      color:"black",
      fontSize:sizes.WIDTH*0.07,
    paddingLeft:sizes.WIDTH*0.03
    },
    categories: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    categoryContainer: {
      flex: 1,
      margin: 5,
      alignItems: 'center',
    },
    category: {
      width: 80,
      height: 80,
      backgroundColor: '#fff',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2,
      padding: 5,
    },
    image: {
      width: sizes.WIDTH*0.1,
      height: sizes.HEIGHT*0.05,
      borderRadius: sizes.WIDTH*0.5
    },
    catname: {
      
      marginTop: height*0.01,
      textAlign: 'center',
      fontSize: width*0.03,
      fontWeight: 'bold',
      color:"black"
    },
  
    providers:{
    
      margin: sizes.WIDTH*0.01,

    },
    providerscard: {
        paddingLeft:sizes.WIDTH*0.04,
        display:'flex',
       flexDirection:'row',        
      
    },
    providernames: {
      ...globalStyles.TEXT_STYLE_BOLD,
     color:colors.BLACK,
     paddingLeft:sizes.WIDTH*0.04,
   

    },
    providerimg: {
      width:sizes.WIDTH*0.2,
      height:sizes.HEIGHT*0.1,
      borderRadius:sizes.WIDTH*0.05,
  
      
    },
    star:{
      marginLeft:sizes.WIDTH*0.04,
      marginTop:sizes.HEIGHT*0.004
      
    }
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
