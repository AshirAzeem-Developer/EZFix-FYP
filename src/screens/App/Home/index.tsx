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
  const user = useSelector(state => state?.user.user.user.roleType);
  console.log('UserType === >: ', user);

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // You can add your search logic here
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
      </ParentView>
    </>
  );
};

export default Home;
