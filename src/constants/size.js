import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default {
  PADDING: width * 0.03,
  PADDED_WIDTH: width - width * 0.06,
  FONTSIZE: 14,
  FONTSIZE_HIGH: 18,
  FONTSIZE_SMALL: 10,
  WIDTH: width,
  HEIGHT: height,
  ICON: width * 0.06,
  HEADER_FOOTER_SIZE: height * 0.1,
  BORDER_RADIUS: 5,
  BORDER_RADIUS_HIGH: 15,
};
