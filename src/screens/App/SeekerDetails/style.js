import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  categoryheading: {
    marginTop: height * 0.04,
    alignItems: 'center',
  },
  listcontainer: {
    alignItems: 'flex-start',
    paddingBottom: height * 0.1,
    paddingTop: height * 0.02,
  },
  sellerCardContainer: {
    width: width * 0.95,
    height: height * 0.15,
    backgroundColor: 'red',
    marginTop: height * 0.02,
  },
  image: {
    width: width * 1,
    height: height * 0.32,
  },
  cardStyles: {
    width: width * 0.95,
    flexDirection: 'column',
    // borderRadius: width * 0.0,
    marginLeft: width * 0.1,
    margin: width * 0.03,

    // paddingVertical: height * 0.02,
  },
  ratingImage: {
    width: width * 0.05,
    height: height * 0.025,
    marginTop: height * 0.01,
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    marginTop: height * 0.01,
  },
  locationImage: {
    width: width * 0.03,
    height: height * 0.02,
    marginLeft: width * 0.01,
  },
  buttonStyle: {
    marginLeft: width * 0.6,
    backgroundColor: '#164377',
    padding: 5,
    paddingHorizontal: 10,
    width: width * 0.3,
    height: height * 0.05,
    borderRadius: 10,
  },
});
