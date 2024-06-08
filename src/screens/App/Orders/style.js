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
    alignItems: 'center',
    paddingBottom: height * 0.1,
    paddingTop:height * 0.02,
  },
  sellerCardContainer: {

    width: width * 0.95,
    height: height * 0.15,
    backgroundColor: 'red',
    marginTop: height * 0.02,
  },
  image: {
    width: width * 0.35,
    height: height * 0.17,
    borderRadius: width * 0.5,
   
  
  },
  cardStyles: {
    width: width * 0.95,
    height: height * 0.18,
    flexDirection: 'row',
    marginTop: height * 0.05,
    // borderRadius: width * 0.0,
   
    backgroundColor: '#FFF',
    margin: width * 0.03,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
   
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
    marginLeft: width * 0.01,
    marginTop :height * 0.02,
    backgroundColor: '#164377',
    width:width*0.1,
    alignItems:"center"   

    
  },
});
