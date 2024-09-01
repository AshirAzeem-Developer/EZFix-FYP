import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import icons from '../../assets/icons';
import useStyles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from '../../assets/images';
import Button from '../Button/Button';
import Header from '../AppHeader';
import {ParentView} from '../common/ParentView/ParentView';
import {useNavigation} from '@react-navigation/native';
import {AppStackParamsList} from '../../navigators/navigator.seeker';
import {useSelector} from 'react-redux';
import {getProvider, getProviders} from '../../utils/ApiCall';
import END_POINTS from '../../constants/apiEndPoints';
const AllProviderCards = () => {
  const JobOrder = useSelector((state: any) => state.JobOrder);
  const [providersData, setProvidersData] = useState<any[]>([]);

  const queryParams = {
    'filters[skills][name][$eq]': JobOrder.skill,
    populate: '*',
  };
  const userToken = useSelector((state: any) => state.user?.user?.jwt);

  useEffect(() => {
    // dispatch(getProviders(token, queryParams));
    getProviders(userToken, queryParams)
      .then(res => {
        // console.log('Providers: ', JSON.stringify(res.data, null, 2));
        setProvidersData(res.data);
        // console.log('JobOrderSkill: ', JobOrder.skill);
      })
      .catch(err => {
        console.log('Error: ', err);
      });
  }, [JobOrder.skill]);
  // console.log('Providers', JSON.stringify(providersData, null, 2));

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

  const handleViewProfile = (id: number) => {
    getProvider(userToken, id, JobOrder.skill)
      .then(res => {
        console.log('Provider Profile: ', JSON.stringify(res.data, null, 2));
        navigation.navigate('ProfileDetail', {provider: res.data});
      })
      .catch(err => {
        console.log('Error: ', err);
      });
    console.log('Provider Profile: ', id);
  };

  return (
    <ParentView>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={providersData}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: sizes.WIDTH * 0.02,
        }}
        renderItem={({item}) => (
          <View style={styles.providersCardContainer}>
            <Image
              source={{
                uri: `${END_POINTS.BASE_URL}${item?.profileImage?.url}`,
              }}
              style={styles.providerimg}
            />
            <View style={styles.detailsContainer}>
              <View style={styles.nameAndRateContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.rate}>Rs {item.perHourRate}/hr</Text>
              </View>
              {/* <View style={styles.servicesList}>
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
              </View> */}
              <View style={styles.ratingsContainer}>
                <Image source={icons.Star} style={styles.star} />
                <Text style={styles.rate}>{item.ratings}</Text>
              </View>
              <View style={styles.buttonsContainer}>
                <Button
                  withAnimation
                  bgcolor="#d2e6d0"
                  text="View Profile"
                  // onPress={() => navigation.navigate('ProfileDetail')}
                  onPress={() => handleViewProfile(item.id)}
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
