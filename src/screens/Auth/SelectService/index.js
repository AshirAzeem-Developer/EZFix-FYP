import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Style from './style';
import styles from './style';
import {Image} from 'react-native-elements';
import IconInput from '../../../components/Input/IconInput';
import images from '../../../assets/images';
import icons from '../../../assets/icons';
const {width, height} = Dimensions.get('window');
const SelectService = () => {
  return (
    <ImageBackground style={styles.container} source={images.Back9}>
      <ImageBackground
        source={images.EZFixBackground}
        style={styles.titleContainer}>
        <Text style={{fontSize: width * 0.05, fontWeight: 'bold'}}>EZFix</Text>
      </ImageBackground>
      <View style={styles.selectServiceContainer}>
        <TouchableOpacity style={styles.cardStyle}>
          <Image source={icons.SellServiceIcon} style={styles.iconStyle} />
          <Text style={{color: 'white', fontSize: width * 0.04}}>
            Sell Service
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardStyle}>
          <Image source={icons.FindServiceIcon} style={styles.iconStyle} />
          <Text style={{color: 'white', fontSize: width * 0.04}}>
            Search Service
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <Image source={images.BottomLeftImage} style={styles.leftImage} />
        <TouchableOpacity >
          <Image source={images.BottomRightImage} style={styles.rightImage} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SelectService;
