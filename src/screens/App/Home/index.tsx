import React, {useState, useEffect} from 'react';
import {
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

//local imports
import useStyles from './style';
import icons from '../../../assets/icons';
import images from '../../../assets/images';
import SellerCard from '../../../components/TopRatedSellerCard';
import {ParentView} from '../../../components/common/ParentView/ParentView';
import SearchComponent from '../../../components/SearchComponent';
import {FadeInDown} from 'react-native-reanimated';
import CategoriesCard from '../../../components/CategoriesCard';
import ReactNativeModal from 'react-native-modal';
import CustomModal from '../../../components/CustomModal';
import TopProviderCards from '../../../components/TopProviderCards';
import {
  NativeStackNavigatorProps,
  NativeStackScreenProps,
} from '@react-navigation/native-stack/lib/typescript/src/types';
import {AuthStackParamList} from '../../../navigators/authStack';
import {AppStackParamsList} from '../../../navigators/navigator.seeker';
import {useSelector} from 'react-redux';
import MyLineChart from '../../../components/LineChart';

//third party library
type props = NativeStackScreenProps<AppStackParamsList>;

const Home: React.FC<props> = ({navigation}) => {
  const {styles, colors, sizes} = useStyles();
  const [showModal, setShowModal] = useState(false);
  const [notificationsAvailable, setNotificationsAvailable] = useState(true);
  // const userId = useSelector((state: any) => state.user.user.role.id);
  const userId = 0;

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // You can add your search logic here
  };
  const ServiceProviderView = () => {
    const cardData1 = [
      {icon: icons.booking, value: 5, label: 'Total Bookings'},
      {icon: icons.TOTAL_SERVICES_ICON, value: 10, label: 'Total Services'},
      {icon: icons.Earning, value: '$0.00', label: 'Total Earnings'},
      {icon: icons.Ratings, value: 4.5, label: 'Average Ratings'},
    ];

    return (
      <ScrollView>
        <View style={styles.providerdetail}>
          <Text style={styles.name}>
            Hello, <Text>Ashir Azeem</Text>
          </Text>
          <Text style={styles.welcomeBackText}>Welcome Back!</Text>
        </View>
        {/* ========= >> Dashboard Cards << =============== */}
        <FlatList
          data={cardData1}
          numColumns={2}
          contentContainerStyle={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.bookings}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: colors.BLACK,
                      fontWeight: 'bold',
                      fontSize: sizes.WIDTH * 0.065,
                    }}>
                    {item.value}
                  </Text>
                  <Image source={item.icon} style={styles.bookingimg} />
                </View>
                <Text style={styles.cardLabel}>{item.label}</Text>
              </TouchableOpacity>
            );
          }}
        />

        {/* Monthly Revenue Chart */}
        <View>
          <Text style={styles.monthlyRevenueText}>Monthly Revenue (PKR)</Text>
          <MyLineChart />
        </View>
      </ScrollView>
    );
  };
  const ServiceSeekerView = () => {
    return (
      <>
        <View style={styles.search}>
          <SearchComponent
            placeholder="search any services..."
            onSearch={handleSearch}
          />
        </View>
        <View>
          <Text style={styles.categoryheading}>Categories</Text>
        </View>
        {/* -----------------------Categories---------------------- */}
        <View style={styles.categories}>
          <CategoriesCard />
        </View>

        {/* -----------------------Providers---------------------- */}
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.topRatedSellerHeading}>Top Rated Sellers</Text>
          </View>
          <TopProviderCards />
        </View>
      </>
    );
  };

  return (
    <>
      <ParentView
        style={styles.container}
        enterAnimation={FadeInDown.duration(500)}>
        <View style={styles.logoImgCont}>
          <Image source={icons.Logo} style={styles.logoImg} />
          <TouchableOpacity>
            <Image source={icons.BELL} style={styles.bellImg} />
            {notificationsAvailable && (
              <View style={styles.notificationBadge} />
            )}
          </TouchableOpacity>
        </View>
        {userId === 0 ? <ServiceProviderView /> : <ServiceSeekerView />}
      </ParentView>
    </>
  );
};

export default Home;
