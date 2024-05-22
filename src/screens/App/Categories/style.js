import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  categoryheading: {
    alignItems: 'center',
  },
  listcontainer: {
    alignItems: 'center',
    paddingBottom: height * 0.1,
    paddingTop: height * 0.04,
  },
  categoryList: {
    padding: width * 0.05,
    borderRadius: width * 0.03,

    elevation: 5,
    backgroundColor: '#FFF',
    margin: width * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.28,
    height: height * 0.12,
  },
  txt1: {
    fontSize: width * 0.035,
    color: 'black',
    textAlign: 'center',
    paddingTop: height * 0.01,
    fontFamily: 'Dubai-Regular',
  },
});
