import {StyleSheet, Dimensions} from 'react-native';

// local
import color from '../../../constants/color';
import images from '../../../assets/images';
// dimenstion
const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',

    height: height * 1,
    width: width * 1,
    resizeMode: 'cover',
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.6,
    height: height * 0.065,
    resizeMode: 'cover',
    marginVertical: height * 0.05,
  },
  selectServiceContainer: {
    width: width * 1,
    height: height * 0.6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    // opacity: 1,
    width: width * 0.4,
    height: height * 0.18,
    borderRadius: width * 0.01,
    marginHorizontal: width * 0.02,
  },
  iconStyle: {
    width: width * 0.09,
    height: height * 0.039,
    marginVertical: height * 0.02,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.9,
    height: height * 0.12,
  },
  leftImage: {
    width: width * 0.155,
    height: height * 0.01,
  },
  rightImage: {
    width: width * 0.18,
    height: height * 0.084,
  },
});
