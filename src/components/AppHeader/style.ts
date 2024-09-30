import {Dimensions, StyleSheet} from 'react-native';
import {useColors} from '../../constants/color';
import {useSizes} from '../../constants/size';
import {getGlobalStyles} from '../../constants/GlobalStyle';

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();

  const globalStyles = getGlobalStyles(colors, sizes);

  const styles = StyleSheet.create({
    container: {
      width: '90%',
      height: sizes.HEIGHT * 0.03,
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: sizes.HEIGHT * 0.02,
    },
    IconCont: {
      width: sizes.WIDTH * 0.125,
      height: sizes.HEIGHT * 0.03,
      borderRadius: (sizes.WIDTH * 0.1) / 2,
      justifyContent: 'center',
      alignItems: 'center',

      // paddingLeft: width * 0.04,
    },
    Icon: {
      width: sizes.WIDTH * 0.1,
      height: sizes.WIDTH * 0.06,
      backgroundColor: colors.BACKGROUND,
    },
    Text: {
      ...globalStyles.TEXT_STYLE_BOLD,
      color: colors.TEXT,
      fontSize: sizes.WIDTH * 0.04,
    },
  });

  return {styles, colors, sizes};
};

export default useStyles;
