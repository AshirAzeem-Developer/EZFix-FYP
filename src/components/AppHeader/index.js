import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');
import icons from '../../assets/icons';
import images from '../../assets/images';
import {Image} from 'react-native-elements';
import styles from './style';

const Index = ({title, onPressBackButton}) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPressBackButton}>
          <Image source={icons.BackIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={{width: width * 0.7}}>
          <Text
            style={{
              textAlign: 'center',
              marginRight: width * 0.18,
              fontSize: width * 0.05,
              // fontWeight: 'bold',
              color: 'black',
              fontFamily: 'Dubai-Regular',
            }}>
            {title}
          </Text>
        </View>
      </View>
    </>
  );
};

export default Index;
