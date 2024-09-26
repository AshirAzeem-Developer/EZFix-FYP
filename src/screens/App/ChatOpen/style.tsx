import {StyleSheet, Dimensions} from 'react-native';
import {useColors} from '../../../constants/color';
import {useSizes} from '../../../constants/size';
import {getGlobalStyles} from '../../../constants/GlobalStyle';

const {width, height} = Dimensions.get('window');

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      padding: sizes.WIDTH * 0.01,
      paddingTop:sizes.WIDTH*0.1
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
  });

  return {
    colors,
    sizes,
    styles,
  };
};

export default useStyles;
