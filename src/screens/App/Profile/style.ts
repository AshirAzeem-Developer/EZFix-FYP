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
      flex: 1,
      backgroundColor: '#F6F6F6',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginTop: sizes.HEIGHT * 0.025,
      marginRight: sizes.HEIGHT * 0.025,
      borderBottomWidth: sizes.HEIGHT * 0.0003,
      paddingBottom: sizes.HEIGHT * 0.01,
    },
    name: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.05,
      color: colors.BLACK,
    },
    headerImage: {
      width: sizes.WIDTH * 0.06,
      height: sizes.HEIGHT * 0.03,
      marginHorizontal: sizes.WIDTH * 0.015,
      marginTop: 8,
    },
    profileContainer: {
      flexDirection: 'row',
      marginLeft: sizes.WIDTH * 0.05,
      marginTop: sizes.HEIGHT * 0.03,
    },
    profileDetailsContainer: {
      flexDirection: 'column',
      marginLeft: sizes.WIDTH * 0.04,
    },
    sec1Desc: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.05,
      paddingTop: sizes.HEIGHT * 0.008,
      color: colors.BLACK,
    },

    sectionContainer: {
      flexDirection: 'row',
      // zIndex:10,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.BACKGROUND,
      width: sizes.WIDTH * 0.92,
      height: sizes.HEIGHT * 0.1,
      alignSelf: 'center',
      marginTop: sizes.HEIGHT * 0.02,
      paddingHorizontal: sizes.WIDTH * 0.1,
      borderRadius: sizes.WIDTH * 0.02,
    },
    sectionContainerskills: {
      // flexDirection: 'row',
      alignItems: 'center',
      zIndex:20,
      justifyContent: 'space-between',
      backgroundColor: colors.BACKGROUND,
      width: sizes.WIDTH * 0.92,
      height: sizes.HEIGHT * 0.1,
      alignSelf: 'center',
      marginTop: sizes.HEIGHT * 0.02,
      paddingHorizontal: sizes.WIDTH * 0.1,

      borderRadius: sizes.WIDTH * 0.02,
    },
    active:{
      marginBottom:sizes.HEIGHT*0.05,
      alignItems: 'center',
      zIndex:20,
      justifyContent: 'space-between',
      backgroundColor: colors.BACKGROUND,
      width: sizes.WIDTH * 0.92,
      height: sizes.HEIGHT * 0.1,
      alignSelf: 'center',
      marginTop: sizes.HEIGHT * 0.02,
      paddingHorizontal: sizes.WIDTH * 0.1,

      borderRadius: sizes.WIDTH * 0.02,
    },
    dropdown:{
      borderRadius: sizes.WIDTH * 0.02,
      // alignSelf: 'center',
      justifyContent: 'center', // Centers items horizontally
      alignItems: 'center', // Centers items vertically
      marginTop: sizes.HEIGHT * 0.01,
      
      width: sizes.WIDTH * 0.92,
      // margin:sizes.WIDTH*0.001,
    
      // backgroundColor: colors.BACKGROUND,
      // height: sizes.HEIGHT * 0.1,
    },
    countryLabel: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.04,
      color: colors.GRAY,
    },
    country: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.05,
      paddingTop: sizes.HEIGHT * 0.008,
      color: colors.BLACK,
    },
    contactLabel: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.04,
      color: colors.GRAY,
    },
    contact: {
      ...globalStyles.TEXT_STYLE_BOLD,
      fontSize: sizes.WIDTH * 0.05,
      color: colors.BLACK,

      paddingTop: sizes.HEIGHT * 0.008,
    },
    
    addicon:{
       alignSelf:"center",
       paddingLeft:sizes.WIDTH*0.5
    },
    experienceContainer: {
      flexDirection: 'column',
      backgroundColor: colors.BACKGROUND,
      width: sizes.WIDTH * 0.92,
      // height: sizes.HEIGHT * 0.28,
      alignSelf: 'center',
      marginTop: sizes.HEIGHT * 0.02,
      paddingHorizontal: sizes.WIDTH * 0.1,
      borderRadius: sizes.WIDTH * 0.02,
    },
    text: {
      textAlign: 'center',
      fontSize: sizes.WIDTH * 0.04,
      color: 'black',
    },
    experienceChip: {
      backgroundColor: colors.BLACK,
      height: sizes.HEIGHT * 0.035,
      // width: sizes.WIDTH * 0.35,
      textAlign: 'center',
      marginLeft: sizes.WIDTH * 0.04,
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: sizes.WIDTH * 0.2,
      paddingHorizontal: sizes.WIDTH * 0.05,
    },
    experienceChipContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: sizes.HEIGHT * 0.04,
      marginTop: sizes.HEIGHT * 0.02,
    },
    expLabel: {
      ...globalStyles.TEXT_STYLE,
      color: colors.GRAY,
      fontSize: sizes.WIDTH * 0.04,
    },
    chipText: {
      ...globalStyles.TEXT_STYLE,

      color: 'white',
      textAlign: 'center',
    },

    divider: {
      flexDirection: 'row',
      width: sizes.WIDTH * 0.75,
      borderBottomColor: '#E1E1E1',
      marginTop: sizes.HEIGHT * 0.02,
      borderBottomWidth: sizes.WIDTH * 0.002,
      alignSelf: 'center',
    },
    refDivider: {
      width: sizes.WIDTH * 0.045,
      height: sizes.HEIGHT * 0.02,
      backgroundColor: '#DBDBDB',
      borderRadius: sizes.WIDTH * 1,
      marginTop: sizes.HEIGHT * 0.02,
    },
    refHeading: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    textSkill: {
      ...globalStyles.TEXT_STYLE_BOLD,
      marginTop: sizes.HEIGHT * 0.02,
      marginHorizontal: sizes.WIDTH * 0.02,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.05,
    },
    clubSportsTextDivider: {
      borderLeftWidth: 2,
      borderColor: colors.LIGHT_GRAY200,
      height: sizes.HEIGHT * 0.02,
      marginTop: sizes.HEIGHT * 0.02,
    },
    experienceTime: {
      ...globalStyles.TEXT_STYLE,
      marginLeft: sizes.WIDTH * 0.009,
      marginTop: sizes.HEIGHT * 0.01,
      fontSize: sizes.WIDTH * 0.038,
      color: colors.GRAY,
    },
    textShortDesc: {
      ...globalStyles.TEXT_STYLE,

      marginLeft: sizes.WIDTH * 0.009,
      marginTop: sizes.HEIGHT * 0.01,
      color: colors.GRAY,
    },
    expDesc: {
      ...globalStyles.TEXT_STYLE,
      marginLeft: sizes.WIDTH * 0.009,
      marginTop: sizes.HEIGHT * 0.01,
      color: colors.BLACK,
    },
    switchContainer: {
      backgroundColor: colors.BACKGROUND,
      marginBottom: sizes.HEIGHT * 0.22,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: sizes.WIDTH * 0.06,
      marginTop: sizes.HEIGHT * 0.02,
      height: sizes.HEIGHT * 0.08,
      width: sizes.WIDTH * 0.9,
      alignSelf: 'center',
      borderRadius: sizes.WIDTH * 0.015,
    },
    availabilityLabel: {
      fontWeight: '700',
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.045,
    },
    certificateStyle: {
      alignSelf: 'center',
      width: sizes.WIDTH * 0.9,
      height: sizes.HEIGHT * 0.45,
      marginTop: -sizes.HEIGHT * 0.04,
    },
    switchStyles: {
      width: sizes.WIDTH * 0.2,
    },

    phoneNumberText: {
      color: colors.GRAY,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
