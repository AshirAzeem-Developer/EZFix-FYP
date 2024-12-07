import {StyleSheet, Dimensions} from 'react-native';
// local
import {useColors} from '../../../constants/color';
import {useSizes} from '../../../constants/size';
import {getGlobalStyles} from '../../../constants/GlobalStyle';
// dimenstion

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.BACKGROUND,
    },
    headerContainer: {
      backgroundColor: '#F6F6F6',
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'space-between',
      padding: sizes.WIDTH * 0.04,
      paddingHorizontal: sizes.WIDTH * 0.06,
      zIndex: 10,
    },
    upload: {
      position: 'relative',
      top: -sizes.WIDTH * 0.08,
      right: -sizes.WIDTH * 0.15,
    },
    profileImageContainer: {
      marginTop: sizes.HEIGHT * 0.05,
      justifyContent:"center",
      
    },
    nameContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    
      marginHorizontal: sizes.WIDTH * 0.09,
      borderBottomWidth: sizes.HEIGHT * 0.001,
      borderColor: '#757575',
    },
    inputStyle: {
    marginTop:sizes.HEIGHT*0.03
    },
    phoneNumContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: sizes.WIDTH * 0.09,

      marginTop: sizes.HEIGHT * 0.02,
      borderBottomWidth: sizes.HEIGHT * 0.001,
      borderColor: '#757575',
    },
    phoneNumCode: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.05,
      color: colors.GRAY,
    },
    expLabelText: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.038,
      color: colors.GRAY,
    },
    experienceContainer: {
      flexDirection: 'column',
    },
    experienceHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: sizes.HEIGHT * 0.04,
      paddingHorizontal: sizes.WIDTH * 0.05,
      marginBottom: sizes.HEIGHT * 0.02,
    },
    expIconContainer: {
      flexDirection: 'row',
    },
    icon: {
      marginHorizontal: sizes.WIDTH * 0.02,
    },
    expPosition: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.042,
      paddingBottom: sizes.HEIGHT * 0.01,
      color: colors.GRAY,
    },
    expDetailsContainer: {
      flexDirection: 'column',
      marginHorizontal: sizes.WIDTH * 0.05,
      marginTop: sizes.HEIGHT * 0.01,
      borderBottomWidth: sizes.HEIGHT * 0.001,
      paddingBottom: sizes.HEIGHT * 0.007,
      marginBottom: sizes.HEIGHT * 0.02,
      borderColor: '#757575',
    },
    expYear: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.042,
      marginTop: sizes.HEIGHT * 0.01,
      paddingBottom: sizes.HEIGHT * 0.01,
      color: colors.GRAY,
    },
    expDetailsDesc: {
      ...globalStyles.TEXT_STYLE,
      fontSize: sizes.WIDTH * 0.038,
      height: sizes.HEIGHT * 0.1,

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
