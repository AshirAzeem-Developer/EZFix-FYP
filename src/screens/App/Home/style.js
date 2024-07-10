import {StyleSheet, Dimensions, I18nManager} from 'react-native';

//Color
import color, {useColors} from '../../../constants/color';
import {getGlobalStyles} from '../../../constants/GlobalStyle';
import {useSizes} from '../../../constants/size';

// dimenstion
const {width, height} = Dimensions.get('window');

const useStyles = () => {
  const sizes = useSizes();
  const colors = useColors();
  const globalStyles = getGlobalStyles(sizes, colors);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: color.PRIMARY,
    },

    img: {
      height: '100%',
      width: '100%',
    },
    contStyle: {
      marginTop: height * 0.02,
      paddingBottom: height * 0.04,
      paddingLeft: height * 0.02,
    },
    txt1: {
      fontSize: width * 0.033,
      color: 'black',
    },
    headingText: {
      color: 'black',
      fontSize: width * 0.05,
      fontWeight: 'bold',
    },
    firstCon: {
      backgroundColor: colors.SKY_BLUE,
      borderRadius: width * 0.05,
      width: '95%',
      flexDirection: 'row',
      marginTop: height * 0.02,
      padding: height * 0.015,
      justifyContent: 'space-between',
    },
    boyAvatar: {
      height: width * 0.3,
      width: width * 0.2,
    },
    mic: {
      height: height * 0.05,
      width: width * 0.15,
      alignSelf: 'center',
    },
    micCon: {
      // backgroundColor: 'red',
      width: '90%',
      marginTop: height * 0.02,
    },
    micText: {
      color: colors.WHITE,
      fontSize: height * 0.024,
      textAlign: 'center',
      marginTop: height * 0.014,
    },

    headingText1: {
      color: 'black',
      fontSize: width * 0.05,
      fontWeight: 'bold',
      marginTop: height * 0.02,
    },
    menu: {
      width: width * 0.06,
      height: height * 0.02,
      marginTop: height * 0.03,
    },
    profileLogo: {
      width: width * 0.1,
      height: height * 0.04,
      marginTop: height * 0.03,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: width * 0.06,
    },
    categoriesContaine: {
      flexDirection: 'row',
    },
    categoryImageStyle: {
      width: width * 0.1,
      height: height * 0.045,
    },
    categoryContainer: {
      backgroundColor: '#d8e7f8',
      borderRadius: width * 0.02,
      padding: width * 0.038,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: height * 0.02,
      marginHorizontal: width * 0.012,
      elevation: 5,
    },
    topRatedHeadingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // paddingBottom: height * 0.0,
    },

    categoriesText: {
      color: 'black',
      fontSize: width * 0.06,
      marginLeft: width * 0.04,
      marginTop: height * 0.02,
      fontFamily: 'Dubai-Bold',
    },
    categoriesContainer: {
      flexDirection: 'row',
      paddingHorizontal: width * 0.02,
      alignItems: 'center',
    },
    catName: {
      marginTop: height * 0.01,
      fontFamily: 'Dubai-Medium',
      fontSize: width * 0.037,
    },
    viewAllCategories: {
      padding: width * 0.04,
      paddingHorizontal: width * 0.04,
      borderRadius: width * 0.02,
      padding: width * 0.038,
      backgroundColor: '#d8e7f8',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: height * 0.02,
      marginHorizontal: width * 0.015,
      elevation: 5,
    },
    topRatedText: {
      color: 'black',
      fontSize: width * 0.06,
      fontFamily: 'Dubai-Bold',
      marginLeft: width * 0.04,
      marginTop: height * 0.02,
      paddingBottom: height * 0.01,
    },
    seeAllText: {
      color: 'grey',
      fontSize: width * 0.04,

      fontFamily: 'Dubai-Medium',
      marginRight: width * 0.04,
      // marginTop: height * 0.02,
    },
  });

  return {
    colors,
    sizes,
    styles,
  };
};
