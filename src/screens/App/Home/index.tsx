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

//third party library

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const {styles, colors, sizes} = useStyles();
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // You can add your search logic here
  };

  const providers = [
    {
      id: 1,
      name: 'Amir Khan',
      Location: 'Saddar Bazar',
      category: 'Electrician',
      image: images.Provider,
    },
    {
      id: 2,
      name: 'Amir Khan',
      Location: 'Saddar Bazar',
      category: 'Electrician',
      image: images.Provider,
    },
    {
      id: 3,
      name: 'Amir Khan',
      Location: 'Saddar Bazar',
      category: 'Electrician',
      image: images.Provider,
    },
    {
      id: 4,
      name: 'Amir Khan',
      Location: 'Saddar Bazar',
      category: 'Electrician',
      image: images.Provider,
    },
  ];

  const [notificationsAvailable, setNotificationsAvailable] = useState(true);

  return (
    <>
      <ParentView
        style={styles.container}
        enterAnimation={FadeInDown.duration(500)}>
        <View style={styles.logoImgCont}>
          <Image source={icons.Logo} style={styles.logoImg} />
          <TouchableOpacity>
            <Image source={icons.BELL} style={styles.bellImg} />
            {notificationsAvailable ? (
              <View style={styles.notificationBadge} />
            ) : (
              ''
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
            <Text style={styles.categoryheading}>Top Rated Sellers</Text>
          </View>
          <FlatList
            data={providers}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.providers}>
                <View style={styles.providerscard}>
                  <Image source={item.image} style={styles.providerimg} />
                  <View>
                    <Text style={styles.providernames}>{item.name}</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Image source={icons.Star} style={styles.star} />
                      <Text
                        style={{
                          color: colors.BLACK,
                          paddingLeft: sizes.WIDTH * 0.01,
                        }}>
                        4.9
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Image source={icons.map} style={styles.star} />
                      <Text
                        style={{
                          color: colors.GREEN,
                          paddingLeft: sizes.WIDTH * 0.01,
                        }}>
                        {item.Location}
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: colors.BLACK,
                        paddingLeft: sizes.WIDTH * 0.04,
                      }}>
                      {item.category}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ParentView>
    </>
  );
};

export default Home;
