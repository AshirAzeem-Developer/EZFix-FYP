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
import styles from './style';
import icons from '../../../assets/icons';
import images from '../../../assets/images';
import SellerCard from '../../../components/TopRatedSellerCard';

//third party library

// dimenstion
const {width, height} = Dimensions.get('window');

const Index = ({navigation, ...props}) => {
  const serviceCategories = [
    {
      id: 1,
      name: 'Mechanic',
      image: images.Mechanic,
    },
    {
      id: 2,
      name: 'Plumber',
      image: images.Plumber,
    },
    {
      id: 3,
      name: 'Electrician',
      image: images.Electrician,
    },
  ];
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          {/* ================ >>> Header <<<< ================ */}
          <View style={styles.headerContainer}>
            <TouchableOpacity>
              <Image source={icons.Menu} style={styles.menu} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={images.HandyMan} style={styles.profileLogo} />
            </TouchableOpacity>
          </View>
          {/* ================ >>> Search <<<< ================ */}
          <View style={styles.searchContainer}></View>

          {/* ============== >>>  Categories <<<< ================= */}
          <View>
            <Text style={styles.categoriesText}>Categories</Text>
            <View style={styles.categoriesContainer}>
              {serviceCategories.map((cat, ind) => {
                return (
                  <View style={styles.categoryContainer} key={ind}>
                    <Image
                      source={cat.image}
                      style={styles.categoryImageStyle}
                    />
                    <Text style={styles.catName}>{cat.name}</Text>
                  </View>
                );
              })}
              <TouchableOpacity
                onPress={() => navigation.navigate('Categories')}
                style={styles.viewAllCategories}>
                <Image
                  source={images.ViewAll}
                  style={styles.categoryImageStyle}
                />
                <Text style={{marginTop: height * 0.01}}>View All</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View style={styles.topRatedHeadingContainer}>
              <Text style={styles.topRatedText}>Top Rated Seller</Text>

              <TouchableOpacity>
                <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
            </View>

            <SellerCard />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Index;
