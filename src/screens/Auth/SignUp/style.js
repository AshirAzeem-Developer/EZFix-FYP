import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {flex: 1, backgroundColor: color.PRIMARY},

  img: {
    width: width * 0.3,
    height: height * 0.3,
  },
  imgview: {
    alignItems: 'center',
    marginTop: height * 0.01,
  },
  txt1: {
    fontSize: width * 0.07,
    color: 'black',
    paddingTop: height * 0.01,
  },
  fieldview: {
    gap: 10,
    paddingTop: height * 0.02,
  },
  categorySelectorContainerStyle: {
    marginTop: height * 0.02,
  },
  uploadButtonContainer: {
    width: width * 0.9,
    marginTop: height * 0.01,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
