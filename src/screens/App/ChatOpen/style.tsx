import {StyleSheet, Dimensions} from 'react-native';
import {useColors} from '../../../constants/color';
import {useSizes} from '../../../constants/size';
import {getGlobalStyles} from '../../../constants/GlobalStyle';

const {width, height} = Dimensions.get('window');

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const theme = getGlobalStyles(colors, sizes);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      // padding: sizes.WIDTH * 0.01,
      // paddingTop:sizes.WIDTH*0.1
    },
    messageRow: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginVertical: sizes.WIDTH * 0.02,
    },
    senderRow: {
      justifyContent: 'flex-start',
    },
    replyRow: {
      justifyContent: 'flex-end',
    },
    dpImage: {
      width: sizes.WIDTH * 0.1,
      height: sizes.WIDTH * 0.1,
      borderRadius: (sizes.WIDTH * 0.1) / 2, // Makes the image circular
      marginRight: sizes.WIDTH * 0.02,
    },
    messageContainer: {
      maxWidth: '70%',
    },
    senderContainer: {
      alignSelf: 'flex-start',
      backgroundColor: '#E1F5FE',
      borderRadius: sizes.BORDER_RADIUS,
      padding: sizes.WIDTH * 0.03,
    },
    replyContainer: {
      alignSelf: 'flex-end',
      backgroundColor: '#DCF8C6',
      borderRadius: sizes.BORDER_RADIUS,
      padding: sizes.WIDTH * 0.03,
    },
    messageCard: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    messageText: {
      fontSize: sizes.FONT_SIZE_TITLE,
      color: colors.BLACK,
      marginBottom: sizes.WIDTH * 0.01,
    },
    messageTime: {
      fontSize: sizes.FONTSIZE_SMALL,
      color: colors.GRAY,
      alignSelf: 'flex-end',
    },
    sendMessageContainer: {
      width: sizes.WIDTH * 1,
      alignSelf: 'center',
      height: sizes.WIDTH * 0.2,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopEndRadius: sizes.WIDTH * 0.06,
      borderTopLeftRadius: sizes.WIDTH * 0.06,
      paddingHorizontal: sizes.WIDTH * 0.02,
      backgroundColor: 'rgba(0,128,0,0.1)',
      marginTop: sizes.WIDTH * 0.01,
      // elevation: 1,
    },
    headerText: {
      fontSize: sizes.WIDTH * 0.055,
      paddingLeft: sizes.WIDTH * 0.03,
      color: colors.WHITE,
      fontFamily: theme.TEXT_STYLE_BOLD.fontFamily,
    },
    chatHeaderContainer: {
      backgroundColor: colors.PRIMARY,
      width: sizes.WIDTH * 1,
      height: sizes.HEIGHT * 0.1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingHorizontal: sizes.WIDTH * 0.02,
    },
    dpImageStyles: {
      width: sizes.WIDTH * 0.12,
      height: sizes.WIDTH * 0.12,
      borderRadius: sizes.WIDTH * 0.1,
      alignSelf: 'center',
      marginLeft: sizes.WIDTH * 0.02,
    },
  });

  return {
    colors,
    sizes,
    styles,
  };
};

export default useStyles;
