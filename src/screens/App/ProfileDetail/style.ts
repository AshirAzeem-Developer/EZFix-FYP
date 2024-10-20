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
    },
    provider: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    providerCard: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: sizes.WIDTH * 0.02,
      backgroundColor: 'rgba(0,128,0, 0.1)',
      borderRadius: sizes.WIDTH * 0.02,
      // height: sizes.HEIGHT * 0.3,
    },
    name: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.055,
      paddingHorizontal: sizes.WIDTH * 0.02,
      paddingTop: sizes.HEIGHT * 0.01,
    },
    price: {
      ...globalStyles.TEXT_STYLE,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.042,
    },

    summary: {
      ...globalStyles.TEXT_STYLE,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.04,
      paddingTop: sizes.HEIGHT * 0.002,
    },
    providerimg: {},
    img: {
      width: sizes.WIDTH * 0.3,
      height: sizes.WIDTH * 0.3,
      borderRadius: sizes.BORDER_RADIUS * 2,
      resizeMode: 'cover',
    },
    social: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: sizes.HEIGHT * 0.02,
    },
    project: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: sizes.HEIGHT * 0.01,
    },
    projectpic: {
      width: sizes.WIDTH * 0.28,
      height: sizes.HEIGHT * 0.12,
      borderRadius: sizes.BORDER_RADIUS * 2,
    },
    reviews: {
      flexDirection: 'row',
      paddingTop: sizes.HEIGHT * 0.01,
      width: sizes.WIDTH * 0.9,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    reviewsText: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.BLACK,
      paddingTop: sizes.HEIGHT * 0.01,
      fontSize: sizes.WIDTH * 0.06,
    },
    star: {
      width: sizes.WIDTH * 0.06,
      height: sizes.HEIGHT * 0.03,
      paddingHorizontal: sizes.WIDTH * 0.01,
    },
    chatNowBtn: {
      color: colors.BLACK,
      backgroundColor: colors.WHITE,
      borderRadius: sizes.WIDTH * 0.02,
      width: sizes.WIDTH * 0.4,
      borderWidth: sizes.WIDTH * 0.005,
      borderColor: colors.BLACK,
      borderBlockColor: colors.PRIMARY,
    },
    bookNowBtn: {
      backgroundColor: colors.PRIMARY,
      borderRadius: sizes.WIDTH * 0.02,
      width: sizes.WIDTH * 0.4,
    },
    divider: {
      width: sizes.WIDTH * 0.55,
      height: sizes.HEIGHT * 0.001,
      backgroundColor: colors.LIGHT_GRAY200,
      // marginTop: sizes.HEIGHT * 0.01,
      marginHorizontal: sizes.WIDTH * 0.02,
    },
    category: {
      ...globalStyles.TEXT_STYLE,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.04,
      padding: sizes.WIDTH * 0.02,
    },
    skillsContainer: {
      marginTop: sizes.HEIGHT * 0.03,
    },
    starNumber: {
      ...globalStyles.TEXT_STYLE,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.04,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: sizes.WIDTH * 0.02,
    },
    socialIcon: {
      width: sizes.WIDTH * 0.11,
      height: sizes.WIDTH * 0.11,
      alignSelf: 'center',
    },
    socialValue: {
      color: colors.BLACK,
      alignSelf: 'center',
    },
    socialLabel: {
      color: colors.GRAY,
      alignSelf: 'center',
      paddingTop: sizes.HEIGHT * 0.005,
    },
    reviewItem: {
      backgroundColor: colors.WHITE,
      padding: 15,
      borderRadius: 8,
      marginVertical: 8,
    },
    reviewText: {
      color: colors.BLACK,
      fontSize: 16,
    },
    reviewRating: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 8,
    },

    reviewDescription: {
      color: colors.GRAY,
      fontSize: 14,
    },
    bottomBar: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: colors.WHITE,
      padding: 16,
      position: 'absolute',
      bottom: 0,
    },
    chatText: {
      color: colors.BLACK,
    },
    bookText: {
      color: colors.WHITE,
    },
    bottomContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: colors.WHITE,
      padding: 16,
      position: 'absolute',
      bottom: 0,
    },
    scrollView: {
      paddingHorizontal: sizes.WIDTH * 0.04,
      marginVertical: sizes.HEIGHT * 0.02,
    },
    socialDescription: {
      color: colors.GRAY,
      alignSelf: 'center',
      paddingTop: sizes.HEIGHT * 0.005,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
