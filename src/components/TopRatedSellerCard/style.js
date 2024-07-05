import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  sellerCardContainer: {
    width: width * 0.95,
    height: height * 0.15,
    backgroundColor: 'red',
    marginTop: height * 0.02,
    paddingBottom: height * 0.2,
  },
  image: {
    width: width * 0.35,
    height: height * 0.15,
    borderTopRightRadius: width * 0.03,
    borderBottomRightRadius: width * 0.03,
  },
  cardStyles: {
    width: width * 0.95,
    height: height * 0.17,
    flexDirection: 'row',
    marginTop: height * 0.015,
    borderRadius: width * 0.01,
    backgroundColor: '#d8e7f8',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  ratingImage: {
    width: width * 0.05,
    height: height * 0.025,
    marginLeft: width * 0.01,
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationImage: {
    width: width * 0.035,
    height: height * 0.023,
    marginLeft: width * 0.02,
  },
  buttonStyle: {
    // marginLeft: width * 0.09,
    backgroundColor: '#164377',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  flatListStyles: {height: height * 0.5},
  sellerName: {
    fontSize: width * 0.05,
    marginLeft: width * 0.02,

    fontFamily: 'Dubai-Bold',
    color: 'black',
  },
  rating: {
    marginLeft: width * 0.02,
    color: 'black',
    fontFamily: 'Dubai-Medium',
    fontSize: width * 0.035,
  },
  locationText: {
    marginLeft: width * 0.02,
    fontFamily: 'Dubai-Medium',
    fontSize: width * 0.04,
  },
  categoryText: {
    marginLeft: width * 0.02,
    fontSize: width * 0.06,
    // fontWeight: 'bold',
    fontFamily: 'Dubai-Bold',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.58,
  },
  sellerDetailsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
