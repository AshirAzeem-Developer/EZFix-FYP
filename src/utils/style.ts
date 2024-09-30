import {StyleSheet, Dimensions} from 'react-native';
// local
import {useColors} from '../constants/color';
import {useSizes} from '../constants/size';
import {getGlobalStyles} from '../constants/GlobalStyle';
// dimenstion
const {width, height} = Dimensions.get('window');
const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    
    },
   image:{
    width:sizes.WIDTH*0.8,
    height:sizes.HEIGHT*0.5,
    margin:sizes.WIDTH*0.1,
    marginTop:sizes.HEIGHT*0.2,
    alignSelf:'center'

   },
//    refresh:{
//       backgroundColor:colors.PRIMARY,
//       height:sizes.HEIGHT*0.04,
//       width:sizes.WIDTH*0.3,
//       alignSelf:"center",
//       borderRadius:10,
//       justifyContent:"center",
//       alignContent:"center"

//    },
   txt:{
    color:colors.WHITE,
    alignSelf:"center",
    fontSize:sizes.FONTSIZE_HIGH,
    // fontWeight:"bold"
    
   },
   status:{
    position:'absolute',
    bottom:0,
    height:sizes.HEIGHT*0.055,
    width:'100%',
    justifyContent:"center",
    alignSelf:"center"
   }


    
    
  
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
