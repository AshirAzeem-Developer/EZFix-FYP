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
    container: {flexDirection: 'column',
      backgroundColor: colors.WHITE,
      alignItems: 'center',
      width: width * 1,
      height: height * 1,},
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
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
