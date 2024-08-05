import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

// Local imports
import useStyles from './style';
import icons from '../../../assets/icons';
import {ParentView} from '../../../components/common/ParentView/ParentView';
import SearchComponent from '../../../components/SearchComponent';
import {FadeInDown} from 'react-native-reanimated';
import CategoriesCard from '../../../components/CategoriesCard';
import TopProviderCards from '../../../components/TopProviderCards';
import AllProviderCards from '../../../components/AllProvidersCard';

const Providers = () => {
  const [showModal, setShowModal] = useState(false);
  const {styles} = useStyles();

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // You can add your search logic here
  };

  const [notificationsAvailable, setNotificationsAvailable] = useState(true);

  return (
    <ParentView
      style={styles.container}
      enterAnimation={FadeInDown.duration(500)}>
      {/* ==== HEADER ==== */}
      {/* Categories */}
   

      {/* Providers */}
      <View>
        <AllProviderCards />
      </View>
    </ParentView>
  );
};

export default Providers;
