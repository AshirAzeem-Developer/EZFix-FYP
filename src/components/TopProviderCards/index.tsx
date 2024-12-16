import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import icons from '../../assets/icons';
import useStyles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from '../../assets/images';
import {getAllProviders} from '../../utils/ApiCall';
import {useSelector} from 'react-redux';
import {showError} from '../../utils/helperFunction';
import API_ENDPOINTS from '../../constants/apiEndPoints';
import {useNavigation} from '@react-navigation/native';

interface UserReview {
  id: number;
  starNumber: number;
  reviewDescription: string;
  reviewBy: string;
}

interface JobOrder {
  id: number;
  user_review?: UserReview;
}

interface Provider {
  id: number;
  name: string;
  profileImage?: {
    url: string;
  };
  job_orders?: JobOrder[];
  skills?: Array<{
    id: number;
    name: string;
  }>;
}
const calculateAverageRating = (jobOrders: any[]) => {
  if (
    !jobOrders ||
    jobOrders.length === 0 ||
    !jobOrders.some(job => job.user_review)
  ) {
    return 0; // Return 0 if no reviews exist
  }

  const reviews = jobOrders.filter(
    job => job.user_review && job.user_review.starNumber,
  );
  const totalStars = reviews.reduce(
    (sum, job) => sum + job.user_review.starNumber,
    0,
  );

  return reviews.length > 0 ? (totalStars / reviews.length).toFixed(1) : 0;
};

const TopProviderCards = () => {
  const [serviceProviders, setServiceProviders] = useState([]);
  const userToken = useSelector((state: any) => state.user?.user?.jwt);
  const {styles, colors, sizes} = useStyles();
  const navigation = useNavigation();

  useEffect(() => {
    getAllProviders(userToken)
      .then(res => {
        setServiceProviders(res.data);
      })
      .catch(err => {
        showError('Slow Network', 'Please check your internet connection');
        console.log('Error:', err);
      });
  }, [userToken]);

  const renderProvider = ({item}: {item: any}) => {
    const averageRating = calculateAverageRating(item.job_orders);
    const totalReviews =
      item.job_orders?.filter((job: any) => job.user_review)?.length || 0;

    return (
      <TouchableOpacity
        style={styles.providerscard}
        onPress={() => navigation.navigate('ProfileDetail', {provider: item})}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: sizes.WIDTH * 0.9,
            // marginLeft: sizes.WIDTH * 0.04,
            // backgroundColor: 'red',
          }}>
          <Image
            source={{
              uri: `${API_ENDPOINTS.BASE_URL}${item.profileImage?.url}`,
            }}
            style={styles.providerimg}
          />
          <View style={styles.providerNameAndRateContainer}>
            <Text style={styles.providernames}>{item?.name}</Text>
            <View style={styles.ratingContainer}>
              <Image source={icons.Star} style={styles.star} />
              <Text style={{fontSize: sizes.WIDTH * 0.032}}>
                {averageRating} ({totalReviews}{' '}
                {totalReviews === 1 ? 'review' : 'reviews'})
              </Text>
            </View>
          </View>
        </View>
        <FlatList
          style={{
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: sizes.WIDTH * 0.5,
          }}
          numColumns={3}
          data={item?.skills}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.categoriesContainer}>
              <Text style={styles.categoryText} numberOfLines={1}>
                {item?.name}
              </Text>
            </View>
          )}
        />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={{
        marginTop: sizes.HEIGHT * 0.01,
        height: sizes.HEIGHT * 0.6,
      }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: sizes.HEIGHT * 0.1}}
      data={serviceProviders}
      keyExtractor={item => item.id.toString()}
      renderItem={renderProvider}
    />
  );
};
export default TopProviderCards;
