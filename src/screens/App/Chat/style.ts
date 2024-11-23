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
      backgroundColor: '#fff',
    },
    content: {
      flex: 1,
      margin: sizes.WIDTH * 0.01,
    },
    flatList: {
      flexGrow: 1,
      padding: sizes.WIDTH * 0.03,
    },
    friendName: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.04,
      textTransform: 'capitalize',
    },
    messageText: {
      ...globalStyles.TEXT_STYLE,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.035,
    },
    image: {
      width: sizes.WIDTH * 0.165,
      height: sizes.WIDTH * 0.165,
      borderRadius: sizes.WIDTH * 1,
      marginRight: sizes.WIDTH * 0.025,
      alignSelf: 'center',
      borderWidth: 3,
      borderColor: colors.GREEN,
    },
    friendListContainer: {
      padding: sizes.WIDTH * 0.02,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    nameTimeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: sizes.WIDTH * 0.72,
    },
    messageContainer: {},
    timeText: {
      ...globalStyles.TEXT_STYLE,
      color: colors.GRAY,
      fontSize: sizes.WIDTH * 0.032,
    },
    avatarContainer: {},
    emptyContainer: {},
    emptyText: {
      ...globalStyles.TEXT_STYLE,
      color: colors.BLACK,
      fontSize: sizes.WIDTH * 0.04,
      textAlign: 'center',
    },
    errorContainer: {},
    errorText: {
      ...globalStyles.TEXT_STYLE,
      color: colors.RED,
      fontSize: sizes.WIDTH * 0.04,
      textAlign: 'center',
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
export default useStyles;
