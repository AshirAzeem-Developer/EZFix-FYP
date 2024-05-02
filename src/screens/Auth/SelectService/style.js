import {StyleSheet, Dimensions} from 'react-native';

// local
import color from '../../../constants/color';
import images from '../../../assets/images';
// dimenstion
const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#164377',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'space-around',

    height: height * 1,
    width: width * 1,
    resizeMode: 'cover',
  },
  imageContainer: {
    marginTop: height * 0.175,
    backgroundColor: 'white',
    width: width * 0.9,
    height: height * 0.4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  imageStyles: {
    width: width * 0.5,
    height: height * 0.6,
    position: 'relative',
    top: height * 0.2333,
  },
  text: {
    color: 'white',
    fontSize: width * 0.06,
    textAlign: 'center',
    marginTop: height * 0.02,
    lineHeight: height * 0.04,
  },
  descText: {
    color: 'white',
    fontSize: width * 0.035,
    textAlign: 'center',
    marginTop: height * 0.02,

    paddingHorizontal: width * 0.02,
  },

  selectServiceContainer: {
    width: width * 1,
    height: height * 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    // opacity: 1,
    width: width * 0.32,
    height: height * 0.14,
    borderRadius: width * 0.01,
    marginHorizontal: width * 0.02,
  },

  serviceLogo: {
    width: width * 0.22,
    height: height * 0.08,
  },
});
