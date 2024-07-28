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
      paddingTop:height*0.02,
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
        marginLeft:width*0.4,
        paddingTop:height*0.01,
         
     
    },
    search:{
        
   paddingTop:height*0,
    padding:height*0.03,
    },
    categoryheading:{
      color:"black",
      fontSize:width*0.07,
      padding:width*0.02,
   paddingTop:height*0,

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
      width: width*0.1,
      height: height*0.05,
      borderRadius: 20,
    },
    catname: {
      marginTop: height*0.01,
      textAlign: 'center',
      fontSize: width*0.03,
      fontWeight: 'bold',
      color:"black"
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
