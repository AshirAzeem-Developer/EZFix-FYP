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
      flexDirection: 'row',
    },
    name: {
      ...globalStyles.TEXT_STYLE,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.042,
    },
    price: {
      ...globalStyles.TEXT_STYLE,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.042,
      paddingLeft: sizes.WIDTH * 0.4,
    },

    summary: {
      ...globalStyles.TEXT_STYLE,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.036,
      paddingTop: sizes.HEIGHT * 0.002,
    },
    providerimg: {
      paddingTop: sizes.HEIGHT * 0.02,
    },
    img: {
      width: sizes.WIDTH * 0.9,
      height: sizes.WIDTH * 0.5,
      alignSelf: 'center',
      marginTop: sizes.HEIGHT * 0.01,
      borderRadius: sizes.BORDER_RADIUS * 2,
    },
    social: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: sizes.HEIGHT * 0.013,
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
    },
    star: {
      width: sizes.WIDTH * 0.06,
      height: sizes.HEIGHT * 0.03,
      marginLeft: sizes.WIDTH * 0.6,
    },
    chatNowBtn: {
      width: sizes.WIDTH * 0.4,
      borderWidth: sizes.WIDTH * 0.005,
      borderColor: colors.BLACK,
      borderBlockColor: colors.PRIMARY,
    },
    bookNowBtn: {
      width: sizes.WIDTH * 0.4,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
