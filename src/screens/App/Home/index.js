import React, {useState, useEffect} from 'react';
import {
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

//local imports
import styles from './style';
import MyStatusBar from '../../../components/StatusBar';
import HomeHeader from '../../../components/HomeHeader';
import icons from '../../../assets/icons';
import IconInput from '../../../components/Input/IconInput';
import AppHeader from '../../../components/AppHeader';
import images from '../../../assets/images';

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
      <View style={styles.categoriesContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            {serviceCategories.map((cat, ind) => {
              return (
                <View>
                  <Image source={cat.image} />
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <Text>Home</Text>
    </>
  );
};

export default Index;
