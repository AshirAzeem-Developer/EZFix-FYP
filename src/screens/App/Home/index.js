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
          <Text
            style={{
              color: 'black',
              fontSize: width * 0.06,
              fontWeight: 'bold',
              marginLeft: width * 0.04,
              marginTop: height * 0.02,
              fontFamily: 'Dubai-Bold',
            }}>
            Categories
          </Text>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: width * 0.02,

              alignItems: 'center',
            }}>
            {serviceCategories.map((cat, ind) => {
              return (
                <View style={styles.categoryContainer} key={ind}>
                  <Image source={cat.image} style={styles.categoryImageStyle} />
                  <Text style={{marginTop: height * 0.01}}>{cat.name}</Text>
                </View>
              );
            })}
            <TouchableOpacity
              style={{
                padding: width * 0.04,
                paddingHorizontal: width * 0.04,
                // borderRadius: 10,
                borderRadius: width * 0.02,
                padding: width * 0.038,
                backgroundColor: '#d8e7f8',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: height * 0.02,
                marginHorizontal: width * 0.015,
              }}>
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
            <Text
              style={{
                color: 'black',
                fontSize: width * 0.06,
                fontWeight: 'bold',
                marginLeft: width * 0.04,
                marginTop: height * 0.02,
              }}>
              Top Rated Seller
            </Text>

            <TouchableOpacity>
              <Text
                style={{
                  color: 'grey',
                  fontSize: width * 0.04,
                  fontWeight: 'bold',
                  marginRight: width * 0.04,
                  marginTop: height * 0.02,
                }}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <SellerCard />
        </View>
      </View>
    </>
  );
};

export default Index;
