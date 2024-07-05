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
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatListStyles}
        data={sellers}
        renderItem={({item}) => (
          <View style={styles.cardStyles}>
            <View>
              <Image source={item.image} style={styles.image} />
            </View>
            <View style={styles.sellerDetailsContainer}>
              <Text style={styles.sellerName}>{item.name}</Text>
              {/* ========== >> Rating Container << =============== */}

              <View style={styles.ratingsContainer}>
                <Image source={icons.Star} style={styles.ratingImage} />
                <Text style={styles.rating}>{item.ratings}</Text>
              </View>
              {/* ========== >> Location Container << =============== */}
              <View style={styles.locationContainer}>
                <Image source={icons.Location} style={styles.locationImage} />
                <Text style={styles.locationText}>{item.location}</Text>
              </View>
              {/* ========== >> Category Container << =============== */}

              <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>{item.category}</Text>

                <Pressable
                  style={styles.buttonStyle}
                  onPress={() => console.log('Im Pressed', item)}>
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'Dubai-Regular',
                      fontSize: width * 0.04,
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
    </View>
  );
};

export default SellerCard;
