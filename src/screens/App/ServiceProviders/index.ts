import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

// Local imports
import useStyles from './style';
import icons from '../../../assets/icons';
import { ParentView } from '../../../components/common/ParentView/ParentView';
import SearchComponent from '../../../components/SearchComponent';
import { FadeInDown } from 'react-native-reanimated';
import CategoriesCard from '../../../components/CategoriesCard';
import TopProviderCards from '../../../components/TopProviderCards';

const Providers = () => {
  const [showModal, setShowModal] = useState(false);
  const { styles } = useStyles();
  
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // You can add your search logic here
  };

  const [notificationsAvailable, setNotificationsAvailable] = useState(true);

  return (
    <ParentView
      style={styles.container}
      enterAnimation={FadeInDown.duration(500)}
    >
      {/* ==== HEADER ==== */}
      <View style={styles.logoImgCont}>
        <Image source={icons.Logo} style={styles.logoImg} />
        <TouchableOpacity>
          <Image source={icons.BELL} style={styles.bellImg} />
          {notificationsAvailable ? (
            <View style={styles.notificationBadge} />
          ) : null}
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
      
      {/* Categories */}
      <View style={styles.categories}>
        <CategoriesCard />
      </View>

      {/* Providers */}
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.topRatedSellerHeading}>Top Rated Sellers</Text>
        </View>
        <TopProviderCards />
      </View>
    </ParentView>
  );
};

export default Providers;
