import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: height * 0.05,
  },
  imageStyles: {
    width: width * 0.3,
    height: height * 0.15,
  },
  textContainer: {
    width: width * 0.9,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
  },
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.15,
  },

  timerHeading: {
    fontSize: width * 0.08,
    fontFamily: 'Dubai-Light',
    fontWeight: '700',
    color: '#000',
    marginBottom: height * 0.008,
  },

  otpHeading: {
    fontSize: width * 0.04,
    fontFamily: 'Dubai-Regular',
    color: '#000',
    width: '50%',
    textAlign: 'center',
    lineHeight: height * 0.025,
  },

  btnContainer: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    width: '90%',
    // position: 'absolute',
    // bottom: height * 0.075,
    paddingTop: height * 0.01,
  },
  sendAgainBtn: {
    color: '#000',
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});
