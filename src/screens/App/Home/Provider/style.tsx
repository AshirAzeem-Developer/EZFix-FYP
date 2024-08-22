import {StyleSheet, Dimensions} from 'react-native';
// local
import {useColors} from '../../../../constants/color';
import {useSizes} from '../../../../constants/size';
import {getGlobalStyles} from '../../../../constants/GlobalStyle';
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
    
    logoImgCont: {
      paddingLeft: sizes.PADDING,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: sizes.WIDTH * 0.9,
    },
    logoImg: {
      height: sizes.HEIGHT * 0.1,
      width: sizes.LOGO_SIZE,
    },
    bellImg: {
      height: sizes.HEIGHT * 0.028,
      width: sizes.WIDTH * 0.05,
    },
    notificationBadge: {
      backgroundColor: 'red',
      width: sizes.WIDTH * 0.02,
      height: sizes.HEIGHT * 0.01,
      borderRadius: sizes.WIDTH * 0.1,
      position: 'absolute',
      bottom: sizes.HEIGHT * 0.02,
      left: sizes.WIDTH * 0.025,
    },
   providerdetail:{
      padding:sizes.WIDTH*0.066
   },
   name:{
    color:colors.BLACK,
    fontSize:sizes.WIDTH*0.053,
    fontWeight:'bold',
    paddingTop:sizes.HEIGHT*0.03
   },
   card:{

   },
   bookings:{
    width:sizes.WIDTH*0.45,
    borderRadius:sizes.BORDER_RADIUS*3,
   borderColor:'green',
   borderWidth: sizes.WIDTH*0.004, 
  //  padding:sizes.WIDTH*0.066
  },
   bookingimg:{
    width:sizes.WIDTH*0.12,
    height:sizes.HEIGHT*0.06,
    alignSelf:"flex-end"

   }
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
