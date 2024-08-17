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
    summaryText: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.055,
      textAlign: 'center',
      marginVertical: sizes.HEIGHT * 0.02,
    },

    orderItemContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: sizes.WIDTH * 0.01,
      // margin: sizes.WIDTH * 0.01,
      backgroundColor: colors.WHITE,
      borderRadius: sizes.BORDER_RADIUS,
      // elevation: 5,
    },
    orderItemImage: {
      width: sizes.WIDTH * 0.9,
      height: sizes.WIDTH * 0.5,
      borderRadius: sizes.WIDTH * 0.02,
    },
    orderItemDetails: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginHorizontal: sizes.WIDTH * 0.04,
      marginTop: sizes.HEIGHT * 0.02,
    },
    sectionTitle: {
      ...globalStyles.TEXT_STYLE,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.048,
      marginTop: sizes.WIDTH * 0.01,
    },
    addressText: {
      ...globalStyles.TEXT_STYLE,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.048,
      width: sizes.WIDTH * 0.5,
      marginTop: sizes.WIDTH * 0.01,
    },
    orderItemJob: {
      ...globalStyles.TEXT_STYLE,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.048,
      marginTop: sizes.WIDTH * 0.01,
    },
    orderItemWork: {
      ...globalStyles.TEXT_STYLE,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.048,
      marginTop: sizes.WIDTH * 0.01,
    },
    orderItemTime: {
      ...globalStyles.TEXT_STYLE,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.048,
    },
    orderItemHandyman: {
      ...globalStyles.TEXT_STYLE,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.048,
    },
    orderItemPrice: {
      ...globalStyles.TEXT_STYLE,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.048,
    },
    addressContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: sizes.WIDTH * 0.06,
    },
    editIcon: {
      width: sizes.WIDTH * 0.05,
      height: sizes.WIDTH * 0.05,
      marginLeft: sizes.WIDTH * 0.08,
    },
    modalFirstDescStyle: {
      ...globalStyles.TEXT_STYLE,
      textAlign: 'center',
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.045,
    },
    orderSummaryContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginHorizontal: sizes.WIDTH * 0.02,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
