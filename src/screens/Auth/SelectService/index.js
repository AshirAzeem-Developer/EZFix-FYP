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
const Index = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={images.Worker} style={styles.imageStyles} />
        </View>
        <View>
          <Text style={styles.text}>
            Your Trusted Fix-It Partners at Your Doorstep!
          </Text>
          <Text style={styles.descText}>
            All local service provider on single platform. Reliable, convenient
            and hassle-free approach.
          </Text>
        </View>
        <View style={styles.selectServiceContainer}>
          <TouchableOpacity style={styles.cardStyle}>
            <Image source={images.FindAService} style={Style.serviceLogo} />
            <Text style={{color: 'black'}}>Find A Service</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardStyle}>
            <Image source={images.BecomeASeller} style={Style.serviceLogo} />
            <Text style={{color: 'black'}}>Become A Seller</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: width * 1,
            paddingHorizontal: width * 0.05,
            marginBottom: height * 0.02,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity>
            <Text
              style={{
                color: 'white',
                textDecorationLine: 'underline',
                fontSize: 16,
              }}>
              Sign in
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                color: 'white',
                textDecorationLine: 'underline',
                fontSize: 16,
              }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Index;
