import {useMemo} from 'react';
import {useWindowDimensions} from 'react-native';

const getSizes = (width: number, height: number) => ({
  WIDTH: width,
  HEIGHT: height,
  PADDING: width * 0.03,
  PADDED_WIDTH: width - width * 0.06,
  FONTSIZE: 16,
  FONTSIZE_HIGH: 18,
  FONTSIZE_SMALL: 10,
  ICON: width * 0.06,
  HEADER_FOOTER_SIZE: height * 0.1,
  BORDER_RADIUS: 5,
  BORDER_RADIUS_HIGH: 15,
  LOGO_SIZE: width * 0.4,
  BOTTOM_BUTTON_HEIGHT: height * 0.125,
  FONT_SIZE_HEADER: width * 0.0625,
  FONT_SIZE_TITLE: width * 0.045,
  MARGIN_VERTICAL: height * 0.025,
});

export type Sizes = ReturnType<typeof getSizes>;

export const useSizes = () => {
  const {width, height} = useWindowDimensions();
  return useMemo(() => getSizes(width, height), [width, height]);
};
