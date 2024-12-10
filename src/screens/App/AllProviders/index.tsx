import React, {useEffect, useState, useCallback} from 'react';
import {FlatList, Image, Text, View, ListRenderItem} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import useStyles from './style';
import Button from '../../../components/Button/Button';

import {ParentView} from '../../../components/common/ParentView/ParentView';
import {
  getProviders,
  getProvider,
  postJobOrder,
  getSkillsByCategoryWithUserDetails,
} from '../../../utils/ApiCall';
import END_POINTS from '../../../constants/apiEndPoints';
import {showError, showSuccess} from '../../../utils/helperFunction';
import {AppStackParamsList} from '../../../navigators/navigator.seeker';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Header from '../../../components/Header';
import {User, Briefcase, Clock, DollarSign} from 'lucide-react-native';
import {
  setPrviderName,
  setSkillHourlyRate,
  setSkillId,
} from '../../../store/reducer/job-order';

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
    skillId: number;
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
  const userId = useSelector((state: RootState) => state.user?.user?.user?.id);
  const dispatch = useDispatch();
  console.log('Job Order State is  ==========> ', JobOrder);

  const [providersData, setProvidersData] = useState<Provider[]>([]);
  // console.log(
  //   'Peoviders Data  is  ======= > ',
  //   JSON.stringify(providersData, null, 2),
  // );

  const fetchProviders = useCallback(() => {
    const queryParams = {
      'filters[skills][category][name][$eq]': JobOrder.skill,
      populate: '*',
    };

    getProviders(userToken, queryParams)
      .then(res => {
        setProvidersData(res.data);
      })
      .catch(err => console.error('Error fetching providers:', err));
  }, [userToken, JobOrder.skill]);

  useEffect(() => {
    // fetchProviders();
    GET_SKILLS();
  }, []);

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
      fixedPrice: item.attributes?.hourlyRate,
      service_seeker: userId,
      skill: item?.id,
    };
    // console.log('Job Data ----------------- >>> ', jobData);

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
  const ProfileInfoItem = ({icon: Icon, title, value, iconColor}) => (
    <View style={styles.infoItem}>
      <Icon color={iconColor} size={24} />
      <View style={styles.infoTextContainer}>
        <Text style={styles.infoLabel}>{title}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );

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
          source={{
            uri: `${END_POINTS.BASE_URL}${item.attributes?.user?.data?.attributes?.profileImage?.data?.attributes?.url}`,
          }}
          style={styles.providerimg}
        />
        <View style={styles.detailsContainer}>
          <View style={styles.nameAndRateContainer}>
            <Text style={styles.name}>
              {item.attributes?.user?.data?.attributes?.name}
            </Text>
            <Text style={styles.skillName}>{item.attributes?.name}</Text>
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
      <View style={styles.infoGrid}>
        <ProfileInfoItem
          icon={Briefcase}
          title="Category"
          value={item?.attributes?.category?.data?.attributes.name}
          iconColor="#3B82F6"
        />
        <ProfileInfoItem
          icon={Clock}
          title="Experience"
          value={`${item?.attributes.experienceYears} Years`}
          iconColor="#10B981"
        />
        <ProfileInfoItem
          icon={DollarSign}
          title="Hourly Rate"
          value={`${item?.attributes.hourlyRate} PKR/Hr`}
          iconColor="#8B5CF6"
        />
        <ProfileInfoItem
          icon={User}
          title="Contact"
          value={`${item?.attributes?.user?.data?.attributes?.phoneNumber}`}
          iconColor="#EF4444"
        />
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
          onPress={() => {
            [
              handleViewProfile(item.attributes?.user?.data?.id),
              dispatch(setSkillHourlyRate(item.attributes?.hourlyRate)),
              dispatch(
                setPrviderName(item.attributes?.user?.data?.attributes?.name),
              ),
              dispatch(setSkillId(item.id)),
            ];
          }}
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

  function GET_SKILLS() {
    getSkillsByCategoryWithUserDetails(userToken, JobOrder.skill)
      .then(res => {
        // console.log(
        //   'Skills are ==========> ',
        //   JSON.stringify(res.data, null, 2),
        // );
        setProvidersData(res.data.data);
      })
      .catch(err => {
        console.log('Error is ==========> ', err);
      });
  }

  return (
    <ParentView>
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
