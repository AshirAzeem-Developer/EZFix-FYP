import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default {
  color: 'black',
  PADDING: width * 0.03,
  PADDED_WIDTH: width - width * 0.06,
  FONTSIZE: 14,
  FONTSIZE_NAME: 28,
  FONTSIZE_HIGH: 28,
  FONTSIZE_MEDIUM: 20,
  FONTSIZE_SMALL: 14,
  FONTSIZE_X_SMALL: 10,
  FONTSIZE_CATEGORY: 20,

  FONT_WEIGHT: 'bold',
  WIDTH: width,
  HEIGHT: height,
  ICON: width * 0.06,
  HEADER_FOOTER_SIZE: height * 0.1,
  BORDER_RADIUS: 5,
  BORDER_RADIUS_HIGH: 15,
};
