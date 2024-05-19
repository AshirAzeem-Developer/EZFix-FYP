
import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  categoryheading: {
    marginTop: height * 0.05,
    alignItems: 'center',
  },
  listcontainer: {
    alignItems: 'center',
    paddingBottom: height * 0.1,
    paddingTop:height * 0.04,
  },
  categoryList: {
    padding: width * 0.05,
    borderRadius: width * 0.03,
    elevation: 5,
    backgroundColor: '#FFF',
    margin: width * 0.03,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: width * 0.9,
    flexDirection:"row"


  },
  txt1: {
    fontSize: width * 0.04,
    color: 'black',
    textAlign: 'center',
    paddingTop: height * 0.01,
    fontFamily: 'Dubai-Regular',
    fontWeight:'bold',
    paddingLeft:width*0.02
  },
});
