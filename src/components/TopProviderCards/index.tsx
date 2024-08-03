import {FlatList, Image, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import icons from '../../assets/icons';
import useStyles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from '../../assets/images';
const TopProviderCards = () => {
  const providers = [
    {
      id: 1,
      name: 'Amir Khan',
      Location: 'Saddar Bazar',
      category: 'Electrician',
      image: images.Provider,
    },
    {
      id: 2,
      name: 'Amir Khan',
      Location: 'Saddar Bazar',
      category: 'Electrician',
      image: images.Provider,
    },
    {
      id: 3,
      name: 'Amir Khan',
      Location: 'Saddar Bazar',
      category: 'Electrician',
      image: images.Provider,
    },
    {
      id: 4,
      name: 'Amir Khan',
      Location: 'Saddar Bazar',
      category: 'Electrician',
      image: images.Provider,
    },
    {
      id: 5,
      name: 'Amir Khan',
      Location: 'Saddar Bazar',
      category: 'Electrician',
      image: images.Provider,
    },
    {
      id: 6,
      name: 'Amir Khan',
      Location: 'Saddar Bazar',
      category: 'Electrician',
      image: images.Provider,
    },
  ];
  const {styles, colors, sizes} = useStyles();
  return (
    <FlatList
      style={{
        marginTop: sizes.HEIGHT * 0.01,
        height: sizes.HEIGHT * 0.45,
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: sizes.HEIGHT * 0.1}}
      data={providers}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View>
          <View style={styles.providerscard}>
            <Image source={item.image} style={styles.providerimg} />
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                marginLeft: sizes.WIDTH * 0.04,
              }}>
              <Text style={styles.providernames}>{item.name}</Text>
              <Text style={styles.categoryText}>{item.category}</Text>
              <View style={styles.ratingContainer}>
                <Image source={icons.Star} style={styles.star} />
                <Text style={{fontSize: sizes.WIDTH * 0.04}}>4.5</Text>
              </View>
              {/* <Text style={styles.locationText}>{item.Location}</Text> */}
            </View>
          </View>
        </View>
      )}
    />
  );
};
export default TopProviderCards;
