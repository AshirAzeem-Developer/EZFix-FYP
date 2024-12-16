import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

//local imports
import useStyles from './style';
import icons from '../../../assets/icons';
import {ParentView} from '../../../components/common/ParentView/ParentView';
import SearchComponent from '../../../components/SearchComponent';
import {FadeInDown} from 'react-native-reanimated';
import CategoriesCard from '../../../components/CategoriesCard';

import TopProviderCards from '../../../components/TopProviderCards';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';

import {AppStackParamsList} from '../../../navigators/navigator.seeker';
import {useSelector} from 'react-redux';
import {useLocaleStore} from '../../../store/reducer/locale';

//third party library
type props = NativeStackScreenProps<AppStackParamsList>;

const Home: React.FC<props> = ({navigation}) => {
  const {styles, colors, sizes} = useStyles();
  const [notificationsAvailable, setNotificationsAvailable] = useState(true);
  const {strings, langID, locale, rtl} = useLocaleStore();

  console.log('Strings ====> ', strings, langID, locale, rtl);

  interface RootState {
    user: {
      user: {
        user: {
          roleType: string;
        };
      };
    };
  }

  const user = useSelector((state: RootState) => state.user.user.user.roleType);

  // console.log('UserType === >: ', user);

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
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}>
            <Image source={icons.BELL} style={styles.bellImg} />
            {notificationsAvailable && (
              <View style={styles.notificationBadge} />
            )}
          </TouchableOpacity>
        </View>
        {/* <View style={styles.search}>
          <SearchComponent
            placeholder="search any services..."
            onSearch={handleSearch}
          />
        </View> */}
        <View>
          <Text style={styles.categoryheading}>
            {strings?.Catrgories || 'Categories'}
          </Text>
        </View>
        {/* -----------------------Categories---------------------- */}
        <View style={styles.categories}>
          <CategoriesCard />
        </View>

        {/* -----------------------Providers---------------------- */}
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.topRatedSellerHeading}>
              {strings?.TopRatedSellers || 'Top Rated Sellers'}
            </Text>
          </View>
          <TopProviderCards />
        </View>
      </ParentView>
    </>
  );
};

export default Home;
