import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import styles from './style';
import images from '../../assets/images';
import {Image} from 'react-native-elements';
import icons from '../../assets/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');

const SellerCard = () => {
  const sellers = [
    {
      id: 1,
      name: 'John Doe',
      image: images.ServiceWorker,
      location: 'Saddar,Karachi',
      category: 'Plumber',
      ratings: 4.5,
    },
    {
      id: 2,
      name: 'John Doe',
      image: images.ServiceWorker,
      location: 'Saddar,Karachi',
      category: 'Plumber',
      ratings: 4.5,
    },
    {
      id: 3,
      name: 'John Doe',
      image: images.ServiceWorker,
      location: 'Saddar,Karachi',
      category: 'Plumber',
      ratings: 4.5,
    },
    {
      id: 4,
      name: 'John Doe',
      image: images.ServiceWorker,
      location: 'Saddar,Karachi',
      category: 'Plumber',
      ratings: 4.5,
    },
    {
      id: 5,
      name: 'John Doe',
      image: images.ServiceWorker,
      location: 'Saddar,Karachi',
      category: 'Plumber',
      ratings: 4.5,
    },
    {
      id: 6,
      name: 'John Doe',
      image: images.ServiceWorker,
      location: 'Saddar,Karachi',
      category: 'Plumber',
      ratings: 4.5,
    },
  ];
  return (
    <FlatList
      data={sellers}
      renderItem={({item}) => (
        <View style={styles.cardStyles}>
          <View>
            <Image source={item.image} style={styles.image} />
          </View>
          <View style={{paddingVertical: 10}}>
            <Text
              style={{
                fontSize: width * 0.05,
                marginLeft: width * 0.02,
                fontWeight: 'bold',
                color: 'black',
              }}>
              {item.name}
            </Text>
            <View style={styles.ratingsContainer}>
              <Image source={icons.Star} style={styles.ratingImage} />
              <Text
                style={{
                  marginLeft: width * 0.02,
                  color: 'black',
                  fontSize: width * 0.035,
                }}>
                {item.ratings}
              </Text>
            </View>
            <View style={styles.locationContainer}>
              <Image source={icons.Location} style={styles.locationImage} />
              <Text style={{marginLeft: width * 0.02}}>{item.location}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  marginLeft: width * 0.02,
                  fontSize: width * 0.07,
                  fontWeight: 'bold',
                }}>
                {item.category}
              </Text>

              <Pressable style={styles.buttonStyle}>
                <Text
                  style={{
                    color: 'white',
                  }}>
                  Book Now
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}
      keyExtractor={item => item.id}
      contentContainerStyle={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
};

export default SellerCard;
