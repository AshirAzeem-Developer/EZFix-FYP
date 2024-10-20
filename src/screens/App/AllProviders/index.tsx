import React, {useEffect, useState, useCallback} from 'react';
import {FlatList, Image, Text, View, ListRenderItem} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import useStyles from './style';
import Button from '../../../components/Button/Button';

import {ParentView} from '../../../components/common/ParentView/ParentView';
import {getProviders, getProvider, postJobOrder} from '../../../utils/ApiCall';
import END_POINTS from '../../../constants/apiEndPoints';
import {showError, showSuccess} from '../../../utils/helperFunction';
import {AppStackParamsList} from '../../../navigators/navigator.seeker';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Header from '../../../components/Header';

// Define types for provider data
interface Skill {
  hourlyRate: number;
  name: string;
}

interface Provider {
  id: number;
  name: string;
  profileImage?: {
    url: string;
  };
  skills: Skill[];
}

interface RootState {
  JobOrder: {
    skill: string;
    jobDescription: string;
    jobBookingData: string;
  };
  user: {
    user: {
      jwt: string;
    };
  };
}

const AllProviderCards: React.FC = () => {
  const {styles, colors, sizes} = useStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamsList>>();
  const JobOrder = useSelector((state: RootState) => state.JobOrder);
  const userToken = useSelector((state: RootState) => state.user?.user?.jwt);

  console.log('User is  ======= > ', JobOrder.skill);
  const [providersData, setProvidersData] = useState<Provider[]>([]);

  const fetchProviders = useCallback(() => {
    const queryParams = {
      'filters[skills][category][name][$eq]': JobOrder.skill,
      populate: '*',
    };

    getProviders(userToken, queryParams)
      .then(res => setProvidersData(res.data))
      .catch(err => console.error('Error fetching providers:', err));
  }, [userToken, JobOrder.skill]);

  useEffect(() => {
    fetchProviders();
  }, [fetchProviders]);

  const handleViewProfile = (id: number) => {
    getProvider(userToken, id, JobOrder.skill)
      .then(res =>
        navigation.navigate('ProfileDetail', {
          provider: res.data,
          category: JobOrder.skill,
        }),
      )
      .catch(err => console.error('Error fetching provider profile:', err));
  };

  const handleBookNow = (item: Provider) => {
    const jobData = {
      description: JobOrder.jobDescription,
      date: JobOrder.jobBookingData,
      fixedPrice: item.skills[0]?.hourlyRate,
    };

    postJobOrder({data: jobData}, userToken)
      .then(() => {
        showSuccess(
          'Booking Confirmed',
          'Your booking has been confirmed. Check the "Booking Section" for the service provider response.',
        );
        navigation.navigate('Home');
      })
      .catch(() => showError('Error', 'Something went wrong'));
  };

  const renderProviderItem: ListRenderItem<Provider> = ({item}) => (
    <View style={styles.providersCardContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
          marginHorizontal: sizes.WIDTH * 0.04,
          width: sizes.WIDTH * 0.85,
          paddingTop: sizes.WIDTH * 0.02,
        }}>
        <Image
          source={{uri: `${END_POINTS.BASE_URL}${item.profileImage?.url}`}}
          style={styles.providerimg}
        />
        <View style={styles.detailsContainer}>
          <View style={styles.nameAndRateContainer}>
            <Text style={styles.name}>{item.name}</Text>
            {item?.skills?.map((skill, index) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  marginTop: sizes.HEIGHT * 0.005,
                }}>
                <Text
                  style={{
                    width: sizes.WIDTH * 0.44,
                    color: colors.BLACK,
                    fontSize: sizes.WIDTH * 0.03,
                  }}>
                  {skill.name}
                </Text>
                <Text key={index} style={styles.rate}>
                  Rs {skill.hourlyRate}/hr
                </Text>
              </View>
            ))}
            {/* <Text style={styles.rate}>Rs {item.skills[0]?.hourlyRate}/hr</Text> */}
          </View>
        </View>
      </View>
      <View
        style={{
          width: sizes.WIDTH * 0.9,
          height: sizes.HEIGHT * 0.001,
          backgroundColor: colors.LIGHT_GRAY100,
          marginTop: sizes.HEIGHT * 0.02,
        }}
      />
      <View style={styles.buttonsContainer}>
        <Button
          withAnimation
          bgcolor="#d2e6d0"
          text="View Profile"
          onPress={() => handleViewProfile(item.id)}
          btnStyles={styles.viewProfileButton}
          btnTextStyles={{
            color: colors.BLACK,
            fontSize: sizes.WIDTH * 0.035,
            fontWeight: 'bold',
          }}
        />
        <Button
          withAnimation
          bgcolor="#008000"
          text="Book Now"
          onPress={() => handleBookNow(item)}
          btnStyles={styles.bookNowButton}
          btnTextStyles={{
            color: colors.WHITE,
            fontSize: sizes.WIDTH * 0.035,
            fontWeight: 'bold',
          }}
        />
      </View>
    </View>
  );

  return (
    <ParentView>
      {/* <Header leftIconAction={navigation.goBack} /> */}
      <Header
        heading="All Providers"
        isLeftShow={true}
        leftIconAction={() => navigation.goBack()}
      />
      <FlatList
        data={providersData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderProviderItem}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        windowSize={5}
        contentContainerStyle={{
          alignItems: 'center',
          marginHorizontal: sizes.WIDTH * 0.02,
        }}
      />
    </ParentView>
  );
};

export default AllProviderCards;
