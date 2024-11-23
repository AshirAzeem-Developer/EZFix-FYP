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
      backgroundColor: '#F5F9F5',
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
      fontSize: sizes.FONTSIZE,
      color: colors.BLACK,
      marginBottom: sizes.WIDTH * 0.01,
      textAlign: 'right',
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
      textTransform: 'capitalize',
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

    messageContainer: {
      flex: 1,
      width: '100%',
    },
    message: {
      color: 'black',
      backgroundColor: '#fff',
      borderRadius: sizes.WIDTH * 0.02,
      padding: sizes.WIDTH * 0.03,
      marginVertical: sizes.WIDTH * 0.02,
      maxWidth: '80%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: sizes.WIDTH * 0.02,
    },
    sentMessage: {
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      alignSelf: 'flex-end',
      backgroundColor: '#008000',
      color: '#fff',
      textAlign: 'right',
    },
    receivedMessage: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      alignSelf: 'flex-start',
      backgroundColor: '#E8F5E8',
      color: '#333333',
    },

    timestamp: {
      fontSize: 12,
      color: 'black',
      marginTop: 4,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E8F5E8',
      paddingHorizontal: 16,
      position: 'absolute',
      bottom: 0,

      paddingBottom: sizes.HEIGHT * 0.035,
      paddingTop: sizes.HEIGHT * 0.015,
      borderTopEndRadius: sizes.WIDTH * 0.06,
      borderTopLeftRadius: sizes.WIDTH * 0.06,
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: 'black',
    },
    sendButton: {
      // backgroundColor: '#0084ff',
      borderRadius: 16,
      paddingHorizontal: 16,
      paddingVertical: 8,
      marginLeft: 8,
    },
    sendButtonText: {
      color: '#fff',
      fontSize: 16,
    },
  });

  return {
    colors,
    sizes,
    styles,
  };
};

export default useStyles;
