import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import icons from '../assets/icons';
const {width, height} = Dimensions.get('window');
const HomeHeader = () => {
  return (
    <View>
      <View style={styles.mainCon}>
        <TouchableOpacity style={styles.logoStyle}>
          <Image
            source={icons.logoSmall}
            resizeMode="contain"
            style={styles.img}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.notiIcon}>
          <Image
            source={icons.notification}
            resizeMode="contain"
            style={styles.img}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  mainCon: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: height * 0.02,
  },

  logoStyle: {
    height: width * 0.1,
    width: width * 0.3,
  },
  img: {
    height: '100%',
    width: '100%',
  },
  notiIcon: {height: width * 0.1, width: width * 0.1},
});
