import {StyleSheet, Dimensions, I18nManager} from 'react-native';

//Color
import color from '../../../constants/color';

// dimenstion
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRIMARY,
  },

  img: {
    height: '100%',
    width: '100%',
  },
  contStyle: {
    marginTop: height * 0.02,
    paddingBottom: height * 0.04,
    paddingLeft: height * 0.02,
  },
  txt1: {
    fontSize: width * 0.033,
    color: 'black',
  },
  headingText: {
    color: 'black',
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
  firstCon: {
    backgroundColor: color.BLUE,
    borderRadius: width * 0.05,
    width: '95%',
    flexDirection: 'row',
    marginTop: height * 0.02,
    padding: height * 0.015,
    justifyContent: 'space-between',
  },
  boyAvatar: {
    height: width * 0.3,
    width: width * 0.2,
  },
  mic: {
    height: height * 0.05,
    width: width * 0.15,
    alignSelf: 'center',
  },
  micCon: {
    // backgroundColor: 'red',
    width: '90%',
    marginTop: height * 0.02,
  },
  micText: {
    color: color.WHITE,
    fontSize: height * 0.024,
    textAlign: 'center',
    marginTop: height * 0.014,
  },

  headingText1: {
    color: 'black',
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginTop: height * 0.02,
  },
  menu: {
    width: width * 0.06,
    height: height * 0.02,
    marginTop: height * 0.03,
  },
  profileLogo: {
    width: width * 0.1,
    height: height * 0.04,
    marginTop: height * 0.03,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.06,
  },
});
