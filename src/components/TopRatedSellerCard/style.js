import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  sellerCardContainer: {
    width: width * 0.95,
    height: height * 0.15,
    backgroundColor: 'red',
    marginTop: height * 0.02,
  },
  image: {
    width: width * 0.35,
    height: height * 0.15,
    borderTopRightRadius: width * 0.03,
    borderBottomRightRadius: width * 0.03,
  },
  cardStyles: {
    width: width * 0.95,
    height: height * 0.15,
    flexDirection: 'row',
    marginTop: height * 0.033,
    borderRadius: width * 0.01,
    backgroundColor: '#d8e7f8',
    elevation: 5,

    // paddingVertical: height * 0.02,
  },
  ratingImage: {
    width: width * 0.05,
    height: height * 0.025,
    marginLeft: width * 0.02,
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
    marginLeft: width * 0.02,
  },
  buttonStyle: {
    marginLeft: width * 0.09,
    backgroundColor: '#164377',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
