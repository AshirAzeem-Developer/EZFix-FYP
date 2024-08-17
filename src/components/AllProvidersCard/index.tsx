import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import icons from '../../assets/icons';
import useStyles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from '../../assets/images';
import Button from '../Button/Button';
import Header from '../AppHeader';
import {ParentView} from '../common/ParentView/ParentView';
import {useNavigation} from '@react-navigation/native';
import {AppStackParamsList} from '../../navigators/navigator.seeker';
const AllProviderCards = () => {
  const providers = [
    {
      id: 1,
      image: images.allProviders,
      name: 'Amir Khan',
      perHourRate: 250,
      services: ['Wall Repair', 'Wall Painting', 'Plumbing', 'Wall Decoration'],
      ratings: 4.5,
    },
    {
      id: 2,
      image: images.allProviders,
      name: 'John Doe',
      perHourRate: 200,
      services: [
        'Electrical Repair',
        'Lighting Installation',
        'Appliance Installation',
      ],
      ratings: 4.2,
    },
    {
      id: 3,
      image: images.allProviders,
      name: 'Emily Smith',
      perHourRate: 300,
      services: [
        'Plumbing',
        'Bathroom Renovation',
        'Water Heater Installation',
      ],
      ratings: 4.8,
    },
    {
      id: 4,
      image: images.allProviders,
      name: 'Michael Johnson',
      perHourRate: 180,
      services: ['Furniture Assembly', 'Carpentry', 'Interior Design'],
      ratings: 4.6,
    },
    {
      id: 5,
      image: images.allProviders,
      name: 'Sarah Wilson',
      perHourRate: 220,
      services: ['Gardening', 'Lawn Maintenance', 'Tree Trimming'],
      ratings: 4.4,
    },
    {
      id: 6,
      image: images.allProviders,
      name: 'David Brown',
      perHourRate: 250,
      services: ['Painting', 'Wallpaper Installation', 'Drywall Repair'],
      ratings: 4.7,
    },
    {
      id: 7,
      image: images.allProviders,
      name: 'Jessica Lee',
      perHourRate: 280,
      services: ['Cleaning', 'Housekeeping', 'Laundry'],
      ratings: 4.9,
    },
  ];
  const {styles, colors, sizes} = useStyles();
  const navigation: AppStackParamsList = useNavigation();
  return (
    <ParentView>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={providers}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: sizes.WIDTH * 0.02,
        }}
        renderItem={({item}) => (
          <View style={styles.providersCardContainer}>
            <Image source={item.image} style={styles.providerimg} />
            <View style={styles.detailsContainer}>
              <View style={styles.nameAndRateContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.rate}>Rs {item.perHourRate}/hr</Text>
              </View>
              <View style={styles.servicesList}>
                <FlatList
                  contentContainerStyle={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                  }}
                  data={item.services}
                  numColumns={2}
                  keyExtractor={(service, index) => index.toString()}
                  renderItem={({item: service}) => (
                    <View style={styles.serviceContainer}>
                      <Text style={styles.service}>- {service}</Text>
                    </View>
                  )}
                />
              </View>
              <View style={styles.ratingsContainer}>
                <Image source={icons.Star} style={styles.star} />
                <Text style={styles.rate}>{item.ratings}</Text>
              </View>
              <View style={styles.buttonsContainer}>
                <Button
                  withAnimation
                  bgcolor="#d2e6d0"
                  text="View Profile"
                  onPress={() => navigation.navigate('ProfileDetail')}
                  btnStyles={styles.viewProfileButton}
                  btnTextStyles={{color: colors.BLACK}}
                />
                <Button
                  withAnimation
                  bgcolor="#008000"
                  text="Book Now"
                  btnStyles={styles.bookNowButton}
                  onPress={() => console.log('Book Now')}
                />
              </View>
            </View>
          </View>
        )}
      />
    </ParentView>
  );
};
export default AllProviderCards;
