import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    zIndex: 10,
    backgroundColor: '#FAF7F7',
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: height * 0.02,

    width: width * 1,
    height: height * 0.08,
  },
  backIcon: {
    width: width * 0.022,
    height: height * 0.02,
  },
});
