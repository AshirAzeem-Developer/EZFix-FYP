import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import icons from '../assets/icons';

const {width, height} = Dimensions.get('window');

const DotView = ({number}) => {
  return (
    <View style={styles.dotView}>
      <Text style={styles.dotText}>{number}</Text>
    </View>
  );
};

const BottomTabComponent = ({item, focus}) => {
  // const noOfItems = useSelector(state => state.cartReducer).length;
  return (
    <View style={styles.container(item)}>
      <View style={styles.ImageView}>
        <Image
          source={focus ? item.activeIcon : item.inActiveIcon}
          resizeMode="contain"
          style={styles.image(focus)}
        />
      </View>
      <Text style={styles.text}>{item.barName}</Text>
    </View>
  );
};

export default BottomTabComponent;

const styles = StyleSheet.create({
  container: item => ({
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    // backgroundColor: 'red',
  }),
  imageView: {
    width: width * 0.25,
    height: width * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  image: f => ({
    width: f ? width * 0.09 : width * 0.07,
    height: f ? width * 0.09 : width * 0.07,
  }),
  text: {
    color: 'black',
    fontSize: width * 0.028,
  },
  mainCon: {
    flexDirection: 'row',
  },
});
