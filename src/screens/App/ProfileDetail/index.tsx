import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FadeInDown} from 'react-native-reanimated';

// Local imports
import useStyles from './style';
import {ParentView} from '../../../components/common/ParentView/ParentView';
import Button from '../../../components/Button/Button';
import Header from '../../../components/Header';
import icons from '../../../assets/icons';
import END_POINTS from '../../../constants/apiEndPoints';
import {
  getJobOrdersByUserNameWithReviews,
  getUserById,
} from '../../../utils/ApiCall';
import {AppStackParamsList} from '../../../navigators/navigator.seeker';
import {setSkillHourlyRate} from '../../../store/reducer/job-order';

type Props = NativeStackScreenProps<AppStackParamsList, 'ProfileDetail'>;

interface Review {
  id: number;
  attributes: {
    user_review?: {
      data?: {
        attributes: {
          reviewBy: string;
          starNumber: number;
          reviewDescription: string;
        };
      };
    };
  };
}

interface Provider {
  id: number;
  name: string;
  profileImage?: {
    url: string;
  };
  skills?: string[];
}

const ProfileDetail: React.FC<Props> = ({route}) => {
  const {styles, colors, sizes} = useStyles();
  const navigation = useNavigation();
  const userToken = useSelector((state: any) => state.user?.user?.jwt);
  const [provider, setProvider] = useState<Provider | null>(null);
  const [reviews, setReviews] = useState<Review[] | null>(null);

  const providerData = route.params?.provider;
  const category = route.params?.category;

  useEffect(() => {
    if (!userToken || !providerData) return;

    const fetchProviderData = async () => {
      try {
        const userResponse = await getUserById(userToken, providerData.id);
        console.log(
          'First user response is ==========> ',
          JSON.stringify(userResponse.data, null, 2),
        );
        setProvider(userResponse.data);
      } catch (err) {
        console.error('Error fetching provider:', err);
      }
    };

    const fetchReviews = async () => {
      try {
        const reviewsResponse = await getJobOrdersByUserNameWithReviews(
          userToken,
          providerData.name,
        );
        setReviews(reviewsResponse.data);
      } catch (err) {
        console.error('Error fetching reviews:', err);
      }
    };

    fetchProviderData();
    fetchReviews();
  }, [userToken, providerData]);

  const renderReviewItem = ({item}: {item: Review}) => {
    return (
      <View>
        <View style={styles.reviews}>
          <Text style={{color: colors.BLACK, fontSize: sizes.WIDTH * 0.04}}>
            Review By: {item.attributes?.user_review?.data?.attributes.reviewBy}
          </Text>
          <View style={styles.ratingContainer}>
            <Image source={icons.STAR_RATE} style={styles.star} />
            <Text style={styles.starNumber}>
              {item.attributes?.user_review?.data?.attributes.starNumber}
            </Text>
          </View>
        </View>
        <Text style={{color: colors.BLACK}}>
          {item.attributes?.user_review?.data?.attributes.reviewDescription}
        </Text>
      </View>
    );
  };

  console.log('Reviews Are  ==========> ', JSON.stringify(reviews, null, 2));
  return (
    <>
      <ParentView
        style={styles.container}
        enterAnimation={FadeInDown.duration(500)}>
        <Header
          heading="Provider Details"
          isLeftShow
          leftIconAction={() => navigation.goBack()}
        />
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <View style={styles.providerCard}>
            <Image
              style={styles.img}
              source={{
                uri: `${END_POINTS.BASE_URL}${provider?.profileImage?.url}`,
              }}
            />
            <View style={styles.provider}>
              <Text style={styles.name}>{providerData.name}</Text>
              <View style={styles.divider} />
              {category && <Text style={styles.category}>{category}</Text>}
            </View>
          </View>

          <View style={styles.social}>
            {[
              {icon: icons.USERS, label: '55+', description: 'Jobs'},
              {icon: icons.MEDAL, label: '10+', description: 'Experience'},
              {icon: icons.STAR_RATE, label: '4.6', description: 'Ratings'},
              {icon: icons.MESSAGES, label: '1,872', description: 'Reviews'},
            ].map((item, index) => (
              <View key={index}>
                <Image source={item.icon} style={styles.socialIcon} />
                <Text style={styles.socialLabel}>{item.label}</Text>
                <Text style={styles.socialDescription}>{item.description}</Text>
              </View>
            ))}
          </View>

          <View style={styles.skillsContainer}>
            {/* <Selector data={provider?.skills} onSelect={handleSelect} /> */}
          </View>

          <View>
            <Text style={styles.reviewsText}>Reviews</Text>
            <FlatList
              data={reviews?.data.filter(
                (item: any) => item.attributes?.user_review?.data !== null,
              )} // Filter out null reviews
              keyExtractor={item => item.id.toString()}
              renderItem={renderReviewItem}
              ListEmptyComponent={<Text>No reviews available</Text>}
            />
          </View>
        </ScrollView>
      </ParentView>
      <View style={styles.bottomContainer}>
        <Button
          withAnimation
          btnStyles={styles.chatNowBtn}
          btnTextStyles={{color: colors.BLACK}}
          bgcolor="#FFFfff"
          icon={icons.MESSAGE_TAB_ACTIVE}
          text="Chat Now"
          onPress={() =>
            navigation.navigate('ChatOpen', {
              data: provider?.id,
              name: providerData.name,
              friendData: provider,
            })
          }
        />
        <Button
          withAnimation
          btnStyles={styles.bookNowBtn}
          bgcolor="#008000"
          text="Book Now"
          onPress={() => [navigation.navigate('OrderSummary')]}
        />
      </View>
    </>
  );
};

export default ProfileDetail;
